'use strict';

const dice = document.querySelector('.dice');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const btn_roll = document.querySelector('.btn--roll');
let sum = 0;
let sum1 = 0;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btn_hold = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
let sum2 = 0;
let sum3 = 0;
const btnNew = document.querySelector('.btn--new');

function game() {
  let random = Math.trunc(Math.random() * 6) + 1;
  console.log(random);

  dice.setAttribute('src', `dice-${random}.png`);

  if (player0.classList.contains('player--active')) {
    if (random !== 1) {
      sum += random;
      current0.textContent = sum;
    } else {
      sum = 0;
      current0.textContent = sum;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  } else {
    if (random !== 1) {
      sum1 += random;
      current1.textContent = sum1;
    } else {
      sum1 = 0;
      current1.textContent = sum1;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
}

btn_roll.addEventListener('click', game);


function gameHold() {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  sum2 += sum;
  sum3 += sum1;
  sum = 0;
  sum1 = 0;
  score0.textContent = sum2;
  score1.textContent = sum3;
  current0.textContent = 0;
  current1.textContent = 0;
}

btn_hold.addEventListener('click', gameHold);

btnNew.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  sum = 0;
  sum1 = 0;
  sum2 = 0;
  sum3 = 0;
});
