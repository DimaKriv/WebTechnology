import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueRouter from 'vue-router'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
