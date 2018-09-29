<template>
    <div class="Upload container-fuild row">
        <div class="col-lg-12">
            <form  method="post" id="login_in">
                <h2>后台管理系统</h2>
                <el-input type="text" name="" id="" value="" placeholder="请输入管理员名" v-model="loginForm.adminName"/><label for=""></label>
                <el-input type="password" name="" placeholder="请输入管理员密码" v-model="loginForm.password"/>
                <el-button  @click="adminLogin">登录</el-button>
            </form>
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        adminName: null,
        password: null
      }
    };
  },
  methods: {
    adminLogin: function() {
      console.log(this.loginForm.adminName);
      this.axios
        .get("/api/getValue", {
          params: { name: this.loginForm.adminName }
        })
        .then(res => {
          console.log(res);
          if (res.data[0].passwd == this.loginForm.password) {
            console.log("查找成功");
            // this.$store.dispatch("/admin/sheet");
            this.$router.push("/sheet");
          } else {
            console.log("查找失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.Upload {
  width: 80%;
  margin: 0px auto;
  background-color: pink;

  .el-input {
    padding: 30px;
    width: 50%;
  }
  .el-button {
    width: 46%;
    margin: 30px;
  }
}
</style>