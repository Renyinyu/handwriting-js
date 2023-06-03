/**
 * 数组乱序
 * 每轮选出一个随机项,放到数组的末尾,然后再将剩余的数重复操作
 */

function shuffle(arr) {
  for (let i = arr.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    console.log(randomIndex);
    [arr[randomIndex], arr[i - 1]] = [arr[i - 1], arr[randomIndex]];
  }
}

const arr = [2, 3, 2, 32, 5, 15, 1];
shuffle(arr);
console.log(arr);
