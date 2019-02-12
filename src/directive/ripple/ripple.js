import './ripple.scss'

const DEFAULT_BG = 'rgba(0, 0, 0, 0.15)' // 波纹颜色

export default {
  inserted(el, {value = {}}) {
    let {bg} = value
    bg = bg || DEFAULT_BG
    el.style.position = 'relative'
    el.style.overflow = 'hidden'
    el.addEventListener('mousedown', (e) => {
      let rect = el.getBoundingClientRect()
      let ripple = el.querySelector('.e-ripple')
      if (!ripple) {
        ripple = document.createElement('span')
        ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px'
        el.appendChild(ripple)
      }
      ripple.className = 'e-ripple'
      ripple.style.left = (e.clientX - rect.left - ripple.offsetWidth / 2) + 'px'
      ripple.style.top = (e.clientY - rect.top - ripple.offsetHeight / 2) + 'px'
      ripple.style.backgroundColor = bg
      ripple.className = 'e-ripple z-active'
    })
  }
}
