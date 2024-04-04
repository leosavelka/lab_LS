const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset');

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 5;

submitButton.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (attempts === 0) {
    result.textContent = 'У тебя закончились попытки.';
    return;
  }

  if (guess === randomNumber) {
    result.textContent = 'Ты угадал!';
  } else if (guess < randomNumber) {
    result.textContent = 'Загаданное число больше.';
  } else {
    result.textContent = 'Загаданное число меньше.';
  }

  attempts--;
});

resetButton.addEventListener('click', () => {
  window.location.reload();
});
