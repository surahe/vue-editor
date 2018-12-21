import Vue from 'vue'
import App from './App'
import editor from '../index'

Vue.use(editor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
