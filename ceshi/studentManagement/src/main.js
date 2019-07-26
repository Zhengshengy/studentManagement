import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import element from './assets/css/element.css'
// import element1 from './assets/js/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
    // element,
    // element1,
  render: h => h(App)
}).$mount('#app')
