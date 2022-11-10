function Test(a, b) {
  this.a = a;
  this.b = b;

  // return {
  //   c: 3,
  //   d: 4
  // }
}

Test.prototype.add = function(...args) {
  return args.reduce((total, current) => {
    return total += current
  }, 0)
}

let test1 = new Test(1, 2)
console.log(test1)
/**
 * test结果：
 * {
 *  a: 1,
 *  b: 2,
 *  __proto__: {
 *    constructor: function Test(a, b)
 *    add: function(...args) {}
 *  }
 * }
 */

/**
 * 由test结果的出，new关键字的过程
 * 1. 先有构造函数
 * 2. 创建一个对象，并把构造函数的原型对象(prototype)赋值到该对象的原型属性（__proto__）
 * 3. 将构造函数的this指向更改到上一步创建的对象
 * 4. 若构造函数内部直接返回了对象，则需要直接返回构造函数的结果；否则返回第二步创建的对象（this）
 */

 function myNew(constructor, ...args) {
  if (typeof constructor !== 'function') {
    throw new Error('constructor must be a function')
  }
  const _this = {}
  _this.__proto__ = constructor.prototype
  // 将构造函数的this指向_this，并对其赋值
  const result = constructor.apply(_this, args)
  return Object.prototype.toString.call(result) == '[object Object]' ? result : _this
}

let test2 = myNew(Test, 1, 2)
console.log(test2)
