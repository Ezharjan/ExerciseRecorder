import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Review from '@/pages/Review/Review'
import Menu from '@/pages/Menu/Menu'
import Train from '@/pages/Train/Train'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home/train'
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'review',
          name:'review',
          component:Review
        },
        {
          path:'train',
          name:'Train',
          component:Train
        }
      ]
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu 
    }
  ],
  // mode:'history'
})
