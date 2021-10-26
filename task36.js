// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = n => {
    let num = n
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(num - i)
    }
    return arr
};