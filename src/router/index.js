import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import ResumePage from '../components/ResumePage'
import ContactPage from '../components/ContactPage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/resume',
      name: 'ResumePage',
      component: ResumePage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '*',
      name: 'DefaultPage',
      component: MainPage
    }
  ]
})
