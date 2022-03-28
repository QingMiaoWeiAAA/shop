/*
 * @Author: your name
 * @Date: 2022-03-21 20:52:04
 * @LastEditTime: 2022-03-21 20:58:16
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shoppings\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/project.js";
// 引入vantui库的组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false;

Vue.use(Vant);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
