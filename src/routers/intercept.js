/**
 * @description: 路由拦截
 * @author: nowThen
 */

import router from './index';

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 登录权限
  if (to.meta.requireAuth) { // 判断是否校验登录权限
    if (!window.myVue.userName) { // 判断是否登录，根据实际业务处理
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
  // console.log(to, from);
  if (!(from.path === '/' && from.name === null)) {
    setLocalRoute(to, from)
  }
});

function setLocalRoute(to, from) {
  // 本地已访问页面路由,存5条
  const localRoute = window.myVue.localRoute = window.myVue.localRoute || [];
  const from_index = localRoute.indexOf(from.path);
  const to_index = localRoute.indexOf(to.path);
  if (from_index < 0) {
    localRoute.unshift(from.path);
    to_index >= 0 && localRoute.splice(to_index, 1)
  }
  if (localRoute.length > 5) {
    localRoute.splice(0, 1)
  }
}
