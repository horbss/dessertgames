const words = [
    "chocolate",
    "vanilla", 
    "cookies and cream",
    "caramel",
    "coffee",
    "mint chocolate chip",
    "rocky road",
    "peanut butter",
    "strawberry",
    "neopolitan", 
    "cookie dough",
    "butter pecan",
    "chocolate chip",
    "pistachio",
    "matcha", 
    "chocolate chunk",
    "cheese"
];

let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingAttempts = 6;

const wordElement = document.getElementById('word');
const lettersElement = document.getElementById('letters');
const messageElement = document.getElementById('message');
const resetButton = document.getElementById('reset');

function displayWord() {
    wordArray = chosenWord.split('');
    hiddenWord = [];
    for(var i = 0; i < wordArray.length; i ++){
        if(guessedLetters.includes(wordArray[i])){
            hiddenWord.push(wordArray[i]);
        }else if(wordArray[i] === ' '){
            hiddenWord.push('   ');
        }else{
            hiddenWord.push('_');
        }
    }
    var hiddenWordString = hiddenWord.join(' ');
    wordElement.textContent = hiddenWordString;
}

function displayLetters() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabet.split('').map(letter => `
        <button class="letter" ${guessedLetters.includes(letter) ? 'disabled' : ''} onclick="guess('${letter}')">${letter}</button>
    `).join('');
    lettersElement.innerHTML = letters;
}

function guess(letter) {
    guessedLetters.push(letter);
    if (!chosenWord.includes(letter)) {
        remainingAttempts--;
    }
    displayWord();
    displayLetters();
    checkGameState();
}

function checkGameState() {
    if (remainingAttempts === 0) {
        messageElement.textContent = 'Game over! You ran out of attempts. The word was: ' + chosenWord;
        disableLetters();
    } else if (!wordElement.textContent.includes('_')) {
        messageElement.textContent = 'Congratulations! You guessed the word!';
        disableLetters();
    }
}

function resetGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingAttempts = 6;
    messageElement.textContent = '';
    displayWord();
    displayLetters();
    enableLetters();
}

function disableLetters() {
    const letterButtons = document.querySelectorAll('.letter');
    letterButtons.forEach(button => button.disabled = true);
}

function enableLetters() {
    const letterButtons = document.querySelectorAll('.letter');
    letterButtons.forEach(button => button.disabled = false);
}

displayWord();
displayLetters();
resetButton.addEventListener('click', resetGame);
