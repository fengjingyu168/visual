import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'

Vue.use(Router)

const router = new Router({
  // mode: 'history', // 切换路径模式，变成history模式,不然路径为/#/home
  scrollBehavior: () => ({ // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'test',
      component: () => import('@/components/test'),
      title: 'test'
    },
  ]
})

router.beforeEach((to, from, next) => {
  next()
})


export default router
