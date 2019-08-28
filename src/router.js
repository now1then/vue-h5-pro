/**
 * @description: 路由
 * @author: nowThen
 */

import Vue from 'vue';
import Router from 'vue-router';

import VueView from './views/vueView';
import Error from './views/error';
const Hello = () => import(/* webpackChunkName: "apply" */ './views/hello');
const Demo = () => import(/* webpackChunkName: "demo" */ './views/demo');

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
      title: '演示Demo', // 标题
      requireAuth: false, // 登录权限
      keepAlive: false,
    }
  },
  {
    path: '/vueView',
    name: 'vueView',
    component: VueView
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  }
];

const router = new Router({
  mode: 'history',
  // mode: 'hash',
  routes
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 登录权限
  if (to.meta.requireAuth) { // 判断是否校验登录权限
    if (!window.EventBus.$data.userName) { // 判断是否登录， 本事例从EventBus获取
      next({
        path: '/login',
        query: {
          redirect: to.fullPath // 未登录，跳转到登录页，登录后跳转回当前页。
        }
      })
      return;
    }
  }
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title + ' | vue-h5-pro';
  } else {
    document.title = 'vue-h5-pro';
  }
  next()
})

router.afterEach((to, from) => {
  setLocalRoute(to, from)
});

function setLocalRoute(to, from) {
  // 本地已访问页面路由,存5条
  let local = sessionStorage.getItem('localRoute');
  let localRoute;
  try {
    localRoute = JSON.parse(local) || [];
  } catch (e) {
    localRoute = [];
  }
  const from_index = localRoute.indexOf(from.path);
  const to_index = localRoute.indexOf(to.path);
  if (from_index < 0) {
    localRoute.unshift(from.path);
    to_index >= 0 && localRoute.splice(to_index, 1)
  }
  if (localRoute.length > 5) {
    localRoute.splice(0, 1)
  }
  sessionStorage.setItem('localRoute', JSON.stringify(localRoute));
}

export default router
