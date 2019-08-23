<!--顶部提示-->
<template>
  <div class="top-prompt">{{text}}</div>
</template>

<script type="text/babel">
  export default {
    name: 'TopPrompt',
    props: {
      text: {
        type: String,
        default: '提示',
      }
    },
    data() {
      return {}
    },
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .top-prompt {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    background: #FFF4EB;
    color: #B96641;
    padding: 0 12px;
    font-family: PingFangSC-Light;
  }
</style>
