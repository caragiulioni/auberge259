import Vue from 'vue'
import Router from 'vue-router'
import FR from '@/components/FR'
import EN from '@/components/EN'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FR',
      component: FR
    },
    {
      path: '/EN',
      name: 'EN',
      component: EN
    }
  ]
})
