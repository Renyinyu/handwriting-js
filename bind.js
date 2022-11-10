Function.prototype.myBind = function(ctx, ...args) {
  ctx = ctx ? Object(ctx) : window
  const fn = this
  const fnKey = Symbol()
  ctx[fnKey] = fn

  return function(...args2) {
    return ctx[fnKey](...args, ...args2)
  }
}

function test() {
  console.log(arguments, this)
}

// var test1 = test.bind({a: 1}, 3, 1, 2)
var test1 = test.myBind({a: 1}, 3, 1, 2)

test1(5, 5, 5)