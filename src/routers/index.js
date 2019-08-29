/**
 * @description: 路由
 * @author: nowThen
 */

import Vue from 'vue';
import Router from 'vue-router';

const Hello = () => import(/* webpackChunkName: "apply" */ '@/views/hello');
const Demo = () => import(/* webpackChunkName: "demo" */ '@/views/demo');
const VueView = () => import(/* webpackChunkName: "demo" */ '@/views/vueView');
const Error = () => import(/* webpackChunkName: "error" */ '@/views/error');

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
    meta: {
      title: '组件Demo_1', // 标题
      requireAuth: false, // 登录权限
      keepAlive: false,
    }
  },
  {
    path: '/vueView',
    name: 'vueView',
    component: VueView,
    meta: {
      title: 'CLI3默认页'
    }
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
    meta: {
      title: '404页'
    }
  },
  {
    path: '*',
    redirect: 'error',
  },
];

const router = new Router({
  mode: 'history',
  // mode: 'hash',
  routes
})

export default router;
