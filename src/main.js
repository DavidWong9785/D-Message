import Vue from 'vue'
import App from './App'

import DMessage from './components/index.js'
// import DMessage from 'd-message'
Vue.use(DMessage)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
