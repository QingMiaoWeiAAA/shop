<template>
  <div id="xiangqing">
    <div class="titles">
      <van-icon
        name="arrow-left"
        class="arrow-left"
        size=".5rem"
        @click="back"
      />
      <p>运动男女专场</p>
    </div>
    <div class="xaingmain">
      <div class="mainitem" @click="mainitem(item,index)" v-for="(item,index) in shorshuju.imgList[0]" :key="index">
        <p class="imgp">
          <img :src="item" alt="" />
        </p>
        <div class="bottomtit">
          <p class="botname">{{shorshuju.title[0][index]}}</p>
          <div class="botpirce">
            <div class="pri">
              <p class="newprice">￥{{shorshuju.limit_price[0][index]}}</p>
              <p class="oldprice">￥{{shorshuju.original_price[0][index]}}</p>
            </div>
            <p class="zhe">{{shorshuju.discount[0][index]}}折</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shorshus from "../../assets/mock.json";
export default {
  name: "xiangqing",
  data() {
    return {
      shorshuju: shorshus.goods.id_0,
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    mainitem(item,index){
      this.$router.push({
        path:"/gou",
        query:{
          imgsrc:item,//图片
          id:index,//id值
          title:this.shorshuju.title[0][index],//标题
          price:this.shorshuju.original_price[0][index],//新价格
          oldprice:this.shorshuju.original_price[0][index], //旧价格
          zhe:this.shorshuju.discount[0][index]
        }
      })
    }
  },
  props:['title'],
  created() {
    // console.log(this.shorshuju.imgList[0].length);
    // console.log(this.$route.query)
  },
  
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#xiangqing{
  padding-bottom:1rem;
}
.titles {
  display: flex;
  align-items: center;
  height: 0.88rem;
  font-size: 0.28rem;
  color: #3a4c60;
  font-weight: bolder;
  margin-bottom: 0.4rem;
}
.titles p {
  margin-left: 2.5rem;
}
.arrow-left {
  width: 0.5rem;
  height: 0.37rem;
  color: #ff0bb4;
}
.xaingmain {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.2rem;
}
.mainitem {
  width: 3.5rem;
  margin-bottom: 0.3rem;
}
.imgp {
  width: 3.5rem;
  height: 4.5rem;
  overflow: hidden;
  border: 1px solid #f4f4f4;
  background: #fff;
}
.imgp img {
  width: 3.5rem;
  height: 4.5rem;
}
.bottomtit {
  box-sizing: border-box;
  padding-left: 0.12rem;
  padding-right: 0.12rem;
  margin-top: 0.2rem;
}
.botname {
  color: #232128;
  font-size: 0.2rem;
  font-weight: bolder;
  line-height: 0.3rem;
  height:.8rem;
}
.botpirce {
  display: flex;
  justify-content: space-between;
}
.pri {
  display: flex;
  align-items: center;
}
.newprice {
  font-size: 0.2rem;
  color: #e429ab;
  font-weight: bolder;
}
.oldprice {
  color: #b5b5b5;
  text-decoration: line-through;
  font-size: 0.12rem;
  margin-left: 0.13rem;
}
.zhe {
  background: rgb(36, 31, 31);
  font-size: 0.2rem;
  color: #fff;
  width: 0.6rem;
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  border-radius: 0.05rem;
}
.titles{
  position:sticky;
  top:0;
  left:0;
  background:#f7f7f7;
}
</style>