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
let remainingAttempts = 5;

const imageElement = document.querySelector('.image');
const wordElement = document.getElementById('word');
const remainingElement = document.getElementById('remaining')
const lettersElement = document.getElementById('letters');
const messageElement = document.getElementById('message');
const resetButton = document.getElementById('reset');

function displayWord() {
    wordArray = chosenWord.split('');
    hiddenWord = [];
    for(var i = 0; i < wordArray.length; i ++){
        if(wordArray[i] == ' ' || guessedLetters.includes(wordArray[i])){
            hiddenWord.push(wordArray[i]);
        }else{
            hiddenWord.push('_');
        }
    }
    var hiddenWordString = hiddenWord.join(' ');
    wordElement.textContent = hiddenWordString;
    remainingElement.textContent = 'Remaining Attempts: ' + remainingAttempts;
}

function displayLetters() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabet.split('');
    const buttons = letters.map(letter => {
        const disabled = guessedLetters.includes(letter) ? 'disabled' : '';
        return `<button class="letter" ${disabled} onclick="guess('${letter}')">${letter}</button>`;
    })
    lettersElement.innerHTML = buttons.join('');
}

function guess(letter) {
    guessedLetters.push(letter);
    if (!chosenWord.includes(letter)) {
        remainingAttempts--;
    }
    displayWord();
    displayLetters();
    displayImages();
    checkGameState();
}

function checkGameState() {
    if (remainingAttempts === 0) {
        remainingElement.textContent = 'Game over! You ran out of attempts. The word was: ' + chosenWord;
        disableLetters();
    } else if (!wordElement.textContent.includes('_')) {
        remainingElement.textContent = 'Congratulations! You guessed the word!';
        disableLetters();
    }
}

function resetGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingAttempts = 5;
    messageElement.textContent = '';
    remainingElement.textContent = 'Remaining Attempts: ' + remainingAttempts;
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

function displayImages(){
    console.log("Displaying image for remainingAttempts:", remainingAttempts);
    switch(remainingAttempts){
        case 5:
            imageElement.src = "./images/5.png";
            break;
        
        case 4:
            imageElement.src = "./images/4.png";
            break;
        case 3:
            imageElement.src = "./images/3.png";
            break;         
        case 2:
            imageElement.src = "./images/2.png";
            break;
        case 1:
            imageElement.src = "./images/1.png";
            break; 
        default:
            imageElement.src = "./images/5.png";
    }
}

displayWord();
displayLetters();
displayImages();
resetButton.addEventListener('click', resetGame);
