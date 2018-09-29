import Vue from 'vue'
import Vuerouter from 'vue-router'
import Index from './js/index'

import routes from './routes'

Vue.config.productionTip = false

Vue.use(Vuerouter)

const router = new Vuerouter({
  routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
