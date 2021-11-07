// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(numbersArray) {
    let arr = []
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            arr.push(numbersArray[i])
        }
    }
    return arr
}