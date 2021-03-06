import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'
import i18n from './lang'
import './icons'
import './styles/index.scss'
import './permission'
import './mock'

import * as filters from './filters'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
})
