/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

import Details from "@/views/detalles";
import Sobremi from "@/views/Sobremi";
import Error from "@/views/Error404";

Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: 'detalles',
        component: Details
    }, {
        path: "/sobremi",
        name: 'sobremi',
        component: Sobremi
    }, {
        path: "*",
        name: '404',
        component: Error
    }]
});