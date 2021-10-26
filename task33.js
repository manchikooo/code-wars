// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

function rentalCarCost(d) {
    if (d >= 7) {
        return ((d * 40) - 50)
    } else if (d >= 3) {
        return ((d * 40) - 20)
    } else return d * 40
}

// OR
//
// function rentalCarCost(d) {
//     if (d == 3 || d == 4 || d == 5 || d == 6) {
//         return ((d * 40) - 20)
//     } else if (d >= 7) {
//         return ((d * 40) - 50)
//     } else return d * 40
//
}