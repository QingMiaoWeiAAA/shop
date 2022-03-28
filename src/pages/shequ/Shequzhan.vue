<template>
  <div>
      <Mytop/>
      <div class="shequdao">
          <p @click="dongtai">动态</p>
          <p @click="remen">热门</p>
          <p @click="faxian">发现</p>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
import Mytop from "@/pages/shouye/Login.vue"
export default {
    name:"Shequzhan",
    components:{
        Mytop
    },
    methods:{
        dongtai(){
            this.$router.push({
                path:"/shequ/dongtai"
            })
        },
        remen(){
            this.$router.push({
                path:"/shequ/remen"
            })
        },
        faxian(){
            this.$router.push({
                path:"/shequ/faxian"
            })
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.shequdao{
    width:7.5rem;
    height:.7rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.shequdao p{
    height:100%;
    line-height:.7rem;
    flex:1;
    font-size:.25rem;
    font-weight:bolder;
    text-align:center;
}
.shequdao p:hover{
    border-bottom:1px solid #ff00a2;
    color:#ff00a2;

}
</style>