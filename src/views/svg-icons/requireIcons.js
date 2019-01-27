const context = require.context('@/icons/svg', false, /\.svg$/)
const re = /\.\/(.*)\.svg/
const icons = context.keys().map((k) => {
  return k.match(re)[1]
})
export default icons
