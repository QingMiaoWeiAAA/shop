<template>
  <div class="gouwucart">
    <MyTop class="mytop" />
    <div class="cartitem">
      <div class="item-top">
        <div class="jian">
          <van-checkbox v-model="checked" class="itemactive" />
          <p>森马旗舰店 ></p>
        </div>
        <div class="ling">
          <p>领券</p>
          |
          <p>编辑</p>
        </div>
      </div>
      <div class="item-main">
        <div class="itemimg">
          <img
            src="https://a2.vimage1.com/upload/merchandise/pdc/676/982/100563133647982676/0/807471-103-5_218x274_70.jpg"
            alt=""
          />
        </div>
        <div class="cartcard">
          <div class="cartstitle">
            <p>耐克Nike TESSEN 女款运动鞋</p>
            <p>￥599</p>
          </div>
          <div class="xiaocard">
            <p>耐克跑步鞋</p>
            <p>x2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyTop from "@/pages/shouye/Login.vue";
export default {
  name: "gouwucart",
  data(){
      return {
          checked: true,
      }
  },
  components: {
    MyTop,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-weight: bolder;
  height: 0.6rem;
  line-height: 0.6rem;
  background: #fff;
  color: #96989e;
  font-size: 0.2rem;
  padding: 0 0.65rem;
}
.item-main {
  box-sizing: border-box;
  padding: 0.2rem 0.4rem;
  height: 2rem;
  display: flex;
  /* justify-content: space-between; */
}
.itemimg {
  width: 1.5rem;
  height: 1.8rem;
  overflow: hidden;
  margin-right: 0.2rem;
}
.itemimg img {
  width: 100%;
  /* height:100%; */
}
.jian,
.ling {
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
}
.ling p {
  padding: 0 0.12rem;
}
.itemactive {
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  margin-right: 0.2rem;
}
.cartcard {
  width: 100%;
}
.cartstitle {
  color: #525252;
  font-size: 0.25rem;
  display: flex;
  font-weight: bolder;
  justify-content: space-between;
  line-height: 0.4rem;
}
.xiaocard {
  font-size: 0.18rem;
  color: #7c7c7c;
  line-height: 0.32rem;
  display: flex;
  justify-content: space-between;
}
.mytop {
  margin-bottom: 0.4rem;
}
</style>