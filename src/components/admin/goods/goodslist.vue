<template>
  <div>
   
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>购物商城</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        
      </el-breadcrumb>
    
      <div>
          <el-button size="mini" plain icon="el-icon-plus">新增</el-button>
          <el-button size="mini" plain icon="el-icon-check">全选</el-button>
          <el-button size="mini" plain icon="el-icon-delete">删除</el-button>
          <el-input style="width: 200px; float: right;" size="mini"
              placeholder="请输入内容" prefix-icon="el-icon-search"
              v-model="gsListQuery.searchvalue" @blur="getGoodsList"></el-input>
      </div>

      <el-table tooltip-effect="dark" style="width: 100%" ref="multipleTable" :data="tableData3">

        <!-- 多选框 -->
        <!-- type用来指定当前列的类型, 不指定的就是普通文本类型, 这里指定为selection含义是多选框类型 -->
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- 标题 -->
        <!-- 没有type类型就是普通类型, 普通类型可以通过label设置表头 -->
        <!-- 普通类型还通过内嵌template标签, 书写当前列展示的数据 -->

          <el-table-column label="标题">
            <!-- scope.row是固定写法, title是活的, 展示什么字段, 就写什么 -->
                <template slot-scope="scope">{{ scope.row.title }}</template>
          </el-table-column>

        <!-- 所属类别 -->
        <!-- 没有type类型就是普通类型, 普通类型可以通过label设置表头 -->
        <!-- 普通类型还可以通过prop属性指定当前列展示的数据字段, 比template方便 -->
        <el-table-column prop="categoryname" label="所属类别" width="120"> </el-table-column>
        <!-- 库存 -->
        <el-table-column prop="stock_quantity" label="库存" width="120"></el-table-column>
        <!-- 市场价 -->
        <el-table-column prop="market_price" label="市场价" width="120"></el-table-column>
        <!-- 销售价 -->
        <el-table-column prop="sell_price" label="销售价" width="120"></el-table-column>
        <!-- 属性 -->
        <!-- 显示的数据是三个icon图标, 只能用template包裹实现 -->
        <el-table-column label="日期" width="120">
          <!-- 通过改变el-icon的class值确定数据状态  改变用active属性-->
          <template slot-scope="scope">
            <i class="el-icon-picture active"></i>
            <i class="el-icon-upload"></i>
            <i class="el-icon-star-on"></i>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <!-- 显示的数据是死的, 固定为'修改', 用template包裹实现, 同时需要包裹router-link标签, 为了实现点击跳转 -->
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">
            <router-link :to="{ name: 'goodsedit', params: { id: scope.row.id} }">修改</router-link>
          </template>
        </el-table-column>

      </el-table>
  </div>
</template>

<script>
  export default {
     data() {
          return {

            // 表格数据, 将来从接口里面拿
            tableData3: [],
            // 请求接口所需的查询字符串
            gsListQuery: {
                pageIndex: 1,
                pageSize: 10,
                searchvalue: ''
            }
          }
        },
        methods: {
          // 获取商品列表数据
          getGoodsList() {
            // get方法的第二个参数是一个配置对象, 该对象里面可以设置headers请求头, 还可以设置params查询字符串
            //localhost:8899/admin/goods/getlist?pageIndex=1&pageSize=1 正确地址书写方式
            //          8899/admin/goods/getlist/?pageIndex=1&pageSize=10&searchvalue=:
            this.$http.get(this.$api.gsList, { params: this.gsListQuery }).then(res => {
              this.tableData3 = res.data.message;
              // 接口还会返回如下三个数据, 将来分页的时候要用
              res.data.totalcount
              // res.data.pageIndex
              // res.data.pageSize
            });
          }
        },
       // 组件初始化完毕后, 立马调用接口进行渲染
        created() {
          this.getGoodsList();
        }
    }
 
</script>

<style scoped lang="less">
  [class^="el-icon"]{
    font-size: 24px;
    color: rgba(0, 0, 0, .3);
    cursor: pointer;
    &.active{
      color: rgb(0, 0, 0)
    }
  }
</style>