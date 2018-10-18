<template>
  <div class="Sheet">
    <el-col :span="24" class="header">
      <el-col :span="3">
        <!-- logo部分 -->
        <div class="logo">
          我是老中医
        </div>
        <!-- 左侧导航栏 -->
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
          <el-menu index="1" v-for ="item in newrouter[0].children" :key="item.name" v-if="!item.hidden"> 
            <router-link v-if="!item.hidden" :to="item.path">  
                <el-submenu index="1-4" >
                <template slot="title">{{item.name}}</template>
                <el-menu-item index="1-4-1">{{item.name}}</el-menu-item>
              </el-submenu>    
         </router-link>       
          </el-menu>
        </el-menu>    
      </el-col>
<!-- <router-link v-if="!item.hidden&&!item.children" :to="item.path">
          	       <el-menu-item :index="item.path" >
                    {{ item.name}}
                   </el-menu-item>
               </router-link> -->




      <!-- 顶部导航栏 -->
      <el-col :span="21" >
        <el-col :span="18" style=" background-color:pink">
        <el-radio-group v-model="isCollapse" >
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        </el-col>

       <el-col :span="6" style=" background-color:yellow">
         <el-button type="primary"  plain disabled>{{role}}</el-button>
         <el-dropdown  @command="handleCommand">
             <span class="el-dropdown-link"> 
               {{name}}
               <i class="el-icon-arrow-down el-icon--right"></i>
             </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="personal" >个人中心</el-dropdown-item>
              <el-dropdown-item command="loginOut" >退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>


        <div class="line">
          <router-view></router-view>
         
        </div>
      </el-col>
   </el-col>   
    </div>
</template>
<script>
import store from "../store/store.js";
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      currentTopMenu: "1",
      isCollapse: false
    };
  },
  computed: {
    ...mapGetters(["name"]),
    ...mapGetters(["role"]),
    ...mapGetters(["newrouter"])
  },
  created() {
    this.gets();
  },
  methods: {
    gets() {
      console.log(this.newrouter);
    },
    handleCommand(command) {
      if (command == "loginOut") {
        this.$store
          .dispatch("LoginOut")
          .then(() => {
            this.$router.push("/admin");
            this.$message.success("退出成功");
          })
          .catch(err => {
            this.$message.error("退出失败");
          });
      }
      if (command == "personal") {
        this.$router.push("sheet/personal");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  // height: 60px;
  font-size: 32px;
  // line-height: 60px;
  background-color: pink;
}
.login {
  float: right;
}
a {
  text-decoration: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
