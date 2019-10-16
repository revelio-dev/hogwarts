import Vue from 'vue'
import Router from 'vue-router'


import Home from "@/views/Home"
import Home2 from "@/views/Home2"


Vue.use(Router)

global.Vue = Vue

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home2',
      name: 'Home2',
      component: Home2
    }
  ]
})
