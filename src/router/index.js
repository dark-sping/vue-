// 导入组件
import Login from "../components/login/Login.vue";
import Admin from "../components/admin/admin.vue";
// 资源下载
//资源下载-内容管理
import downarticlelist from '../components/admin/down/downartlist.vue';
import downartadd from '../components/admin/down/artadd.vue';
import downartedit from '../components/admin/down/artedit.vue';

//资源下载-类别管理
import downcatelist from '../components/admin/down/categorylist.vue';
import downcateadd from '../components/admin/down/categoryadd.vue';
import downcateedit from '../components/admin/down/categoryedit.vue';

// 购物商城
// 购物商城-内容管理
import goodslist from '../components/admin/goods/goodslist.vue';
import goodsadd from '../components/admin/goods/goodsadd.vue';
import goodsedit from '../components/admin/goods/goodsedit.vue';

// 购物商城-类别管理
import goodscatelist from '../components/admin/goods/goodscatelist.vue';
import goodscateadd from '../components/admin/goods/categoryadd.vue';
import goodscateedit from '../components/admin/goods/categoryedit.vue';

export default{
  routes:[
    { name: 'login', path: '/login', component: Login },
    {name: 'admin', path: '/admin', component: Admin, children: [
      { name: 'downarticlelist', path: 'downloads/downarticlelist', component: downarticlelist },
      { name: 'downcateadd', path: 'downloads/downcateadd', component: downcateadd },

      { name: 'goodslist', path: 'goods/goodslist', component: goodslist },
      { name: 'goodsadd', path: 'goods/goodsadd', GoodsCtList: goodsadd },
      ] }
  ]
}