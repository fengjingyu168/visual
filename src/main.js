// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/font-awesome/css/font-awesome.min.css'
import 'babel-polyfill'
import Promise from 'promise'

import jquery from 'jquery'
// 删除模态框插件
// 确认操作模态框插件
Vue.prototype.JQ = jquery
Vue.prototype.Promise = Promise


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
