import Vue from 'vue'
import SvgIcon from 'components/svg-icon'

Vue.component('svg-icon', SvgIcon)

function importAll(r) {
  r.keys().forEach(r)
}

importAll(require.context('./svg', false, /\.svg$/))
