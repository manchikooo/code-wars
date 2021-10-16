// https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript

function ensureQuestion(s) {
  switch (s.slice(-1)) {
    case '?':
      return s
      break
    default:
      return s + '?'
  }
}
