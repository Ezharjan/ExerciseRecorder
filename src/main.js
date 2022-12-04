// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/styles/ClearFix.css'
import '@/assets/styles/iconfont.css'
import '@/assets/script/FitRem.js'

Vue.config.productionTip = false
// 引入并使用rem适配工具

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
