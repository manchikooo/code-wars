// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
    let sum = 0
    let arr = []
    for (let i = 1; i <= num; i++){
        (arr.push(i))
    }
    for (let i = 0; i < num; i++){
        sum += arr[i]
    }
    return sum
}