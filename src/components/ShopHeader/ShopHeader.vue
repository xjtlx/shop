<template>
  <div class="shop-header">
    <nav class="shop-nav" :style="{backgroundImage: `url(${info.bgImg})`}">
      <a class="back" @click="$router.back()">
        <img src="./images/left.png" alt="">
      </a>
    </nav>
    <div class="shop-content">
      <img class="content-image" :src="info.avatar" alt="">
      <div class="header-content">
        <h2 class="content-h2">
          <span class="content-brand1">
            <span>品牌</span>
          </span>
          <span class="content-brand2">{{info.name}}</span>
          <img @click="toggleShopShow" src="./images/right.png" alt="">
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">{{info.score}}</span>
          <span class="shop-message-detail">月售{{info.sellCount}}单</span>
          <span class="shop-message-detail">{{info.description}}
            <span >{{info.deliveryTime}}分钟</span>
          </span>
          <span class="shop-message-detail">距离{{info.distance}}</span>
        </div>
        <div class="shop-header-discounts"  v-if="info.supports">
          <div class="discounts-left" @click="toggleSupportShow">
            <div class="activity" :class="supportClasses[info.supports[0].type]" >
                <span class="content-tag">
                <span class="mini-tag">{{info.supports[0].name}}</span>
                </span>
                <span class="activity-content ellipsis">{{info.supports[0].content}}</span>
                <div class="discounts-right">
                {{info.supports.length}}个优惠
                </div>
             </div>
            </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="shop-brief-modal" v-show="shopShow">
        <div class="shop-brief-top">
          <h2 class="content-h2">
          <span class="content-brand1">
            <span>品牌</span>
          </span>
          <span class="content-brand2">{{info.name}}</span>
          </h2>
         <ul class="shop-item-u">
           <li class="shop-item">
             <h3 class="shop-item-font">{{info.score}}</h3>
             <p class="shop-item-p">评分</p>
           </li>
           <li class="shop-item">
             <h3 class="shop-item-font">{{info.sellCount}}单</h3>
             <p  class="shop-item-p">月售</p>
           </li>
           <li class="shop-item">
             <h3 class="shop-item-font">{{info.description}}</h3>
             <p class="shop-item-p">约{{info.deliveryTime}}分钟</p>
           </li>
           <li class="shop-item">
             <h3 class="shop-item-font"></h3>
             <p class="shop-item-p"></p>
           </li>
           <li class="shop-item">
             <h3 class="shop-item-font">{{info.distance}}</h3>
             <p class="shop-item-p">距离</p>
           </li>
         </ul>
         <div style="clear:both"></div>
         <h3 class="brief-modal-title">
            <span class="title-span">公告</span>
          </h3>
          <div class="brief-modal-notice">
            {{info.bulletin}}
          </div>
          <div class="mask-footer" @click="toggleShopShow">
            <span class="mask-sp"><img src="./images/loser.png" alt=""></span>
          </div>
        </div>
        <div class="brief-modal-cover"></div>
      </div>
    </transition>
    <transition name="fade">
      <div class="activity-sheet" v-show="supportShow">
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">优惠活动</h2>
          <ul class="list">
            <li class="activity-item" v-for="(support, index) in info.supports"
                :key="index" :class="supportClasses[support.type]">
            <span class="content-tag">
                <span class="mini-tag">{{support.name}}</span>
              </span>
              <span class="activity-content">{{support.content}}</span>
            </li>
          </ul>
          <div class="activity-sheet-close" @click="toggleSupportShow">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div @click="toggleSupportShow" class="activity-sheet-cover"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
      shopShow: false,
      supportShow: false
    }
  },
  computed: {
    ...mapState(['info'])
  },
  methods: {
    toggleShopShow () {
      this.shopShow = !this.shopShow
    },
    toggleSupportShow () {
      this.supportShow = !this.supportShow
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixin.styl';
 .shop-header{
   background-color #fff
   height 186px
   width 100%
   .shop-content{
     position relative
     top -20px
     text-align center
     .content-image{
       width 80px
       height 80px
     }
    .header-content{
     .content-h2{
       margin 0px
       .content-brand1{
         padding-left 3px
         padding-right 3px
         background-color yellow
         font-size 12px
      }
       .content-brand2{
         font-size 18px
       }
     }
     .shop-message{
       .shop-message-detail{
         font-size 13px
       }
     }
     .shop-header-discounts{
       margin-top 8px
       margin-left 39px
       font-size  10px
       width 80%
       border 1px solid #b0b0b0
       .discounts-left{
         folat left
         .content-tag{
           padding-left 17px
           background-color rgb(169,207,83,.5)
           .mini-tag{
            margin-left -15px
          }
         }
         .discounts-right{
           float right
           padding-right 12px
           &::after {
              content: '';
              display: block;
              border-style: solid;
              border-width: 4px 4px 0;
              border-color: rgba(0, 0, 0, 0.57) transparent transparent;
              position: absolute;
              top: 95%;
              margin-right 10%
              transform: translateY(-50%);
              right: 0;
             }
          }
       }
     }
    }
   }
   .shop-brief-modal{
     position fixed;
     top 0;
     left 0;
     right 0;
     bottom 0;
     display flex;
     justify-content center;
     align-items center;
     z-index: 52;
     flex-direction: column;
     color: #333;
     &.fade-enter-active, &.fade-leave-active {
      transition: opacity 0.5s;
     }
     &.fade-enter, &.fade-leave-to {
      opacity: 0;
     }
     .shop-brief-top{
       background-color #fff
       z-index 5
       border-radius 10px
       .content-h2{
         margin 0
         .content-brand1{
           background-color yellow
           font-size 12px
           padding-left 3px
           padding-right 3px
         }
         .content-brand2{
          font-size 16px
         }
       }
       .shop-item-u{
         display: flex;
         margin: 20px -10px 0;
         .shop-item{
         list-style none
         float left
         margin-left 10px
         .shop-item-font{
           font-size 10px
           margin 0
         }
         .shop-item-p{
           font-size 5px
        }
       }
      }
      .brief-modal-title{
       font-size 15px
       margin-top 0
       margin-bottom 8px
       margin-left 40%
       color red
       opacity 0.6
      }
      .brief-modal-notice{
       font-size 6px
       width 198px
      }
      .mask-sp{
        margin-left 43%
      }
     }
     .brief-modal-cover {
       position: absolute;
       width: 100%;
       height: 100%;
       top: 0;
       left: 0;
       background-color: rgba(0, 0, 0, 0.5);
       z-index: 1;
     }
   }
   .activity-sheet {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;

    .activity-sheet-content {
      position: absolute;
      background-color: #f5f5f5;
      box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4);
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 20px 30px;
      box-sizing: border-box;
      transition: transform 0.2s;
      will-change: transform;
      color: #333;

      .activity-sheet-title {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      .list {
        font-size: 16px;
        height: 160px;
        overflow-y: auto;

        .activity-item {
          margin-bottom: 12px;
          display: flex;
          font-size: 13px;
          align-items: center;

          &.activity-green {
            .content-tag {
              background-color: rgb(112, 188, 70);
            }
          }

          &.activity-red {
            .content-tag {
              background-color: rgb(240, 115, 115);
            }
          }

          &.activity-orange {
            .content-tag {
              background-color: rgb(241, 136, 79);
            }
          }

          .content-tag {
            display: inline-block;
            border-radius: 2px;
            width: 36px;
            height: 18px;
            margin-right: 10px;
            color: #fff;
            font-style: normal;
            position: relative;

            .mini-tag {
              position: absolute;
              left: 0;
              top: 0;
              right: -100%;
              bottom: -100%;
              font-size: 24px;
              transform: scale(0.5);
              transform-origin: 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }

      .activity-sheet-close {
        position: absolute;
        right: 6px;
        top: 10px;
        width: 25px;
        height: 25px;

        > span {
          font-size: 20px;
        }
      }
    }

    .activity-sheet-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
 }
</style>
