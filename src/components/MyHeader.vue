<!--
 * @Author: your name
 * @Date: 2022-03-22 08:14:17
 * @LastEditTime: 2022-03-22 09:38:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shoppings\src\components\Header.vue
-->
<template>
  <div id="myheader">
    <MyTop/>
    <div class="daohang">
      <div class="daobao">
        <p @click="tuijian">今日推荐</p>
        <p @click="shishang">时尚</p>
        <p @click="meizhuang">美妆</p>
        <p @click="jiadian">家电</p>
        <p @click="jiaju">家居</p>
        <p @click="guoji">国际</p>
        <p @click="shenghuo">生活</p>
      </div>
    </div>
  </div>
</template>

<script>
import MyTop from "@/pages/shouye/Login.vue"
export default {
  name: "myheader",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    tuijian() {
      this.$router.push({
        path: "/tuijian",
      });
    },
    shishang() {
      this.$router.push({
        path: "/shishang",
      });
    },
    meizhuang() {
      this.$router.push({
        path: "/meizhuang",
      });
    },
    jiadian() {
      this.$router.push({
        path: "/jiadian",
      });
    },
    jiaju() {
      this.$router.push({
        path: "/jiaju",
      });
    },
    guoji() {
      this.$router.push({
        path: "/guoji",
      });
    },
    shenghuo() {
      this.$router.push({
        path: "/shenghuo",
      });
    }
  },
  components:{
    MyTop
  }
};
</script>

<style scoped>
.daohang {
  width: 7.5rem;
  height: 0.7rem;
  overflow: scroll;
  background: #f7f7f7;
}
.daohang p {
  height: 100%;
  flex: 1;
  text-align: center;
  line-height: 0.7rem;
  color: #595959;
  font-size: 0.2rem;
  margin-bottom: 0;
}
.daohang p:hover {
  color: #e537b0;
  border-bottom: 2px solid #e537b0;
}
.daobao {
  width: 15rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  height: 100%;
}
.daohang::-webkit-scrollbar {
  display: none;
}

</style>
