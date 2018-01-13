<template>
  <div>
    测试login
    <i class="el-icon-star-on"></i>
    <i class="el-icon-star-on"></i>
    <i class="el-icon-star-on"></i>
    <i class="el-icon-star-on"></i>
    <i class="el-icon-star-on"></i>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        a: 10,
        b: 20
      }
    },
    created () {
      this.$http.get(this.$api.islogin).then(res=>{
        console.log(res.data);
      })
    }
    
  }
</script>

<style scoped>

</style>