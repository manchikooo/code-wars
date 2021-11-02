// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string) {
    return string.replace(/5/gi, 'S').replace(/0/gi, 'O').replace(/1/gi, 'I')
}

// OR
//
// function correct(string) {
//     let a = string.replace(/5/gi, 'S');
//     let b = a.replace(/0/gi, 'O');
//     let c = b.replace(/1/gi, 'I');
//
//     return c
// }

