// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import router from './router';
import echarts from 'echarts';

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
const service = axios.create({
  baseURL: process.env.BASE_API,//自己定义一个baseURL，这里我写在了实例里面
})
Vue.prototype.$axios = service;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
