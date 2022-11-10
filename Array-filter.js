Array.prototype.myFilter = function(executor) {
  var list = []
  for (var i = 0; i < this.length; i++) {
    var target = executor(this[i], i, this)
    if (target) {
      list.push(this[i])
    }
  }
  return list
}

const list = [1, 2, 3, 4, 5].myFilter((item, index) => {
  return item >= 3
})

console.log(list)