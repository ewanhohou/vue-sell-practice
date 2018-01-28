// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';

// 1.導入組件
import Goods from './components/goods/Goods';
import Ratings from './components/ratings/Ratings';
import Seller from './components/seller/Seller';




Vue.config.productionTip = false

// 安裝vue-router
Vue.use(VueRouter);

//定義路由
const routes = [
  {
    path:'/',
    //重定向
    redirect:"/goods"
  },
  {
    path:'/goods',
    component:Goods
  },
  {
    path:'/ratings',
    component:Ratings
  },
  {
    path:'/seller',
    component:Seller
  }
];

//3.創建router實例
const router = new VueRouter({
  routes, // 相當於 routes: routes
  linkActiveClass: 'active'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  //創建和掛載根實例
  router
})
