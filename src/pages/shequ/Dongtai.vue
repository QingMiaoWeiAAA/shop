<template>
  <div id="dongmain">
    <div id="dongtai" v-for="(item,index) in shuju.home.imageList" :key="index">
      <div class="user">
        <div class="user-l">
          <p class="userimg">
            <img :src="item" alt="" />
          </p>
          <p>热门内容,来自:{{shuju.community.author[index]}}</p>
        </div>
        <p class="usermore">...</p>
      </div>
      <div class="title">
        <p>{{shuju.home.active.tuijian_title[index]}}</p>
        <p>浏览{{shuju.community.watch[index]}}次</p>
      </div>
      <div class="dongimg">
        <img
          :src="item"
          alt=""
        />
      </div>
      <div class="wenzhang">
       {{shuju.community.grefContent[index]}}
      </div>
    </div>
  </div>
</template>

<script>
import shujus from '@/assets/mock.json'
export default {
  name: "dongtai",
  data(){
    return {
      shuju:shujus
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#dongmain{
  padding-bottom:.5rem;
}
#dongtai {
  width: 100%;
  margin-bottom:.2rem;
}
.user {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #848587;
  font-size: 0.2rem;
  padding: 0 0.2rem;
  background: #fff;
}
.usermore {
  font-size: 0.5rem;
  box-sizing: border-box;
  padding-bottom: 0.1rem;
}
.user-l {
  display: flex;
  align-items: center;
}
.userimg {
  width: 0.45rem;
  height: 0.45rem;
  background: red;
  margin-right: 0.15rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userimg img{
  width:100%;
  height:100%;
}
.title {
  width: 100%;
  box-sizing: border-box;
  height: 0.45rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  font-size: 0.2rem;
  background: #fff;
}
.title p:nth-child(1) {
  font-weight: bolder;
}
.title p:nth-child(2) {
  font-weight: lighter;
  font-size: 0.15rem;
  letter-spacing: 0.1em;
}
.dongimg {
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.08rem;
}
.dongimg img {
  width: 100%;
}
.wenzhang {
  box-sizing: border-box;
  width: 100%;
  padding: 0.2rem 0.15rem;
  color: #7f8083;
  font-size: 0.14rem;
  line-height: 0.3rem;
  background: #fff;
}
</style>