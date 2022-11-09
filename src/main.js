import Vue from 'vue'
import App from './App'
import router from './router'

// 引入amfe-flexible 自适应插件
import 'amfe-flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
