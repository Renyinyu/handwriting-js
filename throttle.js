
/**
 * 节流函数：
 * 1. 因为需要记录上次的执行时间，所以需要闭包
 * 2. this上下文需要绑定事件监听对象
 * 3. 在指定时间内再执行函数
 */

function throttle(handler, delay) {
  delay = typeof delay === 'number' && delay >= 0 ? delay : 1000
  let lastTime = Date.now();
  
  return function(...args) {
    const ctx = this;
    const currentTime = Date.now()
    if (currentTime - lastTime >= delay) {
      handler.apply(ctx, args)
      lastTime = currentTime
    }
  }
}

export default throttle
