import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import VueHome from './views/VueHome.vue'
import API from './views/API.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/vue',
      name: 'about',
      component: VueHome
    },
    {
      path: '/API',
      name: 'API',
      component: API
    }
  ],
  mode: 'history'
})
