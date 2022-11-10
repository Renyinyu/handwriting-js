
/**
 * 判断实例是否为某个构造函数的实例
 * 主要实现：判断实例的原型链上是否有原型对象与构造函数的原型对象严格相等
 * instance.__proto__(.__proto__)(.__proto__)(...) === constructor.prototype
 * @param {*} instance 
 * @param {*} constructor 
 */

function instanceOf(instance, constructor) {
  // 获取构造函数的原型对象
  const proto = constructor.prototype
  let target = instance.__proto__

  while(true) {
    if (target === null) {
      return false
    }

    if (target === proto) {
      return true
    }

    target = target.__proto__
  }
}

function Test() {}
const test = new Test()
console.log(test instanceof Test)
console.log(test instanceof Object)
console.log(instanceOf(test, Test))
console.log(instanceOf(test, Object))
console.log(instanceOf([], Array))
console.log(instanceOf([], Test))