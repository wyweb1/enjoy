import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/components/IndexPage'
import Read from '@/components/read/Read'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'IndexPage',
      component: IndexPage,
      children:[
        {path:'/',component:Read},
        {path:'/read',component:Read}
      ]
    },
  ]
})
