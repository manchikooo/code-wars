// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
  if (weight / (height * height) <= 18.5) {
    return 'Underweight'
  } else if (weight / (height * height) <= 25.0) {
    return 'Normal'
  } else if (weight / (height * height) <= 30.0) {
    return 'Overweight'
  } else if (weight / (height * height) > 30) {
    return 'Obese'
  }
}
