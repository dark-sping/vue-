//1.1 导入第三方包
import Vue from 'vue';
import VueRouter from "vue-router";

// 1.2启动vue
Vue.use(VueRouter);
// 2.1 导入自己写的根组件
import App from './component/App.vue'
// 2.2导入路由 路由书写写的文件  并将路由挂载到vue对象中  再去路由文件index.js中设置组件路由
import routerConfig from "./router/index.js";
// 3导入axios 因为axios不是插件 不用use
import axios from "axios";
axios.defaults.baseURL = "http://157.122.54.189:9095";
Vue.prototype.$http = axios; //将axios添加到原型中

// 4 导入api配置对象, 为了使用更加方便, 把它也加到原型中
import api from "./js/api-config.js";
Vue.prototype.$api = api;

// 5引入element-units
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 6 引入normalize.css 基础样式
import 'normalize.css';

new Vue({
  el:'#app',
  render: function (createElement) {
    return createElement(App);
  },
  router:new VueRouter(routerConfig)
})