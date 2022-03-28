/*
 * @Author: your name
 * @Date: 2022-03-21 20:52:04
 * @LastEditTime: 2022-03-22 09:43:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shoppings\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Jinrituijian from "../pages/shouye/ShouyeZhan.vue"
Vue.use(VueRouter);

// 解决vue路由重复导航的错误
// 获取原型对象上的push函数
const originalPush=VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push=function(location){
  return originalPush.call(this,location).catch(err=>err)
}



const routes = [
  {
    path: "/",
    name: "shouye",
    component: Jinrituijian,
    children: [
      {
        path: "tuijian",
        name:"tuijian",
        component:()=>import("@/pages/shouye/Jinri.vue"),
        meta:{
          titles:"首页-推荐"
        }
      },
      {
        path: "shishang",
        name:"shishang",
        component:()=>import("@/pages/shouye/ShiShang.vue"),
        meta:{
          titles:"首页-时尚"
        }
      },
      {
        path: "meizhuang",
        component:()=>import("@/pages/shouye/MeiZhuang.vue"),
        meta:{
          titles:"首页-美妆"
        }
      },
      {
        path: "jiadian",
        component:()=>import("@/pages/shouye/JiaDian.vue"),
        meta:{
          titles:"首页-家电"
        }
      },
      {
        path: "jiaju",
        component:()=>import("@/pages/shouye/JiaJu.vue"),
        meta:{
          titles:"首页-家具"
        }
      },
      {
        path: "guoji",
        meta:{
          titles:"首页-国际"
        }
      },
      {
        path: "shenghuo",
        meta:{
          titles:"首页-生活"
        }
      }
    ],
  },
  {
    path:"/xiangqing",
    name:"xiangqing",
    component:()=>import("@/pages/shouye/XiangQing.vue"),
    props($route){
      return {
        title:$route.query.title
      }
    }
  },
  {
    path:"/gou",
    names:"gou",
    component:()=>import("@/pages/gouwuche/GouW.vue"),
    props({query:{id,imgsrc,title,price,oldprice,zhe}}){
      return {
        id,
        imgsrc,
        title,
        price,
        oldprice,
        zhe
      }
    }
  },
  {
    path: "/shequ",
    name: "shequ",
    component:()=>import("@/pages/shequ/Shequzhan.vue"),
    children: [
      {
        path:"dongtai",
        name:"dongtai",
        component:()=>import("@/pages/shequ/Dongtai.vue")
      },
      {
        path:"remen",
        name:"remen",
        component:()=>import("@/pages/shequ/Remen.vue")
      },
      {
        path:"faxian",
        name:"faxian",
        component:()=>import("@/pages/shequ/Faxian.vue")
      }
    ],
  },
  {
    path: "/gouwuche",
    name: "gouwuche",
    component: ()=>import("@/pages/gouwuche/GouwuCart.vue"),
    children: [],
  },
  {
    path: "/wode",
    name: "wode",
    component:()=>import("@/pages/wode/wode.vue"),
    children: [],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to,from,next)=>{
  // console.log("ro,from",to,from);
  next()
})

router.afterEach((to,from)=>{
  // console.log("后置路由守卫",to,from)
  document.title=to.meta.titles || "购物网站"
})


export default router;
