
/**
 * ES5 实现
 * @param {*} ctx 
 */
// Function.prototype.myCall = function(ctx) {
//   // 为保证ctx是对象，所以用Object包装
//   var ctx = ctx ? Object(ctx) : window
//   var fn = this
//   ctx.fn = fn
//   var args = []
//   /**
//    * 因为arguments第一位是ctx，所以从第1位开始
//    * 因为需要用eval执行js程序，所以需要用数组的toString特性将数组展开 -> ['1', '2'] => '1, 2'
//    * */ 
//   for (var i = 1; i < arguments.length; i++) {
//     args.push('arguments[' + i + ']')
//   }

//   var res = eval('ctx.fn('+ args +')')
//   delete ctx.fn
//   return res
// }

/**
 * ES6 实现
 */
Function.prototype.myCall = function(ctx, ...args) {
  ctx = ctx ? Object(ctx) : window
  const fn = this
  const fnKey = Symbol() // 保证不会覆盖ctx上的原属性
  ctx[fnKey] = fn
  ctx[fnKey](...args)
  delete ctx[fnKey]
}


function test() {
  console.log(arguments, this.a)
  
}

test.myCall({a: 1}, 1, 2, 3)
// test(1, 2, 3)