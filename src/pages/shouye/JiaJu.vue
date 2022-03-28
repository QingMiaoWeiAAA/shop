<template>
  <div>
    <div class="lubo">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in json.home.lunbo.jiaju"
          :key="index"
        >
          <img :src="item" alt="" class="imgs" />
        </van-swipe-item>
      </van-swipe>
      <!-- <p >{{json.home.active.meizhuang_title[index]}}</p> -->
      <p>今日特卖 每天早上10点 晚8点上新</p>
    </div>
    <div class="jiajuImglist">
      <ul>
        <li v-for="(item, index) in json.home.jiajuImglist" :key="index">
          <img :src="item" alt="" />
          <p>{{ json.home.active.jiaju_title[index] }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mock from "../../assets/mock.json";
export default {
  name: "JiaJu",
  data() {
    return {
      json: mock,
    };
  },
  methods: {},
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  /* color: #fff; */
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  /* background-color: #39a9ed; */
}
ul {
  list-style: none;
}
.imgs {
  width: 7rem;
  height: 3rem;
}

p {
  text-align: center;
  margin-top: 0.5rem;
  font-weight: bolder;
}

.jiajuImglist ul li img {
  width: 7rem;
  height: 3rem;
  margin-left: .25rem;
}

.jiajuImglist ul li p {
  margin-left: 0rem;
}
</style>