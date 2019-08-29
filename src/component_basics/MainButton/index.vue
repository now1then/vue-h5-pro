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
      default: '确定'
    },
    btnDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleNext() {
      this.$emit('handle-click');
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.common-btns {
  padding: 20px 24px;
  .common-btn {
    height: 48px;
    width: 300px;
    border: none;
    color: #fff;
    border-radius: 48px;
    font-size: 18px;
    background-image: linear-gradient(-210deg, #5ad0ff 0%, #087af7 100%);
    box-shadow: 0 4px 9px 0 #9dc4ec;
  }
  .common-btn[disabled] {
    opacity: 0.3;
    box-shadow: 0 4px 9px 0 #a7b2bb;
  }
}
</style>
