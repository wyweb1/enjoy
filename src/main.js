import Vue from 'vue'
import App from './App'
import router from './router'

import { Uploader,Button} from 'vant';
const vantArr = [Uploader,Button];
vantArr.forEach(item=>Vue.use(item));//一个一个写太麻烦了遍历数组吧


// 引入amfe-flexible 自适应插件
import 'amfe-flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
