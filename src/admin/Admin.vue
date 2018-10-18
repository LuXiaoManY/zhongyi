<template>
  <div class="admin">
      <div style="margin: 20px;"></div>
      <el-form  label-width="80px" :model="loginFrom">
        <el-form-item label="用户名">
          <el-input v-model="loginFrom.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginFrom.passwd"></el-input>
        </el-form-item> 
      </el-form>
      <el-button type="primary" @click="submitForm(loginFrom)">立即登录</el-button>
  </div>
</template>
 
<script>
import crypto from "../../tools/crypto.js";
import store from "../store/store.js";

export default {
  data() {
    return {
      loginFrom: {
        name: "",
        passwd: ""
      }
    };
  },
  methods: {
    submitForm(data) {
      // console.log(data);
      this.$store
        .dispatch("AdminLogin", data)
        .then(res => {
          this.$message.success("登录成功");
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
          this.$message.error("账号或密码错误");
        });
    }
  }
};
</script>
 
