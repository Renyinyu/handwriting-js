// 浅拷贝实现 (es3)
function shadowClone(target) {
  if (typeof target == 'object' && target != null) {
    if (Array.isArray(target)) {
      return target.slice()
    } else {
      var result = {}
      for (var key in target) {
        result[key] = target[key]
      }
    }
    return result
  }
  return target
}

function shadowCloneES6(target) {
  if (Array.isArray(target)) {
    return [...target]
  }

  if (typeof target == 'object' && target != null) {
    const result = {}
    for (let [key, value] of Object.entries(target)) {
      result[key] = value
    }
    return result
  }
  return target
}

var test1 = {a: 1, b: 2}
var test2 = shadowClone(test1)
var test3 = shadowCloneES6(test1)
test1.a = 10
console.log(test1)
console.log(test2)
console.log(test3)