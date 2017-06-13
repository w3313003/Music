// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui'
import Api from './api'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.api = Api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
