// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import axios from './axios/api'
import i18n from './i18n'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import '../theme/index.css'
import '../static/normalize.css'
import VueQuillEditor from 'vue-quill-editor'


 
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios=axios





/* eslint-disable no-new */
new Vue({
  mounted(){
    console.log(store.state.locale)
  },
  el: '#app',
  router,
  store,
  i18n,
  components: { App},
  template: '<App/>'
})
