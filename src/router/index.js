import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

import About from "../views/About.vue"
import MyPage from "../views/MyPage.vue"

import Detail from "../views/Detail.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/my-page",
    name: "MyPage",
    component: MyPage, // これを更新
  },
  {
    path: "/detail/:brand",
    name: "Detail",
    component: Detail,
    props: (route) => ({
      brand: route.params.brand,
      rating: route.params.rating,
      location: route.params.location,
      price: route.params.price,
      id: route.params.id,
      total: route.params.total,
      envrate: route.params.envrate,
      laborrate: route.params.laborrate,
      labornum: route.params.labornum,
      animalrate: route.params.animalrate,
      animalnum: route.params.animalnum,
      brandpic: route.params.brandpic,
      envnum: route.params.envnum,
    }),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
