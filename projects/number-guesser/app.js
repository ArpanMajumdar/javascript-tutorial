let min = 1,
    max = 10,
    maxAttempts = 3,
    remainingAttempts = 3;


const submitButton = document.getElementById('guess-value');
const guessNumber = document.getElementById('guess-input');
const message = document.querySelector('.message');

const actualNum = getRandomInt(1, 11);
// console.log("​actualNum", actualNum);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

submitButton.addEventListener('click', checkGuess);

function checkGuess() {
    const guessNum = parseInt(guessNumber.value);

    if (isNaN(guessNum) || guessNum < min || guessNum > max) {
        showMessage(`Please enter a number between ${min} and ${max}`, false);
    } else {
        if (remainingAttempts > 0) {
            if (actualNum === guessNum) {
                showMessage('You guessed it right!!', true);
                setTimeout(restartGame, 2000);
            } else {
                remainingAttempts = remainingAttempts - 1;
                showMessage(`Wrong guess. ${remainingAttempts} attempts remaining ...`, false);
                if (remainingAttempts === 0) {
                    setTimeout(restartGame, 2000);
                }
            }
        }
    }
}

function restartGame() {
    showMessage('Let\'s play again ...', true);
    guessNumber.value = '';
    remainingAttempts = 3;
}

function showMessage(messageText, isSuccess) {
    if (message.firstChild != null) {
        message.firstChild.remove();
    }
    message.appendChild(document.createTextNode(messageText));

    if (isSuccess) {
        message.className = 'message alert alert-success mt-4';
    }
    else {
        message.className = 'message alert alert-danger mt-4';
    }
}