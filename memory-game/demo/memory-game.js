"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

const colors = shuffle(COLORS);

createCards(colors);


/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let i = 0; i < colors.length; i++) {
    // missing code here ...
    const card = document.createElement('div');
    card.classList.add(colors[i]);
    card.classList.add('unflipped');
    card.setAttribute('id', i)     // added this for unique id
    card.addEventListener('click', handleCardClick);
    gameBoard.appendChild(card);
  }
}


/** Flip a card face-up. */

function flipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor = card.classList[0];
  card.classList.remove(`${card.classList[1]}`);
  card.classList.add('flipped');

}

/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...
  card.style.backgroundColor = 'white';
  card.classList.remove(`${card.classList[1]}`);
  card.classList.add('unflipped');
}

/** Handle clicking on a card: this could be first-card or second-card. */
let firstCard = null;
let secondCard = null;
let cannotClick = false;
let score = 0;

function updateScore() {
  const scoreCount = document.querySelector('.score');
  scoreCount.innerText = `Score: ${score}`;
}

function handleCardClick(evt) {
  // ... you need to write this ...

  // Will not allow clicks to be made
  if(cannotClick) {
    return;
  }

  flipCard(evt.target);

  if(!firstCard) {
    firstCard = evt.target;
    score++;
    updateScore();
  } else {
    // second card is chosen, cannot click around anymore
    secondCard = evt.target;
    score++;
    updateScore();
    cannotClick = true;


    // If matching colors && works only if you click on two different cards
    if(firstCard.classList[0] === secondCard.classList[0] &&
       firstCard.getAttribute('id') !== secondCard.getAttribute('id')) {
      setTimeout(() => {
        // Reset
        firstCard = null;
        secondCard = null;
        cannotClick = false;
      }, FOUND_MATCH_WAIT_MSECS);
    } else {
      // If not matching colors
      setTimeout(() => {
        unFlipCard(firstCard);
        unFlipCard(secondCard);
        // Reset
        firstCard = null;
        secondCard = null;
        cannotClick = false;
      }, FOUND_MATCH_WAIT_MSECS);
    }
  }
}

// Start Game
const startGameBtn = document.querySelector('.start-game-btn');
startGameBtn.addEventListener('click', handleStartGame);

function handleStartGame(e) {
  const startGame = document.querySelector('.start-game');
  e.target.style.display = 'none';
  startGame.style.visibility = 'visible';
}

// Reset Game
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', handleReset);
let record = JSON.parse(localStorage.getItem('record'));

function handleReset() {

  // High Score
  if(record === null) {
    record = localStorage.setItem('record', JSON.stringify(score));
    document.querySelector('.record').innerText = `Record: ${score}`;
  } else {
    if(score < localStorage.record) {
      localStorage.setItem('record', JSON.stringify(score));
      document.querySelector('.record').innerText = `Record: ${localStorage.record}`;
      console.log(localStorage.record)
    }
  }

  console.log(typeof record)

  const game = document.querySelector('#game');
  let child = game.lastElementChild;

  while(child) {
    game.removeChild(child)
    child = game.lastElementChild;
  }

  shuffle(COLORS);
  createCards(colors);
  score = 0;
  updateScore();
}

