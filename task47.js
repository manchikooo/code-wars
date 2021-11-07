// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function (array) {
    let c = array.map((a, b) =>
        `${b + 1}: ${a}`)
    return c
}