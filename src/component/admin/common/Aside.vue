<template>
<el-menu
  default-active="2"
  class="el-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>导航一</span>
    </template>
    <el-submenu index="1-1">
      <template slot="title">选项4</template>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
</el-menu>  
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
  }
</script>
<style scoped>

</style>