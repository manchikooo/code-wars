function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i]
    if (item % 2) return item
  }
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(stray(numbers))
