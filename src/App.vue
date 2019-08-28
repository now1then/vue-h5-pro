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
      let local = sessionStorage.getItem('localRoute');
      let localRoute;
      try {
        localRoute = JSON.parse(local);
      } catch (e) {
        localRoute = [];
      }
      // console.log(localRoute, currentPath);
      const index = localRoute.indexOf(currentPath);
      let tranName = '';

      if (index >= 0) {
        tranName = 'page-back';
      } else {
        tranName = 'page-go';
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
  created() {},
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
  }
  .page-go-enter-to {
    transform: translate3d(0, 0, 0);
  }
  .page-go-leave-active {
    transform: translate3d(0, 0, 0);
  }
  .page-go-leave-to {
    transform: translate3d(-100%, 0, 0);
  }
  .page-back-enter-active {
    transform: translate3d(-100%, 0, 0);
  }
  .page-back-enter-to {
    transform: translate3d(0, 0, 0);
  }
  .page-back-leave-active {
    transform: translate3d(0, 0, 0);
  }
  .page-back-leave-to {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
