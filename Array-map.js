Array.prototype.myMap = function(executor) {
  var list = []
  for (var i = 0; i < this.length; i++) {
    var result = executor(this[i], i, this)
    list.push(result)
  }
  return list
}

const list =  [1, 2, 3, 4, 5, 6].myMap(function(item, index) {
  item *= index
  return item
})

console.log(list)