function deepClone(origin, hashMap = new WeakMap()) {
  // 判断是否为对象或数组
  if (origin == undefined || typeof origin !== 'object') {
    return origin
  }

  if (origin instanceof Date) return new Date(origin) // 处理日期
  if (origin instanceof RegExp) return new RegExp(origin) // 处理正则

  // 使用weakmap的键为弱引用特性，判断对象是否已被复制过
  const hashCache = hashMap.get(origin)
  if (hashCache) {
    // 若对象已被复制过，则直接返回（避免进入死循环）
    return hashCache
  }

  // 创建一个空对象或数组
  var target = new origin.constructor()

  // 保存已复制过的对象引用
  hashMap.set(origin, target)

  // 开始对origin源对象进行拷贝
  // 此处使用Reflect.ownKeys是为了解决不能复制symbol问题
  Reflect.ownKeys(origin).forEach(key => {
    if (typeof origin == 'object' && origin != null) {
      target[key] = deepClone(origin[key], hashMap)
    } else {
      target[key] = origin[key]
    }
  })

  // for (let key in origin) {
  //   if (origin.hasOwnProperty(key)) {
  //     if (typeof origin == 'object' && origin != null) {
  //       hashMap.set(origin, target)
  //       target[key] = deepClone(origin[key], hashMap)
  //     } else {
  //       target[key] = origin[key]
  //     }
  //   }
  // }

  return target
}


// var obj = {
//   value: 1,
//   b: {
//     value: 2,
//     c: {
//       value: 3,
//       list: [1, 2, 3]
//     }
//   }
// }

// var obj2 = deepClone(obj)

// obj.b.value = 10
// console.log(obj.b.value) // 10
// console.log(obj2.b.value) // 2

// obj.b.c.list.push(100)
// console.log(obj.b.c.list) // [1, 2, 3, 100]
// console.log(obj2.b.c.list) // [1, 2, 3]


// 循环引用（即对象的属性间接或直接的引用了自身的情况）
var test1 = {a: 1}
var test2 = {b: 2}

test1.test2 = test2
test2.test1 = test1


var test = deepClone(test2)
console.log(test)