<template>
  <div>
      <MyHeader/>
      <router-view/>
  </div>
</template>

<script>
import MyHeader from '../../components/MyHeader.vue'
export default {
    name:"jinrituijian",
    components:{
        MyHeader,
    },
    mounted() {
        this.$router.push({
            path:"/tuijian"
        })
    },
}
</script>

<style scoped>

</style>