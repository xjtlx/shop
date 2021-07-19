<template>
    <div>
        <div class="Shopcart">
            <div class="content">
                <div class="content-left" @click="toggoleShow">
                    <div class="logo-wrapper">
                        <div class="logo" :class="{highlight: totalCount}"><img :class="{highlight: totalCount}" width="32px" height="32px" src="./images/shoping.png" alt=""></div>
                        <div class="sum" v-if="totalCount">{{totalCount}}</div>
                    </div>
                    <div class="price" :class="{highlight: totalCount}">￥{{totalPrice}}</div>
                    <div class="desc">配送费{{info.deliveryPrice}}元</div>
                </div>
                <div class="content-right">
                    <div class="pay" :class="payClass">{{payText}}</div>
                </div>
            </div>
            <transition name="move">
                <div class="Shopcart-list" v-show="isShow">
                    <div class="list-header">
                        <h1 class="title">购物车</h1>
                        <span class="empty" @click="clearcart">清空</span>
                    </div>
                    <div class="list-content">
                        <ul class="content-ul">
                            <li class="food" v-for="(food,index) in cartFoods" :key="index">
                                <span class="name">{{food.name}}</span>
                                <div class="price"><span>￥{{food.price}}</span></div>
                                <div class="cartcontrol-wrapper">
                                  <CartControl :food="food"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
        <div class="list-diver" v-show="isShow" @click="toggoleShow"></div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import BScroll from 'better-scroll'
import {mapState, mapGetters} from 'vuex'
import CartControl from '../CartControl/CartControl'
export default {
  data () {
    return {
      isShow: false
    }
  },
  watch: {
    totalCount: function () {
      // 数量为0，直接不显示
      if (this.totalCount === 0) {
        this.isShow = false
      }
    },
    isShow: function () {
      if (this.isShow) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.list-content', {
              click: true
            })
          } else {
            this.scroll.refresh() // 让滚动条刷新一下: 重新统计内容的高度
          }
        })
      }
      return this.isShow
    }
  },
  computed: {
    ...mapState(['cartFoods', 'info']),
    ...mapGetters(['totalCount', 'totalPrice']),
    payClass () {
      const {totalPrice} = this
      const {minPrice} = this.info
      return totalPrice >= minPrice ? 'enough' : 'no-enough'
    },
    payText () {
      const {totalPrice} = this
      const {minPrice} = this.info
      if (totalPrice === 0) {
        return `￥${minPrice}元起送`
      } else if (totalPrice < minPrice) {
        return `还差${minPrice - totalPrice}元起送`
      } else {
        return `去结算`
      }
    }
    // ,
    // listShow () {
    //   // 总数量为0不显示，
    //   if (this.totalCount === 0) {
    //     // 如果这里不this.isShow = false,则会出现bug，点加号会直接显示，
    //     // 因为为0时，isShow可能为真而会被直接返回
    //     // this.isShow = false
    //     return false
    //   }
    //   return this.isShow
    // }
  },
  methods: {
    toggoleShow () {
      if (this.totalCount > 0) {
        this.isShow = !this.isShow
      }
    },
    clearcart () {
      // 清空购物车
      MessageBox.confirm('确定清空购物车吗?').then(action => {
        this.$store.dispatch('clearCart')
      }, () => {})
    }
  },
  components: {
    CartControl
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
 .Shopcart
  position fixed
  left 0
  bottom 0
  z-index 57
  width 100%
  height 48px
  .content
   display flex
   background #141d27
   color rgba(255,255,255,.4)
   .content-left
     flex 1
    .logo-wrapper
     display inline-block
     vertical-align top
     position relative
     top -10px
     margin 0 12px
     padding 6px
     width 56px
     height 56px
     box-sizing border-box
     border-radius 50%
     background #141d27
     .logo
      width 100%
      height 100%
      border-radius 50%
      background #2b343c
      &.highlight
        background $green
      img
       padding 2px 4px
     .sum
      position absolute
      top 0
      right 0
      width 24px
      height 16px
      line-height 16px
      text-align center
      border-radius 16px
      color #fff
      background rgb(240,0,0)
      box-show 0 4px 8px 0 rgba(0,0,0,.4)
    .price
      display inline-block
      vertical-align top
      margin-top 5px
      color #fff
      &.highlight
       color #fff
    .desc
      display inline-block
      vertical-align bottom
      font-size 12px
      margin-bottom 15px
      margin-left -45px
   .content-right
     flex 0 0 105px
     font-size 20px
     width 105px
     .pay
      text-align center
      color #fff
      line-height 45px
      font-size 15px
      height 100%
      &.not-enough
        background #2b333b
      &.enough
        background #00b43c
        color #fff
 .Shopcart-list
   position absolute
   left 0
   top 0
   z-index -1
   width 100%
   transform translateY(-100%)
   &.move-enter-active, &.move-leave-active
    transition transform .3s
   &.move-enter, &.move-leave-to
    transform translateY(0)
   .list-header
    height 40px
    line-height 40px
    padding 0 18px
    background #f3f5f7
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    .title
      float left
      margin 0
      font-size 14px
      color rgb(7, 17, 27)
    .empty
      float right
      font-size 12px
      color rgb(0, 160, 220)
   .list-content
    overflow hidden
    max-height 217px
    background #fff
    .content-ul
     margin 0
     padding 0
     list-style-type none
     .food
      position relative
      padding 12px 0
      box-sizing border-box
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      .name
       line-height 24px
       font-size 14px
       color rgb(7, 17, 27)
      .price
        position absolute
        right 90px
        bottom 12px
        line-height 24px
        font-size 14px
        font-weight 700
        color rgb(240, 20, 20)
      .cartcontrol-wrapper
        position absolute
        right 0
        bottom 13px
 .list-diver
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 56
  backdrop-filter blur(10px)
  opacity 1
  background rgba(7, 17, 27, 0.6)
</style>
