// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
    if (n === 1) {
        return 0
    }
    if (n === 0) {
        return 0
    }
    if (n >= 1 && n <= 13) {
        return n - 1
    }
    if (n >= 14) {
        return n - 2
    } else return n
}