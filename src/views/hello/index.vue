<template>
  <div class="page page-hello">
    <div class="page-content">
      <!-- 静态资源路径写法事例 -->
      <img src="~@/assets/images/logo.png">
      <h1 v-text="msg"></h1>
      <h2 >现在时间是：{{time}}</h2>
      <div class="demo">
        <h3 class="title">页面链接：</h3>
        <ul>
          <li v-for="item in routerList" :key="item.name" style="margin-bottom:10px">
            <router-link :to="item.path" style="padding: 1px ;font-size: 20px;border-bottom: 1px solid green;">{{item.name}}</router-link>
            <!-- <a :href="item.path" style="padding: 1px ;font-size: 20px;border-bottom: 1px solid green;">{{item.name}}</a> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
// 工具类
import { formatDate } from '@/utils/cloud-utils';
// 组件
export default {
  components: {
  },
  data() {
    return {
      msg: '欢迎进入测试页面',
      time: formatDate(Date.now()),
      start: false,
      routerList: [],
      interval_timer: null,
    }
  },
  created() {
    console.log(this);
    this.init();
    this.routerList = this.$router.options.routes.filter((item) => item.path !== this.$route.path);
  },
  beforeDestroy() {
    this.interval_timer && clearInterval(this.interval_timer);
  },
  methods: {
    init() {
      this.interval_timer = setInterval(() => {
        this.time = formatDate(Date.now());
      }, 1000)
    }
  },
}
</script>

<style lang="less" rel="stylesheet/less" >
  @import "./style.less";
  .page-hello .title {
    font-size: 40PX;
  }
</style>
