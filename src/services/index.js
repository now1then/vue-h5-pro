/* 生成接口，并将接口挂载到vue的原型上
 * @Author: nowThen
 * @Date: 2019-08-14 16:41:37
 */

import Vue from 'vue';
import request from './request';
import { apiUrl } from './apiUrl';

let services = {};

Object.entries(apiUrl).forEach((item) => {
  services[item[0]] = function (options = {}) {
    return request(Object.assign({
      url: item[1]
    }, options))
  }
})

// 将services挂载到vue的原型上
// 业务中引用的方法：this.$services.接口名（小驼峰）
Object.defineProperty(Vue.prototype, '$services', {
  value: services
});

export default services;
