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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
