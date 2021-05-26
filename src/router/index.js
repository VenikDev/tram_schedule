import Vue from 'vue'
import VueRouter from 'vue-router'
import appMain from '../views/appMain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: appMain
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
