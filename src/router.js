import Vue from 'vue'
import Vuerouter from 'vue-router'
import FirstPageComponent from './views/FirstPageComponent'
import SecondPageComponent from './views/SecondPageComponent'

Vue.use(Vuerouter)
/* eslint-disable no-new */
const router = new Vuerouter({
  routes: [
    {
      path: '/',
      component: FirstPageComponent
    },
    {
      path: '/login',
      component: SecondPageComponent
    }
  ]
})

export default router
