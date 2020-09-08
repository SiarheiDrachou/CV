import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/js/bootstrap.js'

const VueInputMask = require('vue-inputmask').default;

Vue.config.productionTip = false

Vue.use(VueInputMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
