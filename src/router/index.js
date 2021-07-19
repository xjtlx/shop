import Vue from 'vue'
import VueRouter from 'vue-router'

// import Miste from '../pages/Miste/Miste'
// import Order from '../pages/Order/Order'
// import Search from '../pages/Search/Search'
// import Profile from '../pages/Profile/Profile'
const Miste = () => import('../pages/Miste/Miste')
const Order = () => import('../pages/Order/Order')
const Search = () => import('../pages/Search/Search')
const Profile = () => import('../pages/Profile/Profile')

/* eslint-disable */
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/shopgoods.vue'
import Shopinfo from '../pages/Shop/Shopinfo/Shopinfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/shopratings.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/miste',
      component: Miste, //返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/miste'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: Shopinfo
        },
        {
          path: '/',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
