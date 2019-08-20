<template>
  <div class="page page-error">
    <!-- <img class="error-404" src="~@/assets/images/404.png" alt="错误提示"> -->
    <div class="content-area">
      <i class="iconfont icon-icon-404"></i>
      <p class="error-info">抱歉，页面无法访问...</p>
      <!-- <router-link to="/">返回首页</router-link> -->
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" rel="stylesheet/less">
  .page-error {
    padding: 20px;
    .content-area {
      text-align: center;
      padding: 20px;
    }
    .error-404 {
      width: 100%;
      padding: 80px 0 0;
    }
    .error-info {
      text-align: center;
      font-size: 14px;
      padding: 10px 0 80px;
    }
    .icon-icon-404 {
      color: #48b4ec;
      opacity: 0.5;
    }
  }
</style>
