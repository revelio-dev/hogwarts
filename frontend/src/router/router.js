import Vue from "vue";
import Router from "vue-router";

import Home from '../views/Home'
import About from "../views/About";
import Errorpage from "../views/Errorpage";
import Searchweather from "../components/Weather-Component/Searchweather";
import Cardweather from "../components/Weather-Component/Cardweather"



Vue.use(Router);

export default new Router({

    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: 'home',
        component: Home
    }, {
        path: "/about",
        name: 'about',
        component: About
    }, {
        path: "/app",
        name: "weather",
        component: Searchweather
    }, {
        path: "/app/card",
        name: "cardweather",
        component: Cardweather
    }, {
        path: "*",
        name: '404',
        component: Errorpage
    }
    ]
});

