<template>
  <div id="app">
    <transition :name="direction">
      <router-view class="page" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    // 动态设置过渡样式
    direction: function() {
      const currentPath = this.$route.path;
      const localRoute = (window.myVue && window.myVue.localRoute) || [];
      // console.log(localRoute, currentPath);
      const index = localRoute.indexOf(currentPath);
      let tranName = '';

      if (localRoute.length === 0) {
        tranName = 'fade'; // 首页，渐显
      } else if (index >= 0) {
        tranName = 'page-back'; // 回退，右划
      } else {
        tranName = 'page-go'; // 进入新页面，左划
      }
      return tranName;
    }
  },
  watch: {
    $route(to, from) {
      // console.log(to);
      // console.log(from);
    }
  },
  created() {
    console.log('欢迎访问...');
  },
  methods: {}
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @colorFont;
  font-size: @fontSizeH3;

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .page {
    transition: all 0.8s ease-in-out;
  }
  .page-go-enter-active {
    transform: translate3d(100%, 0, 0);
    // transition: all 0.8s ease-in-out;
  }
  .page-go-enter-to {
    transform: translate3d(0, 0, 0);
    // transition: all 0.8s ease-in-out;
  }
  .page-go-leave-active {
    transform: translate3d(0, 0, 0);
    // transition: all 0.8s ease-in-out;
  }
  .page-go-leave-to {
    transform: translate3d(-100%, 0, 0);
    // transition: all 0.8s ease-in-out;
  }
  .page-back-enter-active {
    transform: translate3d(-100%, 0, 0);
    // transition: all 0.8s ease-in-out;
  }
  .page-back-enter-to {
    transform: translate3d(0, 0, 0);
    // transition: all 0.8s ease-in-out;
  }
  .page-back-leave-active {
    transform: translate3d(0, 0, 0);
    // transition: all 0.8s ease-in-out;
  }
  .page-back-leave-to {
    transform: translate3d(100%, 0, 0);
    // transition: all 0.8s ease-in-out;
  }
}
</style>
