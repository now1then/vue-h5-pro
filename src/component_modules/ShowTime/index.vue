// 时间显示组件
<template>
  <div class="module-show-time">
    <span>{{timeArr[0]}}</span>
    <span :class="['time-str',{test1: timeArr[2] == 0}]">{{timeArr[1]}}</span>
    <span :class="['time-str',{test1: timeArr[3] == 0}]">{{timeArr[2]}}</span>:
    <span :class="['time-str',{test1: timeArr[4] == 0}]">{{timeArr[3]}}</span>
    <span :class="['time-str',{test1: timeArr[5] == 0}]">{{timeArr[4]}}</span>:
    <span :class="['time-str',{test1: timeArr[6] == 0}]">{{timeArr[5]}}</span>
    <span class="time-str test">{{timeArr[6]}}</span>
  </div>
</template>

<script>
import { formatDate } from '@/utils/cloud-utils';

export default {
  data() {
    return {
      interval_timer: null,
      time: formatDate(Date.now(), 'yyyy年MM月dd日 hh:mm:ss')
    };
  },
  computed: {
    timeArr: function() {
      const arr = [];
      arr[0] = this.time.slice(0, 12);
      arr[1] = this.time.slice(12, 13);
      arr[2] = this.time.slice(13, 14);
      arr[3] = this.time.slice(15, 16);
      arr[4] = this.time.slice(16, 17);
      arr[5] = this.time.slice(18, 19);
      arr[6] = this.time.slice(19, 20);
      return arr;
    }
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    this.interval_timer && clearInterval(this.interval_timer);
  },
  methods: {
    init() {
      this.interval_timer = setInterval(() => {
        this.time = formatDate(Date.now(), 'yyyy年MM月dd日 hh:mm:ss');
      }, 1000);
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.module-show-time {
  display: inline-block;
  color: #0076ff;
  .test {
    animation: haha 1s infinite;
  }
  .test1 {
    animation: haha 3s;
  }
  .time-str {
    border-radius: 2px;
  }

  @keyframes haha {
    0% {
      background: transparent;
      color: #0076ff;
    }
    50% {
      background: rgba(58, 207, 228, 0.3);
      color: red;
    }
    100% {
      background: transparent;
      color: #0076ff;
    }
  }
}
</style>
