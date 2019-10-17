import Vue from 'vue'
import App from './App.vue'
import router from './services/router'
import store from './store/index'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import '../src/assets/css/app.css'
import { FormPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.config.app = process.env



Vue.use(BootstrapVue)
Vue.use(FormPlugin);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
