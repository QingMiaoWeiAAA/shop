<template>
  <div id="myfooter">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="shouye">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" dot @click="shequ">社区</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" badge="5" @click="gouwuche">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="20" @click="wode">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "myfooter",
  data(){
    return {
        active:0,
    }
  },
  methods: {
    shouye() {
      this.$router.push({
        path: "/tuijian",
      });
    },
    shequ() {
      this.$router.push({
        path: "/shequ/dongtai",
      });
    },
    gouwuche() {
      this.$router.push({
        path: "/gouwuche",
      });
    },
    wode() {
      this.$router.push({
        path: "/wode",
      });
    },
  },
};
</script>

<style scoped>

</style>
