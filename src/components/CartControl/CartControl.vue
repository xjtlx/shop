<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="icon-removecircleoutlines"  v-if="food.count"><img @click.stop="updateFoodCount(false)" width="17px" height="17px" src="./images/jian.png" alt=""> </div>
        </transition>
        <div class="icon-center" v-if="food.count">{{food.count}}</div>
        <div class="icon-addcircles"><img  @click.stop="updateFoodCount(true)" width="17px" height="17px" src="./images/jia.png" alt=""></div>
    </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updateFoodCount (isAdd) {
      this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
    }
  }
}
</script>
<style lang="stylus">
 @import "../../common/stylus/mixin.styl"
  .cartcontrol
    .icon-removecircleoutlines
     display inline-block
     &.move-enter-active, &.move-leave-active
      transition all .4s
     &.move-enter, &.move-leave-to
      opacity  0
      transform  translateX(15px) rotate(180deg)
    .icon-center
     display inline-block
     font-size 13px
     line-height 5px
    .icon-addcircles
      display: inline-block
</style>
