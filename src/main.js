import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from 'axios'

import { TableSimplePlugin, BTableSimple, BThead, BTr, BTh, BTbody, BTd } from 'bootstrap-vue'

import '../src/assets/css/app.css'


Vue.config.productionTip = false;
Vue.config.app = process.env;

Vue.use(BootstrapVue, TableSimplePlugin);
Vue.component('b-table-simple', BTableSimple);
Vue.component('b-thead', BThead);
Vue.component('b-tr', BTr);
Vue.component('b-th', BTh);
Vue.component('b-tbody', BTbody);
Vue.component('b-td', BTd);

Vue.http = Vue.prototype.$http = axios;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
