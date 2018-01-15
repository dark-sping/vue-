<template>
<el-menu
  default-active="2"
  class="el-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose"
  background-color='#267cb7'
   text-color="#fff">
 
  
  <el-submenu  v-for='item in menu' :key='item.title' :index="item.title">
    <!-- 标题部分 -->
    <template slot="title">
     <i data-v-2681679a class="el-icon-message"  color="#fff"></i>
      <span style='backgroundcolor:rga(29, 131, 226)'>{{item.title}}</span>
    </template>
    <!-- 子菜单部分 -->
    <el-menu-item v-for='subitem in item.chlidren' :key='subitem.title' :index="subitem.title">
      <i data-v-2681679a class="el-icon-document"></i>
     <router-link :to='subitem.path' style='backgroundcolor:rga(29, 131, 226)'>{{subitem.title}}</router-link>
    </el-menu-item>
   
  </el-submenu>
</el-menu>  
</template>

<script>
  export default {
    data () {
      return {
        menu:[
          {
            title:'学员问题汇总',
            chlidren:[
              {title:'内容管理',path:'/a'},
              {title:'类别管理',path:'/b'},
              {title:'评论管理',path:'/c'},
            ]
          },
           {
            title:'前端常用功能',
            chlidren:[
              {title:'内容管理',path:'/a'},
              {title:'类别管理',path:'/b'},
              {title:'评论管理',path:'/c'},
            ]
          },
           {
            title:'重难点专区',
            chlidren:[
              {title:'内容管理',path:'/a'},
              {title:'类别管理',path:'/b'},
              {title:'评论管理',path:'/c'},
            ]
          },
           {
            title:'资源下载',
            chlidren:[
              {title:'内容管理',path:'/a'},
              {title:'类别管理',path:'/b'},
              {title:'评论管理',path:'/c'},
            ]
          },
          {
            title:'购物商城',
            chlidren:[
              {title:'内容管理',path:'/a'},
              {title:'类别管理',path:'/b'},
              {title:'评论管理',path:'/c'},
            ]
          },
          {
            title:'订单管理',
            chlidren:[
              {title:'内容管理',path:'/a'},
              {title:'类别管理',path:'/b'},
              {title:'评论管理',path:'/c'},
            ]
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>


</style>