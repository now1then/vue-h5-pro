<template>
  <section class="page-demo">
    <Header showLeft showRight fixed @handle-left="goBack"></Header>
    <div class="page-content header-fixed">
      <h1 style="text-align:center;">demo页面</h1>
      <p>tip提示框演示</p>
      <MainButton />
    </div>
  </section>
</template>

<script>
import { formatDate } from '@/utils/cloud-utils';
import MainButton from '@/component_basics/MainButton';
import Header from '@/component_basics/Header';
import transferDom from '@/directives/transferDom';

export default {
  name: 'page-demo',
  components: { // 组件
    MainButton,
    Header,
  },
  directives: {
    // 指令
    transferDom
  },
  filters: {
    // 过滤器
    formatDate
  },
  data() {
    return {
      title: '测试'
    };
  },
  methods: {
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" >
.page-demo {
  text-align: left;
  .common-btns {
    position: fixed;
    bottom: 0;
  }
}
</style>
