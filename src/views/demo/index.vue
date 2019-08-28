<template>
  <div class="page-demo">
    <h1>demo页面</h1>
    <MainButton />
  </div>
</template>

<script>
import { formatDate } from '@/utils/cloud-utils';
import MainButton from '@/component_basics/MainButton';
import transferDom from '@/directives/transferDom';

export default {
  name: 'page-demo',
  components: { // 组件
    MainButton
  },
  directives: { // 指令
    transferDom
  },
  filters: { // 过滤器
    formatDate
  },
  data() {
    return {
      title: '测试'
    }
  },
  methods: {}
}
</script>

<style>

</style>template
