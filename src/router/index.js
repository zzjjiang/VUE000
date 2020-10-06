import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import About from '@/views/About'
import Info from '@/views/Info'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/About',
      name: 'about',
      component: About
    }
  ]
})
