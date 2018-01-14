<template>
<el-container class="Aside">
  <el-aside width="200px" >
    <Aside></Aside>
  </el-aside>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
import Header from "./common/Header.vue";
import Aside from "./common/Aside.vue";
  export default {
    // 注册子组件, 下面使用了es6语法
    components: {
      Header,
      Aside
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: rgb(209, 128, 202);
    color: #333;
  }
  
  .el-aside {
    background-color: rgb(107, 241, 241);
    color: #333;
  }
  
  .el-main {
    background-color: rgb(215, 243, 148);
    color: #333;
  }
  .Aside{
    height:100%;
  }
</style>