// https://www.codewars.com/kata/5977618080ef220766000022/train/javascript

function usdcny(usd) {
  let USDtoCNY = 6.75
  let result = usd * USDtoCNY
  let total = result.toFixed(2)
  return total + ' ' + 'Chinese Yuan'
}
