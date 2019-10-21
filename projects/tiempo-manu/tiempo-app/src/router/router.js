import Vue from "vue";
import Router from "vue-router";

import Home from '../views/Home'
import About from "../views/About";
import Errorpage from "../views/Errorpage";
import Searchweather from "../components/Weather-Component/Searchweather";

Vue.use(Router);

export default new Router({
    mode: "history",
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
        path: "*",
        name: '404',
        component: Errorpage
    }, {
        path:"/app",
        name:"weather",
        component:Searchweather
        }
    ]
});

