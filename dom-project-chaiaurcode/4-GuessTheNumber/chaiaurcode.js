const MAX_GUESSES = 10;
let randomNumber, guessCount;

const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let resetButton;

function initGame() {
  guessCount = 1;
  randomNumber = generateRandomNumber();
  console.log(randomNumber);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function displayMessage(message, backgroundColor = 'white') {
  lowOrHi.textContent = message;
  lowOrHi.style.backgroundColor = backgroundColor;
}

function checkGuess(e) {
  e.preventDefault();
  const userGuess = Number(guessField.value);

  if (userGuess === randomNumber) {
    displayMessage('Congratulations! You got it right!', 'green');
    setGameOver();
  } else if (guessCount === MAX_GUESSES) {
    displayMessage('!!!GAME OVER!!!');
    setGameOver();
  } else {
    displayMessage('Wrong!', 'red');
    updateLowOrHi(userGuess);
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function updateLowOrHi(userGuess) {
  if (userGuess < randomNumber) {
    lowOrHi.textContent = 'Last guess was too low!';
  } else if (userGuess > randomNumber) {
    lowOrHi.textContent = 'Last guess was too high!';
  }
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  createResetButton();
}

function createResetButton() {
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  resetUI();
  initGame();
}

function resetUI() {
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  if (resetButton && resetButton.parentNode) {
    resetButton.parentNode.removeChild(resetButton);
  }

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
}

// Event listeners
guessSubmit.addEventListener('click', checkGuess);

// Initialize the game
initGame();