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
    background: #fff;
    color: #48576a;
  }
  
  .el-aside {
    background-color: #267cb7;
    color: #fff;
  }
  
  .el-main {
    background-color: rgb(215, 243, 148);
    color: #333;
  }
  .Aside{
    height:100%;
  }
</style>