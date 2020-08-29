import Vue from 'vue'
import App from './App.vue'
import ResizePane from '../packages'

Vue.config.productionTip = false

Vue.use(ResizePane)

new Vue({
  render: h => h(App),
}).$mount('#app')
