'use strict';
let message = document.querySelector('.message');
const number = Math.trunc(Math.random() * 30) + 1;
const secretNumber = document.querySelector('.number');
const highScore = document.querySelector('.highscore');
// points
let score = 20;
let highscore = 0;
console.log(number);
const button = document.querySelector('.check');

button.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔Devi inserire un numero ! !';
  } else if (guess === number) {
    if (score < 29) {
      score++;
      document.querySelector('.score').textContent = score;
      message.textContent = '👍Numero corretto !';
    } else {
      highscore++;
      highScore.textContent = highscore;
      message.textContent = '😍Hai vinto la partita!';
      document.querySelector('.score').textContent = 30;
      secretNumber.textContent = number;
    }
  } else if (guess > number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = '📈Numero alto !';
    } else {
      message.textContent = '🧨Hai perso la partita !';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = '📉Numero basso !';
    } else {
      message.textContent = '🧨Hai perso la partita!';
      document.querySelector('.score').textContent = '0';
    }
  }
});
