const computerTurn = () => {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
  
    switch (computerChoice) {
      case 1:
        computerChoice = 'brownie';
        break;
      case 2:
        computerChoice = 'crepe';
        break;
      case 3:
        computerChoice = 'candy-cane';
        break;
    }
  
    return computerChoice;
};
  
const playRound = (e) => {
    if (userScore == 5 || computerScore == 5) {
        return;
    }

    const computerSelection = computerTurn();
    const userSelection = e.currentTarget.selection;
    
    userChoice.setAttribute('src', `./images/${userSelection}.png`);
    computerChoice.setAttribute('src', `./images/${computerSelection}.png`);

    switch(userSelection) {
        case 'brownie':
            switch (computerSelection) {
              case 'brownie':
                msgDisplay.textContent = "It's a tie.";
                break;
              case 'crepe':
                compWinRound();
                break;
              case 'candy-cane':
                userWinRound();
                break;
            }
            break;
        case 'crepe':
            switch (computerSelection) {
                case 'brownie':
                    userWinRound();
                    break;
                case 'crepe':
                    msgDisplay.textContent = "It's a tie.";
                    break;
                case 'candy-cane':
                    compWinRound();
                    break;
            }
            break;
        case 'candy-cane':
            switch (computerSelection) {
                case 'brownie':
                    compWinRound();
                    break;
                case 'crepe':
                    userWinRound();
                    break;
                case 'candy-cane':
                    msgDisplay.textContent = "It's a tie.";
                    break;
            }
            break;
    }
};
  
const userWinRound = () => {
    msgDisplay.textContent = 'You won this round.';
    userScore++;
    userScoreDisplay.textContent = userScore;
    if (userScore == 5) {
      msgDisplay2.textContent = 'You win!';
      rematchButton.setAttribute('style', 'display: block');
    }
};
  
const compWinRound = () => {
    msgDisplay.textContent = 'Computer won this round.';
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    if (computerScore == 5) {
      msgDisplay2.textContent = 'Computer wins!';
      rematchButton.setAttribute('style', 'display: block');
    }
};
  
let computerScore = 0;
let userScore = 0;

const playRock = document.querySelector('#brownie');
playRock.addEventListener('click', playRound);
playRock.selection = 'brownie';

const playPaper = document.querySelector('#crepe');
playPaper.addEventListener('click', playRound);
playPaper.selection = 'crepe';

const playScissors = document.querySelector('#candy-cane');
playScissors.addEventListener('click', playRound);
playScissors.selection = 'candy-cane';

const computerScoreDisplay = document.querySelector('#computer-score');
computerScoreDisplay.textContent = computerScore;

const userScoreDisplay = document.querySelector('#user-score');
userScoreDisplay.textContent = userScore;

const msgDisplay = document.querySelector('.message');
msgDisplay.textContent = 'Click on an item above to play a round.';

const userChoice = document.querySelector('#user-play');
const computerChoice = document.querySelector('#computer-play');
const msgDisplay2 = document.querySelector('.message2');

const rematchButton = document.querySelector('#rematch');
rematchButton.addEventListener('click', () => {
    computerScore = userScore = 0;
    computerScoreDisplay.textContent = computerScore;
    userScoreDisplay.textContent = userScore;
    msgDisplay.textContent = 'Click an item above to play a round.';
    msgDisplay2.textContent = '';
    rematchButton.setAttribute('style', 'display: none');
});