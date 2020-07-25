import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import 'materialize-css/dist/css/materialize.min.css'
//import 'material-design-icons/iconfont/material-icons.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Notifications from 'vue-notification'
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(Notifications);
Vue.use(VueGeolocation);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
