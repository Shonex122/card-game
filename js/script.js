let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
  name: "John doe",
  chips: 120,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#cards-el");

function getRandomCard() {
  let randomnumber = Math.floor(Math.random() * 13) + 1;
  if (randomnumber > 10) {
    return 10;
  } else if (randomnumber === 1) {
    return 11;
  } else {
    return randomnumber;
  }
}

console.log(cards);

function startGame() {
  isAlive = true;
  let fisrtCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [fisrtCard, secondCard];
  sum = fisrtCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to a new card?";
  } else if (sum === 21) {
    message = "you got a jackpot";
    hasBlackJack = true;
  } else {
    message = "LOSER!!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newGame() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
