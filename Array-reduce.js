/**
 * 第一次执行回调函数时，不存在“上一次的计算结果”。
 * 如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。
 * 否则，数组索引为 0 的元素将被作为初始值 initialValue，
 * 迭代器将从第二个元素开始执行（索引为 1 而不是 0）。
 * @param {*} executor 
 * @param {*} initial 
 * @returns 
 */

Array.prototype.myReduce = function(executor, initial) {
  const hasInitial = Boolean(initial)
  let result = hasInitial ? initial : this[0];

  for (var i = hasInitial ? 0 : 1; i < this.length; i++) {
    result = executor(result, this[i], this)
  }
  return result
}

const list =  [1, 2, 3, 4, 5, 6].myReduce((total, current) => {

  return total += current
})

console.log(list)