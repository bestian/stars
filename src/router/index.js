import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/a2',
    name: 'A2',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld1.vue')
  },
  {
    path: '/a3',
    name: 'A3',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld2.vue')
  },
  {
    path: '/a4',
    name: 'A4',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld3.vue')
  },
  {
    path: '/a5',
    name: 'A5',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld4.vue')
  },
  {
    path: '/a6',
    name: 'A6',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld5.vue')
  },
  {
    path: '/a7',
    name: 'A7',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld6.vue')
  },
  {
    path: '/a8',
    name: 'A8',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld7.vue')
  },
  {
    path: '/b1',
    name: 'B1',
    component: () => import(/* webpackChunkName: "about" */ '../components/B1.vue')
  },
  {
    path: '/b2',
    name: 'B2',
    component: () => import(/* webpackChunkName: "about" */ '../components/B2.vue')
  },
  {
    path: '/b3',
    name: 'B3',
    component: () => import(/* webpackChunkName: "about" */ '../components/B3.vue')
  },
  {
    path: '/b4',
    name: 'B4',
    component: () => import(/* webpackChunkName: "about" */ '../components/B4.vue')
  },
  {
    path: '/b5',
    name: 'B5',
    component: () => import(/* webpackChunkName: "about" */ '../components/B5.vue')
  },
  {
    path: '/b6',
    name: 'B6',
    component: () => import(/* webpackChunkName: "about" */ '../components/B6.vue')
  },
  {
    path: '/b7',
    name: 'B7',
    component: () => import(/* webpackChunkName: "about" */ '../components/B7.vue')
  },
  {
    path: '/c1',
    name: 'C1',
    component: () => import(/* webpackChunkName: "about" */ '../components/C1.vue')
  },
  {
    path: '/c2',
    name: 'C2',
    component: () => import(/* webpackChunkName: "about" */ '../components/C2.vue')
  },
  {
    path: '/c3',
    name: 'C3',
    component: () => import(/* webpackChunkName: "about" */ '../components/C3.vue')
  },
  {
    path: '/c4',
    name: 'C4',
    component: () => import(/* webpackChunkName: "about" */ '../components/C4.vue')
  },
  {
    path: '/c5',
    name: 'C5',
    component: () => import(/* webpackChunkName: "about" */ '../components/C5.vue')
  },
  {
    path: '/c6',
    name: 'C6',
    component: () => import(/* webpackChunkName: "about" */ '../components/C6.vue')
  },
  {
    path: '/c7',
    name: 'C7',
    component: () => import(/* webpackChunkName: "about" */ '../components/C7.vue')
  },
  {
    path: '/d1',
    name: 'D1',
    component: () => import(/* webpackChunkName: "about" */ '../components/D1.vue')
  },
  {
    path: '/d2',
    name: 'D2',
    component: () => import(/* webpackChunkName: "about" */ '../components/D2.vue')
  },
  {
    path: '/D3',
    name: 'D3',
    component: () => import(/* webpackChunkName: "about" */ '../components/D3.vue')
  },
  {
    path: '/d4',
    name: 'D4',
    component: () => import(/* webpackChunkName: "about" */ '../components/D4.vue')
  },
  {
    path: '/d5',
    name: 'D5',
    component: () => import(/* webpackChunkName: "about" */ '../components/D5.vue')
  },
  {
    path: '/d6',
    name: 'D6',
    component: () => import(/* webpackChunkName: "about" */ '../components/D6.vue')
  },
  {
    path: '/d7',
    name: 'D7',
    component: () => import(/* webpackChunkName: "about" */ '../components/D7.vue')
  },
  {
    path: '/d8',
    name: 'D8',
    component: () => import(/* webpackChunkName: "about" */ '../components/D8.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/work',
    name: 'Work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Work.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
