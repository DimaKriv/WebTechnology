import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import VueRouter from "vue-router";
import routes from './routers'
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
