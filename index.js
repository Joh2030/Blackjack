//create a new array the first and the second cards
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el"); or
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

//create an object to hold the player data
let player = {
  name: "Ken",
  chips: 139,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
//A function, getRandomCard(), thst always returns number 5
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  //generates two randoms numbers
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  //Re-assign the cards and sum variables so that the game can start
  renderGame();
}

function renderGame() {
  //render out first and second cards
  cardsEl.textContent = "Cards: ";
  //create a for loop that renders out all the cards instead of just two
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    //added the new card to the sum variable
    sum += card;
    cards.push(card);
    //called the start game
    renderGame();
  }
}
