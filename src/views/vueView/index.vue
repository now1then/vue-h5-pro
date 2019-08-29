<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/component_modules/HelloWorld.vue'

export default {
  name: 'page-vue-view',
  components: {
    HelloWorld
  },
  created() {},
  methods: {
    // 获取页面配置信息接口 get Promise
    $_qryPageConfig() {
      this.$services
        .qryPageConfig({
          method: 'get', // 默认
          params: {
            page: 'login'
          }
        })
        .then(res => {
          this.pageConfig = res.data;
        })
        .finally(() => {})
    },
    // 设置页面配置接口 post async/await
    $_order: async function() {
      this.loading = true
      const res = await this.$services.setPageConfig({
        prefix: 'baidu', // 匹配url前缀
        ifHandleError: true, // 不对该接口进行全局错误提示。
        method: 'post',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        data: {
          userId: this.idCard,
          userName: this.realName,
          color: 'red'
        }
      })
      this.loading = false
      if (res.data) {
        // Total("success");
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
