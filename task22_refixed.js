function bmi(weight, height) {
  let result = weight / height ** 2
  if (result <= 18.5) {
    return 'Underweight'
  }
  if (result <= 25.0) {
    return 'Normal'
  }
  if (result <= 30.0) {
    return 'Overweight'
  }
  if (result > 30) {
    return 'Obese'
  }
}
