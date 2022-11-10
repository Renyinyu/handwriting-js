
/**
 * ES5实现
 */
// Function.prototype.myApply = function(ctx) {
//   ctx = ctx ? Object(ctx) : window

//   var args = arguments[1] || []

//   var fn = this
//   ctx.fn = fn
//   var result = eval('ctx.fn(' + args +')')
//   delete ctx.fn
//   return result
// }

/**
 * ES6实现
 * @param {*} ctx 
 * @returns 
 */
Function.prototype.myApply = function(ctx, args) {
  ctx = ctx ? Object(ctx) : window
  const fn = this
  const fnKey = Symbol()
  ctx[fnKey] = fn
  var result = ctx[fnKey](...args)
  delete ctx[fnKey]
  return result
}

function test() {
  console.log(arguments, this)
}

test.myApply({a: 1}, [1, 2, 3])