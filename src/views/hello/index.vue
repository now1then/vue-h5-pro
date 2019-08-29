<template>
  <section class="page-hello">
    <div class="page-content">
      <div class="msg-area common-msg-area">
        <p class="msg-title" v-text="msg"></p>
        <!-- <img src="~@/assets/images/logo.png"> -->
        <div class="user-img"></div>
        <h3 class="app-name">
          vue-h5-pro
          <i class="iconfont iconRN-recommend"></i>
        </h3>
        <p class="user-desc">欢迎访问本项目，本项目是基于@Vue/CLI3构建的移动端h5项目模板，内容持续完善...</p>
        <p>你的支持是我前进最大的推力！</p>
        <div class="icons-link">
          <a href>
            <i class="iconfont iconRN-edit"></i>
          </a>
          <a href="https://www.yuque.com/nowthen/longroad">
            <i class="iconfont iconRN-yuque"></i>
          </a>
          <a href="https://github.com/now1then/vue-h5-pro">
            <i class="iconfont iconRN-git"></i>
          </a>
          <a href="https://juejin.im/user/5a323f2851882552e652b7ef/posts">
            <i class="iconfont iconRN-juejin"></i>
          </a>
        </div>
        <h2 class="time-area">
          现在时间是：
          <show-time />
        </h2>
      </div>

      <div class="common-msg-area urls-area">
        <h3 class="title">项目页面链接：</h3>
        <ul class="list-ul">
          <template v-for="item in routerList">
            <li v-if="item.name" :key="item.name" class="list-li">
              <router-link
                :to="item.path"
                class="url-link"
              >{{(item.meta && item.meta.title) || item.name}}</router-link>
            </li>
          </template>
        </ul>
      </div>
      <p>点击后tip提示</p>
      <main-button btn-text="确定" :btn-disabled="false" @handle-click="handleNext" />
    </div>
    <base-tip v-model="tip.show" :text="tip.text" :type="tip.type" />
  </section>
</template>

<script type="text/babel">
import ShowTime from '@/component_modules/ShowTime';
import MainButton from '@/component_basics/MainButton';
import BaseTip from '@/component_basics/BaseTip';
// 组件
export default {
  name: 'page-hello',
  components: {
    ShowTime,
    MainButton,
    BaseTip
  },
  data() {
    return {
      tip: {
        show: false,
        text: '欢迎多多点击！',
        type: 'success'
      },
      msg: '欢迎访问!',
      start: false,
      routerList: [],
      interval_timer: null
    };
  },
  created() {
    this.routerList = this.$router.options.routes.filter(
      item => item.path !== this.$route.path
    );
  },
  methods: {
    handleNext() {
      const types = [
        { type: 'info', text: '欢迎多多点击！' },
        { type: 'success', text: '恭喜点击成功了！' },
        { type: 'warning', text: '警告，警告...' },
        { type: 'error', text: '错误提示：点击次数超限！' }
      ];
      const random = Math.floor(Math.random() * 4);
      this.tip.show = true;
      this.tip.text = types[random].text;
      this.tip.type = types[random].type;
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" >
@import './style.less';
</style>
