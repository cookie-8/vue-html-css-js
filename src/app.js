import Vue from 'vue'
import Vuerouter from 'vue-router'
import Vuex from 'vuex'
import Index from './js/index'
import store from './store/index'

import routes from './routes'

Vue.config.productionTip = false

Vue.use(Vuerouter)
Vue.use(Vuex)

const router = new Vuerouter({
  routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Index },
  template: '<Index/>',
 
})
