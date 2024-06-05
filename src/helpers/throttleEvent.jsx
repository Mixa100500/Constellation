export function throttle (type, name) {
  let running = false
  function func() {
    if (running) {
      return
    }
    running = true
    requestAnimationFrame(function () {
      window.dispatchEvent(new CustomEvent(name))
      running = false
    })
  }
  window.addEventListener(type, func)
  return [type, func]
}