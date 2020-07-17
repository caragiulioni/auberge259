// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FR from './components/FR.vue'
import EN from './components/EN.vue'
import Thanks from './components/Thanks.vue'
import Header from './components/Header.vue'
import Landing from './components/Landing.vue'
import Suites from './components/Suites.vue'
import Info from './components/Info.vue'
import Button from './components/Button.vue'
import Location from './components/Location.vue'
import Contact from './components/Contact.vue'
<<<<<<< HEAD
import Submit from './components/submit.vue'
=======
import Submit from './components/Submit.vue'
>>>>>>> 90d2f7706c8e48c37a63afa6c06532f608cb5282
import FooterInfo from './components/FooterInfo.vue'

Vue.config.productionTip = false

import Flickity from 'vue-flickity'

Vue.config.productionTip = false

Vue.component('fr', FR)
Vue.component('en', EN)
Vue.component('headerbar', Header)
Vue.component('flicker', Flickity)
Vue.component('landing', Landing)
Vue.component('suites', Suites)
Vue.component('info', Info)
Vue.component('bookbutton', Button)
Vue.component('location', Location)
Vue.component('contact', Contact)
Vue.component('submit', Submit)
Vue.component('footerinfo', FooterInfo)
Vue.component('thanks', Thanks)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
