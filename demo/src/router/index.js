import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//練習案例導入，設置陸遊信息
import Header from '../components/demo//header.vue'
import Login from '../components/demo//login.vue'
import Register from '../components/demo/register.vue'
import List from '../components/demo/list.vue'
import Page from '../components/demo/page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/page',
    component:Page 
  },
  {
    path:'/list',
    component:List 
  },
  {
    path:'/register',
    component:Register 
  },
  {
    path:'/login',
    component:Login 
  },
  {
    path:'/header',
    name:Header,
    component:Header
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
