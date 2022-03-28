<template>
  <div id="shishang">
    <p class="toptitle">时尚风暴 每天早上10点 晚上8点更新</p>
    <van-swipe :autoplay="3000" class="lunimg">
      <van-swipe-item v-for="(image, index) in shujus.lunbo.meizhuang" :key="index">
        <img :src="image" class="lunboimg"/>
      </van-swipe-item>
    </van-swipe>
    <div
      class="shiimg"
      v-for="(item, index) in shujus.shishangImglist"
      :key="index"
    >
      <img :src="item" alt="" />
      <div class="bottomtitl">
        <p class="titlew">{{ shujus.active.shishang_title[index] }}</p>
        <p class="shengyu">剩余{{ shujus.active.days[index] }}天</p>
      </div>
    </div>
  </div>
</template>

<script>
import jinrishuju from "../../assets/mock.json";
export default {
  name: "shishang",
  data() {
    return {
      shujus: jinrishuju.home,
    };
  },
  created() {
    //   console.log("今日推荐",jinrishuju.home.imageList)
    //   console.log("美妆",jinrishuju.home.active.meizhuang_title[0])
  },
};
</script>

<style scoped>
#shishang {
  width: 100%;
  padding-bottom: 0.7rem;
}
* {
  margin: 0;
  padding: 0;
}
.toptitle {
  font-size: 0.25rem;
  color: #4d4d4d;
  font-weight: bolder;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 1.3rem;
}
.shiimg {
  width: 100%;
  overflow: hidden;
}
.shiimg img {
  width: 100%;
}
.bottomtitl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6rem;
  line-height: 1.13rem;
}
.titlew {
  font-size: 0.3rem;
  color: #000;
  font-weight: bolder;
}
.shengyu {
  height: 0.44rem;
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff0088;
  color: #fff;
  border-radius: 0.22rem;
  font-weight: bolder;
}
.lunimg {
  height: 2.9rem;
  margin-bottom: 0.6rem;
}

.lunboimg{
    width:100%;
}
</style>