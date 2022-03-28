<template>
  <div id="jinri">
    <div class="header">
      <van-swipe :autoplay="3000" lazy-render class="lunbo" indicator-color="red">
        <van-swipe-item v-for="(item, index) in lunshu" :key="index">
          <img :src="item" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="daohang" @click="xiebao">
      <div class="daohangimgs">
        <p class="daohangimg">
          <img
            src="https://img.alicdn.com/imgextra/i1/O1CN01uL2O5Q1srbkbtKXaR_!!6000000005820-0-tps-800-800.jpg"
            alt=""
          />
        </p>
        <p>鞋包馆</p>
      </div>
      <div class="daohangimgs" @click="yundong">
        <p class="daohangimg">
          <img
            src="https://img.alicdn.com/imgextra/i3/O1CN01eh0qXA1wKPbCYXRA4_!!6000000006289-0-tps-430-430.jpg"
            alt=""
          />
        </p>
        <p>运动馆</p>
      </div>
      <div class="daohangimgs" @click="muying">
        <p class="daohangimg">
          <img
            src="https://gw.alicdn.com/tfs/TB1Ka2bcEGF3KVjSZFoXXbmpFXa-800-800.jpg"
            alt=""
          />
        </p>
        <p>母婴馆</p>
      </div>
      <div class="daohangimgs" @click="chaoshi">
        <p class="daohangimg">
          <img
            src="https://img.alicdn.com/bao/uploaded/i1/TB1ufHhXRiE3KVjSZFMSuvQhVXa.jpg"
            alt=""
          />
        </p>
        <p>超市</p>
      </div>
      <div class="daohangimgs" @click="nvzhaung">
        <p class="daohangimg">
          <img
            src="https://img.alicdn.com/tfs/TB1dsVUQ8r0gK0jSZFnXXbRRXXa-777-828.jpg_400x400q80.jpg"
            alt=""
          />
        </p>
        <p>女装馆</p>
      </div>
      <div class="daohangimgs" @click="meizhuang">
        <p class="daohangimg">
          <img
            src="https://img.alicdn.com/imgextra/i1/2424298091/O1CN01ZbUwvY29dj6elXLPK_!!2424298091.jpg"
            alt=""
          />
        </p>
        <p>美妆馆</p>
      </div>
      <div class="daohangimgs" @click="nanzhuang">
        <p class="daohangimg">
          <img
            src="https://img.alicdn.com/tfs/TB1V1W9XAxz61VjSZFrXXXeLFXa-800-800.jpg_400x400q80.jpg"
            alt=""
          />
        </p>
        <p>男装馆</p>
      </div>
      <div class="daohangimgs" @click="gengduo">
        <p class="daohangimg daosvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="30"
            fill="currentColor"
            class="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            />
          </svg>
        </p>
        <p>更多</p>
      </div>
    </div>
    <div class="main">
      <p class="title"><span>今日特卖</span> 每天早上10点 晚8点上新</p>
      <p class="ads" v-for="(p, item) in shuju" :key="item">
        <img :src="p" alt="" />
      </p>
    </div>
  </div>
</template>

<script>
import jinrishuju from "../../assets/mock.json";
export default {
  name: "jinri",
  data() {
    return {
      shuju: jinrishuju.home.imageList,
      lunshu: jinrishuju.home.lunbo.home,
    };
  },
  methods: {
    xiebao() {
      this.$router.push({
        path: "/xiangqing",
      });
    },
    yundong() {
      this.$router.push({
        path: "/xiangqing",
        query:{
          title:"你好"
        }
      });
    },
    muying() {
      this.$router.push({
        path: "/xiangqing",
        query:{
          name:"母婴文件"
        }
      });
    },
    chaoshi() {
      this.$router.push({
        path: "/xiangqing",
      });
    },
    nvzhaung() {
      this.$router.push({
        path: "/xiangqing",
      });
    },
    meizhuang() {
      this.$router.push({
        path: "/xiangqing",
      });
    },
    nanzhuang() {
      this.$router.push({
        path: "/xiangqing",
      });
    },
    gengduo() {
      this.$router.push({
        path: "/xiangqing",
      });
    },
  },
  created() {
    // console.log(this.shuju)
  },
};
</script>

<style scoped>
.header {
  height: 2.95rem;
  width: 100%;
  overflow: scroll;
  margin-bottom: 0.12rem;
}

.daohang {
  height: 3.67rem;
  width: 100%;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  color: #818181;
  font-size: 0.2rem;
}
.daohang div {
  background: #fff;
  width: 1.87rem;
  height: 1.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ads img {
  display: inline-block;
  width: 100%;
  height: 3.5rem;
}
.ads {
  margin-bottom: 0.2rem;
}
.main .title {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  color: #232329;
  font-size: 0.25rem;
  font-weight: bolder;
  letter-spacing: 0.1em;
}
.daohangimg {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: #ececec;
}
.daohangimg img {
  width: 0.9rem;
  height: 0.9rem;
}
.daohangimgs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.daosvg {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lunbo{
  height:100%;
}
.lunbo img {
  width: 100%;
}
</style>