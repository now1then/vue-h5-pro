/**
 * @description: 路由
 * @author: nowThen
 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Error from './views/error'
const Hello = () => import(/* webpackChunkName: "apply" */ '@/views/hello');

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
