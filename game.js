let random = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than or equal to 1');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayguess(guess);
      displaymessage(`GAME OVER. The number was ${random}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random) {
    displaymessage('Congrats! Your guess is correct.');
    endgame();
  } else if (guess < random) {
    displaymessage('Alas! The number is too low. Try again');
  } else {
    displaymessage('Alas! The number is too high. Try again');
  }
}

function displayguess(guess) {
  input.value = '';
  guesslot.innerHTML += `${guess}, `;
  numguess++;
  remaining.innerHTML = `${12 - numguess}`;
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start new Game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newbutton = document.querySelector('#newgame');
  newbutton.addEventListener('click', function (e) {
    random = Math.floor(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guesslot.innerHTML = '';
    remaining.innerHTML = `${12 - numguess}`;
    input.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}
