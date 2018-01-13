<template>
<el-container>
  <el-aside width="200px" class="aside">
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
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .aside{
    height: 100%;
  }
</style>