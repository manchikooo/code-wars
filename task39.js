// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
    let arr1sum = 0
    let arr2sum = 0
    for (let i = 0; i < arr1.length; i++) {
        arr1sum += arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2sum += arr2[i]
    }
    return arr1sum + arr2sum
}