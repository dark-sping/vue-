<template>
<el-dropdown @command="handleCommand" class="header" >
  <span class="el-dropdown-link">
    <span>欢迎{{uname}}</span><i class="el-icon-star-off"></i>
    功能
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="admin">预览首页</el-dropdown-item>
    <el-dropdown-item command="b">修改密码</el-dropdown-item>
    <el-dropdown-item command="login">退出登录</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
</template>

<script>
  export default {
    data () {
      return {
      uname:'admin'  
      }
    },
     methods: {
      handleCommand(command) {
        this.$router.push(command);
      }
    }
  }
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;

  }
  .header {
      display: block;
      text-align: right;
      line-height: 60px;
  }
</style>