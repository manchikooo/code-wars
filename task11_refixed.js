// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript/6169b53d98fd9f001d6a1275

function defineSuit(card) {
  switch (card.slice(-1)) {
    case '♣':
      return 'clubs'
      break
    case '♦':
      return 'diamonds'
      break
    case '♥':
      return 'hearts'
      break
    case '♠':
      return 'spades'
      break
  }
}
