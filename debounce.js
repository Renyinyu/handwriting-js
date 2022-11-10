
function debounce(handler, delay) {
  delay = typeof delay === 'number' && delay >= 0 ? delay : 1000
  let timer = null
  return function(args) {
    const ctx = this;
    clearTimeout(timer)
    timer = setTimeout(function() {
      handler.apply(ctx, args)
    }, delay)    
  }
}

export default debounce