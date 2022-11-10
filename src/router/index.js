import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import IndexPage from '@/components/IndexPage'
import Music from '@/components/music/Music'
import MusicDetail from '@/components/music/MusicDetail'

import Read from '@/components/read/Read'
import ReadDetail from '@/components/read/ReadDetail'
import ReadOnlineBook from '@/components/read/ReadOnlineBook'
import ReadPublish from '@/components/read/ReadPublish'




Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'IndexPage',
      component: IndexPage,
      children:[
        {path:'',redirect:'read'},//redirect 重定向
        {path:'read',component:Read},
        {path:'music',component:Music},
      ]
    },
    {
      path:'/readdetail',
      name:'ReadDetail',
      component:ReadDetail,
    },
    {
      path:'/readonline',
      name:'ReadOnlineBook',
      component:ReadOnlineBook,
    },
    {
      path:'/readpublish',
      name:'ReadPublish',
      component:ReadPublish,
    },
    {
      path:'/musicdetail',
      name:'MusicDetail',
      component:MusicDetail,
    },
    
  ]
})
