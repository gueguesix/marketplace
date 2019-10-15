import Vue from 'vue'
import App from './App.vue'
import  '../node_modules/materialize-css/dist/css/materialize.min.css'
import  '../node_modules/materialize-css/dist/js/materialize.min.js'
import  store  from  './store'

require('../node_modules/vue-ionicons/ionicons.css')

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
