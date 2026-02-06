import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  // {
  //   path: '/start',
  //   name: 'Start',
  //   component: () => import('@/views/Start.vue')
  // },
  // {
  //   path: '/test1',
  //   name: 'Test1',
  //   component: () => import('@/views/Test1.vue')
  // },
  // {
  //   path: '/test2',
  //   name: 'Test2',
  //   component: () => import('@/views/Test2.vue')
  // },
  // {
  //   path: '/test3',
  //   name: 'Test3',
  //   component: () => import('@/views/Test3.vue')
  // },
  // {
  //   path: '/test4',
  //   name: 'Test4',
  //   component: () => import('@/views/Test4.vue')
  // },
  // {
  //   path: '/test5',
  //   name: 'Test5',
  //   component: () => import('@/views/Test5.vue')
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router