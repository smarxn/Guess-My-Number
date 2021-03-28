'use strict';
/*
document.querySelector('.message').textContent = '🎉 Correct Number !!!';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no guess
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number !!';

    // when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number !!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '36rem';

    // when guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game !!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You lost the game !!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
