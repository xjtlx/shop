<template>
<section class="msite">
    <HeaderTop title="急速外卖">
      <!-- 要使用slot="left"指定插入的插槽位置 -->
      <router-link class="header_search" slot="left" to="/search">
        <img src="./images/found.png" style="width:20px;height:20px" alt="">
      </router-link>
       <router-link class="header_login" slot="right" to="/login">
         <span class="header_login_text">
          登录|注册
          </span>
       </router-link>
    </HeaderTop>
     <!--首页导航轮播图-->
     <!-- 引用swiper进行轮播效果 -->
    <nav class="msite_nav">
      <!-- swiper的容器div -->
      <div class="swiper-container">
        <!-- swiper的包裹层div -->
        <div class="swiper-wrapper">
          <!-- swiper的轮播div -->
          <div class="swiper-slide" >
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/M_4.jpg" alt="">
              </div>
              <span>外卖</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/M_1.jpg" alt="">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/M_2.jpg" alt="">
              </div>
              <span>甜点</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/M_3.jpg" alt="">
              </div>
              <span>盒饭</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/M_3.jpg" alt="">
              </div>
              <span>烤鸭</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/M_2.jpg" alt="">
              </div>
              <span>甜点</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/M_2.jpg" alt="">
              </div>
              <span>烧烤</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/M_2.jpg" alt="">
              </div>
              <span>小吃</span>
            </a>
          </div>
        </div>
        <!-- swiper轮播图圆点 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家列表-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <!-- <i class="iconfont icon-xuanxiang"></i> -->
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
</section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList.vue'
import Swiper from 'swiper'
import 'swiper/swiper.min.css'
export default {
  mounted () {
/* eslint-disable */
    new Swiper('.swiper-container', {
      loop: true,//循环轮播
      pagination: {//分页器
        el: '.swiper-container'
      }
    })
  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixin.styl"
  .msite
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              text-decoration:none
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
</style>
