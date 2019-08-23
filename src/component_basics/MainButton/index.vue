<!--主按钮-->
<template>
  <div class="common-btns">
    <button class="common-btn" :disabled="btnDisabled" @click="handleNext">{{btnText}}</button>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'MainButton',
    props: {
      btnText: {
        type: String,
        default: '确定',
      },
      btnDisabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {}
    },
    methods: {
      handleNext() {
        this.$emit('handle-click');
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
