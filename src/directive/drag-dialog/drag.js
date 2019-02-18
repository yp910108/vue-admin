export default {
  bind(el, binding, vnode) {
    const $header = el.querySelector('.el-dialog__header')
    const $target = el.querySelector('.el-dialog')
    $header.style.cursor = 'move'
    $header.style.userSelect = 'none'
    const mouseDown = (e) => {
      const startX = e.clientX
      const startY = e.clientY
      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight
      const targetWidth = $target.offsetWidth
      const targetHeight = $target.offsetHeight
      const targetOffsetLeft = $target.offsetLeft
      const targetOffsetTop = $target.offsetTop
      const minLeft = -$target.offsetLeft
      let maxLeft = screenWidth - targetOffsetLeft - targetWidth
      maxLeft = maxLeft < 0 ? 0 : maxLeft
      const minTop = -$target.offsetTop
      let maxTop = screenHeight - targetOffsetTop - targetHeight
      maxTop = maxTop < 0 ? 0 : maxTop
      let {left = 0, top = 0} = $target.style
      if (left.includes('%')) {
        left = screenWidth * (+left.replace('%', '') / 100)
        top = screenHeight * (+top.replace('%', '') / 100)
      } else {
        left = +left.replace('px', '')
        top = +top.replace('px', '')
      }
      const mouseMove = (e) => {
        const deltaX = e.clientX - startX
        const deltaY = e.clientY - startY
        const offsetLeft = Math.min(maxLeft, Math.max(minLeft, deltaX))
        const offsetTop = Math.min(maxTop, Math.max(minTop, deltaY))
        $target.style.left = `${left + offsetLeft}px`
        $target.style.top = `${top + offsetTop}px`
      }
      const mouseUp = () => {
        document.removeEventListener('mousemove', mouseMove)
        document.removeEventListener('mouseup', mouseUp)
      }
      document.addEventListener('mousemove', mouseMove)
      document.addEventListener('mouseup', mouseUp)
    }
    $header.addEventListener('mousedown', mouseDown)
  }
}
