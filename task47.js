// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function (array) {
    if (array.length == 0) {
        return []
    }
    for (let i = 0; i < array.length; i++) {
        let a = array.map((v, i) => `${i + 1}: ${v}`)
        return a
    }
}