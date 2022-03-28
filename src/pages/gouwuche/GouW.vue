<template>
  <div id="gouwu">
    <div class="goutop">
      <div class="top-top">
        <p class="top-back" @click="topback">
          <van-icon name="arrow-left" size="45" class="backicon" />
        </p>
        <p class="daojishi">
          <van-count-down :time="time" class="daoji" />
        </p>
      </div>
      <p class="gouimg">
        <img :src="imgsrc" alt="" />
      </p>
      <div class="gouprice">
        <p class="newprice">￥{{ price }}</p>
        <p class="oldprice">￥{{ oldprice }}</p>
        <p class="zheprice">{{ zhe }}折</p>
      </div>
      <p class="goutitle">{{ title }}</p>
    </div>
    <hr />
    <div class="maingou">
      <div class="goumain">
        <p>优惠券码</p>
        <p>您有一个可用的优惠券 1 ></p>
      </div>
    </div>
    <div class="goubottom">
      <p class="ke">客服</p>
      <p class="gou">购物车</p>
      <div class="btns">
        <van-button color="#ff813d" class="goubtn">加入购物车</van-button>
        <van-button color="#ff1c27" class="goubtn">立即购买</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gouwu",
  props: ["imgsrc", "title", "price", "id", "oldprice", "zhe"],
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
  methods: {
    topback() {
      this.$router.back();
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
#gouwu {
  box-sizing: border-box;
  padding-bottom: 1rem;
}
.gouimg {
  width: 100%;
  height: 6rem;
  background: #fff;
  text-align: center;
}
.gouimg img {
  height: 100%;
}
.gouprice {
  display: flex;
  padding: 0.5rem 0.13rem 0;
  align-items: center;
}
.newprice {
  font-size: 0.3rem;
  color: #e31fa7;
  font-weight: bolder;
  margin-right: 0.2rem;
}
.oldprice {
  box-sizing: border-box;
  font-size: 0.18rem;
  color: #aeaeae;
  font-weight: bolder;
  margin-right: 0.2rem;
  text-decoration: line-through;
  padding-top: 0.12rem;
}
.zheprice {
  background: #000;
  color: #fff;
  padding: 0.05rem;
  border-radius: 0.05rem;
}
.goutitle {
  line-height: 0.9rem;
  padding: 0 0.13rem;
  font-size: 0.25rem;
  color: #0d0d0d;
  font-weight: bolder;
}
.goutop {
  position: relative;
}
.top-top {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
}
.top-back {
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7f7f7f;
  color: #fff;
  border-radius: 50%;
}
.goumain {
  display: flex;
  align-items: center;
  height: 0.8rem;
  justify-content: space-around;
  border-top: 2px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
  font-size: 0.23rem;
  color: #535353;
  font-weight: 500;
}
.goubottom {
  height: 0.7rem;
  display: flex;
  position: fixed;
  bottom: .65rem;
  left: 0;
}
.goubottom .ke,
.goubottom .gou {
  width: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9e9e9;
  background: #f7f7f7;
}
.maingou {
  width: 100%;
  height: 5rem;
}
.btns {
  width: 5.5rem;
  display: flex;
}
.btns .goubtn {
  flex: 1;
  border-radius:0;
}
.backicon {
  padding-right: 0.15rem;
}
.daojishi {
  height: 0.5rem;
  width: 1.5rem;
  background: #7f7f7f;
  border-radius: 1rem 0 0 1rem;
  position: relative;
  left: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.daoji {
  color: #fff;
  font-size: 0.25rem;
}
</style>