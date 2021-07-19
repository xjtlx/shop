import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
// 将一张loading图片加载进来
import loading from './common/imgs/loading.gif'
import App from './App.vue'
import router from './router'
// 加载mockserver，mockserver并没有向外暴露什么，所以用这种方式引入
import './mock/mockServer'
import store from './store'

// import axios from 'axios'
/* eslint-disable no-new */
// Vue.config.productionTip = false// 是阻止显示生产模式的消息。
// axios.defaults.baseURL="http://localhost:5050";
// Vue.prototype.axios=axios;//给Vue函数添加一个原型属性$axios 指向Axios
// 注册全局组件标签
Vue.component(Button.name, Button)

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
