// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
    let a = n.toString()
    return a.split('').reverse().map(x => Number(x))
}