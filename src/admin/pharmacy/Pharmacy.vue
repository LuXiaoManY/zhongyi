<template>
    <!-- 增加药材 -->
    <div class="Symptom">
     <el-input class="con" placeholder="请输入药材名" v-model="name" clearable></el-input>
     <el-input class="con" placeholder="请输入备注" v-model="remark" clearable></el-input>
     <el-button class="ok" type="primary" @click="addPharmacy">确认添加</el-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      remark: ""
    };
  },
  methods: {
    addPharmacy() {
      if (this.name == "") {
        this.$message.error("药草名不能为空");
      } else {
        this.axios
          .post("/api/pharmacy/addPharmacy", {
            name: this.name,
            remark: this.remark
          })
          .then(res => {
            if (res.status == 200) {
              this.$message.success("添加成功");
            } else {
              this.$message.error("添加失败");
            }
          })
          .catch(err => {
            console.log(err);
            this.$message.error("添加失败");
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.Symptom {
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;
  // background-color: pink;
  .con {
    margin-bottom: 20px;
    width: 50%;
  }
  .ok {
    width: 50%;
  }
}
</style>