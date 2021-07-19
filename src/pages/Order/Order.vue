<template>
<div>
    <section class="order">
      <HeaderTop title="订单列表"></HeaderTop>
      <section class="order_no_login">
        <img src="./images/order/person.png">
        <h3>登录后查看外卖订单</h3>
       <router-link to="/login">
          <button class="btn">立即登陆</button>
       </router-link>
      </section>
    </section>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  components: {
    HeaderTop
  }
}
</script>
