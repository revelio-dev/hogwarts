import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


import Buscador from '@/components/Buscador.vue';
import Cabecera from '@/components/Cabecera.vue';


Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.component('buscador', Buscador)
Vue.component('cabecera', Cabecera)



new Vue({
    router,
    Buscador,
    Cabecera,
    render: h => h(App),
}).$mount('#app')