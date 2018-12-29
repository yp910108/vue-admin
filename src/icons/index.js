import Vue from 'vue'
import SvgIcon from 'components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

function importAll(r) {
  r.keys().forEach(r)
}

importAll(require.context('./svg', false, /\.svg$/))
