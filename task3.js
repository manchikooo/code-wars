// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

const areaOrPerimeter = function (l, w) {
  if (l == w) {
    return l * w
  } else if (l != w) {
    return (l + w) * 2
  }
}
