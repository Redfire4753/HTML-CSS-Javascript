const runGame = () => {
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
    const target = Math.floor(Math.random() * 101);
do {
    console.log(target);
    guessString = prompt('Give me a number between 1 and 100.');
    if (guessString === null) {
        return;
    }
    numTries++;
    guessNumber = +guessString;
    correct = checkGuess(guessNumber,target);
} while(!correct);
    alert(`You've guessed correctly after ${numTries} tries.`)
}

const checkGuess = (guessNumber,target) => {
    let correct = false;
    if (isNaN(guessNumber)) {
        alert('This is not a number!');
    }
    else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('You\'re out of range for this function');
    }
    else if (guessNumber > target) {
        alert('Little too large');
    }
    else if (guessNumber < target) {
        alert('Little too small');
    } 
    else {
        correct = true;
    }
    return correct;
}
