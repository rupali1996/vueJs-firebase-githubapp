import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from "../views/SignIn.vue"
import SignUp from "../views/SignUp.vue"
import PageNotFound from "../views/PageNotFound.vue"

import store from "../store"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true //A protected route
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {path: '/:catchAll(.*)', component: PageNotFound},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log({to});
  if (to.meta.auth && !store.getters.isAuthenticated) {
    next('/signin')
  } else {
    next()
  }
})

export default router
