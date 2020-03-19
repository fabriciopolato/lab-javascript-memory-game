class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedcards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards(cardsArr) {
    let j, aux = 0
    for(let i = cardsArr - 1; i >= 1; i -= 1) {
      j = Math.floor(Math.random() * i)
      aux = cardsArr[i];
      cardsArr[i] = cardsArr[j];
      cardsArr[j] = aux;
    }
  }
  checkIfPair(card1, card2) {
    this.pairClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;

  }
  isFinished() {

  }
}