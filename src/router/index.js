import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeDetail from '@/components/HomeDetail'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/detail',
      name: 'HomeDetail',
      component: HomeDetail
    }
  ]
})

router.beforeEach((to,from,next) => {
  console.log(to)
  console.log(from)
  next()
})

export default router
