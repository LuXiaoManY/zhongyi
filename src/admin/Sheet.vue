<template>
    <div class="Sheet">
      <!-- 顶部导航栏 -->
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">后台管理系统</a>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">登录</a></li>
                </ul>
        </div>
          </nav>
          <!-- 侧面导航栏 -->
          <div class="powerful">
             <el-row class="tac">
                <el-col :span="12">
                  <el-menu default-active="2" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#409EFF" text-color="#fff" active-text-color="#ffd04b">
                    <!-- 管理员 -->
                    <router-link :to="{path:'/manger'}">
                    <el-menu-item index="2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">管理员</span>
                    </el-menu-item>
                    </router-link>

                    <el-menu-item index="4">
                      <i class="el-icon-setting"></i>
                      <span slot="title">导航四</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>
          </div>
          <!-- 内容 -->
          <div class="content">
            <router-view></router-view>
          </div>
    </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
.powerful {
  height: 1000px;
  width: 10%;
  float: left;
  margin-top: 55px;
  // background-color: pink;
  .el-col-12 {
    width: 100%;
  }
}
.content {
  width: 89%;
  margin-top: 55px;
  margin-left: 10px;
  height: 500px;
  float: left;
  background-color: lawngreen;
}
</style>