import vueEditor from './vue-editor'

const plugin = {
  install: function (Vue) {
    Vue.component('VueEditor', vueEditor)
  }
}

export default plugin
