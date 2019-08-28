<!--基础组件之-tip提示框-->
<template>
  <transition :name="`tip-${position}`">
    <div class="rn-tip" :class="`rn-tip-${position}`" v-show="value" @click="hide(true)">
      <slot>
        <div class="default-tip-title" :class="`default-tip-${type}`">
          <span class="default-text">{{text}}</span>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
/**
 * tip提示 控件
 * @props 参数 text: slot未设置时，显示的文本信息
 * @props 参数 delay: 多久之后自动关闭tip提示框
 * @props 参数 position: tip弹出框的显示位置
 * @props 参数 type: 提示信息的tip属性(成功、失败、警告)。 当然也可以自己外部设置class样式
 * @Events 事件 on-hide: tip弹框消失触发的事件
 * @Slots 插值 默认：tip框的具体内容
 */
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '这是提示'
    },
    delay: {
      type: Number,
      default: 2000
    },
    position: {
      type: String,
      default: 'top',
      validator: function(value) {
        return value === 'top' || value === 'bottom';
      }
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  data() {
    return {
      showTip: false,
      timer: null
    };
  },
  watch: {
    value(newVal) {
      if (newVal) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.hide(false);
        }, this.delay);
      }
    }
  },
  methods: {
    // 可外部调用
    show() {
      //        this.showTip = true;
      this.$emit('input', true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.hide(false);
      }, this.delay);
    },
    hide(closeType) {
      //        this.showTip = false;
      //        this.value = false;
      this.$emit('input', false);
      this.$emit('on-hide', closeType);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.rn-tip {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  /*background: rgba(0, 0, 0, 0.3);*/

  &-top {
    top: 0;
    bottom: unset;
    .default-tip-title {
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }
  &-bottom {
    top: unset;
    bottom: 0;
    .default-tip-title {
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
    }
  }
}
.default-tip-title {
  text-align: center;
  padding: 15px 0;
  background-color: #edf2fc;
  border-color: #e6ebf5;
  color: #878d99;
  box-shadow: 0 1px 3px -1px #dcd6d6;
  .default-text {
    font-size: 14px;
  }
}

.default-tip-info {
  background-color: #edf2fc;
  border-color: #e6ebf5;
  color: #878d99;
}
.default-tip-error {
  background-color: #fee;
  border-color: #fedddd;
  color: #fa5555;
}
.default-tip-warning {
  background-color: #fdf5e6;
  border-color: #fbeccd;
  color: #eb9e05;
}
.default-tip-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}

.tip-top-enter,
.tip-top-leave-to {
  transform: translate3d(0, -100%, 0);
}
.tip-top-enter-active,
.tip-top-leave-active,
.tip-bottom-enter-active,
.tip-bottom-leave-active {
  transition: all 0.5s;
}
.tip-bottom-enter,
.tip-bottom-leave-to {
  transform: translate3d(0, 100%, 0);
}
</style>
