<template>
<el-dropdown class="header" > 
  <!--  @command="handleCommand" 模板自带方法 处理页面间的跳转 这里用到自定义的方法此方法作为备选-->
  <span class="el-dropdown-link">
    <span>欢迎{{uname}}</span><i class="el-icon-star-off"></i>
    功能
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="admin">预览首页</el-dropdown-item>
    <el-dropdown-item command="b">修改密码</el-dropdown-item>
    <!-- 《==知识点==》退出的原生模板在添加事件时，无法直接作用到元素身上， 如果要监听浏览器原生事件, 添加一个native修饰符即可 -->
    <el-dropdown-item command="login"  @click.native="logout">退出登录</el-dropdown-item>
    
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
    // 利用此方法可以直接进行页面的跳转
    // var handleCommand = handleCommand(command) {
    //     this.$router.push(command);
    //   },
     methods: {
      
      logout(){
        this.$http.get(this.$api.logout)
          .then(res =>{
            if (res.data.status === 0) {
              this.$router.push({name:'login'});
            } else {
              this.$alert(res.data.message);
            }
          })
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