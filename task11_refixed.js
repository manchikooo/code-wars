// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript/6169b53d98fd9f001d6a1275

function defineSuit(card) {
  if (card.slice(-1) == '♣') {
    return 'clubs'
  } else if (card.slice(-1) == '♦') {
    return 'diamonds'
  } else if (card.slice(-1) == '♥') {
    return 'hearts'
  } else {
    return 'spades'
  }
}
