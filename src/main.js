import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(VueParticles)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
