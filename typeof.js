/**
 * 根据传入的数据判断对应的类型（加强版typeof）
 */

function myTypeof(data) {
  if (data === null) {
    return data
  }

  if (typeof data !== 'object') {
    // 包含function
    return typeof data
  } else {
    const _toString = Object.prototype.toString
    return _toString.call(data).slice(8, -1)
  }
}

console.log(myTypeof(null)) // null
console.log(myTypeof(undefined)) // undefined
console.log(myTypeof('')) // string
console.log(myTypeof(1)) // number
console.log(myTypeof(false)) // boolean
console.log(myTypeof(Symbol())) // symbol
console.log(myTypeof(() => {})) // function
console.log(myTypeof({})) // Object
console.log(myTypeof(new String())) // String
console.log(myTypeof(new Number())) // Number
console.log(myTypeof(new Boolean())) // Boolean
console.log(myTypeof(new Date())) // Date
console.log(myTypeof(new RegExp())) // RegExp
console.log(myTypeof(new Set())) // Set
console.log(myTypeof(new Map())) // Map
console.log(myTypeof(new Function())) // Map
