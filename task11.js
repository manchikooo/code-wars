function defineSuit(card) {
    let clubs = 'clubs'
    let diamonds = 'diamonds'
    let hearts = 'hearts'
    let spades = 'spades'
    if (card.slice(-1) == '♣') {
      return clubs
    } 
    else if (card.slice(-1) == '♦') {
      return diamonds
    }
    else if (card.slice(-1) == '♥') {
      return hearts
    }
    else  (card.slice(-1) == '♠') {
      return spades
    }
  }