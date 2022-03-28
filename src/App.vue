<!--
 * @Author: your name
 * @Date: 2022-03-21 20:52:04
 * @LastEditTime: 2022-03-22 09:39:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shoppings\src\App.vue
-->
<template>
  <div id="app">
    <!-- <MyHeader></MyHeader> -->
    <!-- <keep-alive include=""> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <MyFooter></MyFooter>
  </div>
</template>
<script>
// import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "app",
  components: {
    // MyHeader,
    MyFooter,
  },
};
</script>
<style>
a {
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
#app {
  position:relative;
  width: 7.5rem;
  background: #f7f7f7;
  margin:0 auto;
}
#app::-webkit-scrollbar {
  display: none;
}
body{
  height: 500px;
}
</style>
