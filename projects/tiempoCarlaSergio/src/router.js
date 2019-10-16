/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

import Details from "@/views/detalles";


Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: 'detalles',
        component: Details
    }]
});