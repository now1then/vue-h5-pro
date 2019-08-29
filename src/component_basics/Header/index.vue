<!--顶部header组件-->
<template>
  <header  :class="['component-header',{'is-fixed': fixed}]">
    <div class="component-header-left" @click="handleLeft">
      <slot name="header-left" v-if="showLeft">
        <i class="iconfont iconRN-right"></i>
      </slot>
    </div>
    <div class="component-header-middle">
      <slot>
        <p class="header-title">{{mainTitle}}</p>
      </slot>
    </div>
    <div class="component-header-right" @click="handleRight">
      <slot name="header-right" v-if="showRight">
        <i class="iconfont iconRN-gift-active"></i>
      </slot>
    </div>
  </header>
</template>

<script type="text/babel">
/**
 * BaseHeader 顶部header组件
 * @props 参数 title: 标题文本 （String 默认:'标题'）
 * @props 参数 showLeft: 是否显示左侧返回图标（Boolean 默认:false-关闭）
 * @props 参数 showRight: 是否显示右侧内容（Boolean 默认:false-关闭）
 * @Events 事件 handle-left: 左侧点击触发
 * @Events 事件 handle-right: 右侧点击触发
 * @Slots 插值 header-left: header 左侧
 * @Slots 插值 header-right: header 右侧
 */
export default {
  name: 'BaseHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    showLeft: {
      type: Boolean,
      default: false
    },
    showRight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    mainTitle() {
      return this.title || (this.$route.meta && this.$route.meta.title)
    }
  },
  methods: {
    handleLeft: function() {
      this.$emit('handle-left');
    },
    handleRight: function() {
      this.$emit('handle-right');
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" >
.component-header {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  font-size: 16px;
  color: #424242;
  padding: 0 10px;
  z-index: 1;
  // border-bottom: 1px solid #ecdede2e;
  box-shadow: 0 1px 4px -2px #696a6b;
  &-left {
    flex: 1;
    text-align: left;
    .iconRN-right {
      transform: rotate(180deg);
    }
  }
  &-middle {
    flex: 3;
    // font-size: 18px;
    text-align: center;
  }
  &-right {
    flex: 1;
    text-align: right;
  }
  .iconfont {
    font-size: 16px;
  }
  .iconRN-gift-active {
    color:forestgreen;
  }
}
.component-header.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
</style>
