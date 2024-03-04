let button = document.querySelectorAll('button');
let userCounter = document.createElement('div');
let computerCounter = document.createElement('div');

let userScore = 0;
let computerScore = 0;

function setUpGame() {
  let winnerText = document.createElement('div');
  userScore = 0;
  computerScore = 0;

  userCounter.textContent = `User Score: ${userScore}`;
  computerCounter.textContent = `Computer Score: ${computerScore}`;

  if (!document.body.contains(winnerText)) {
    document.body.appendChild(winnerText);
  }

  winnerText.textContent = '';

  document.body.appendChild(userCounter);
  document.body.appendChild(computerCounter);
}

function getComputerChoice() {
  var rockPaperScissorList = ['rock', 'paper', 'scissor'];
  var choice = Math.floor(Math.random() * rockPaperScissorList.length);
  return rockPaperScissorList[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 'Draw';
  }

  // User loses
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore += 1;
    computerCounter.textContent = `Computer Score: ${computerScore}`;
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    computerScore += 1;
    computerCounter.textContent = `Computer Score: ${computerScore}`;
    return 'You Lose! Scissor beats Paper';
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    computerScore += 1;
    computerCounter.textContent = `Computer Score: ${computerScore}`;
    return 'You Lose! Rock beats Scissor';
  }

  // User Wins
  else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    userScore += 1;
    userCounter.textContent = `User Score: ${userScore}`;
    return 'You Win! Rock beats Scissor';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    userScore += 1;
    userCounter.textContent = `User Score: ${userScore}`;
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    userScore += 1;
    userCounter.textContent = `User Score: ${userScore}`;
    return 'You Win! Scissor beats Paper';
  }

  return 'Invalid Choice';
}

function playGame() {
  let winnerText = document.createElement('div');
  button.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      let computerSelection = getComputerChoice();
      const result = playRound(e.target.id, computerSelection);
      winnerText.textContent = result;
      document.body.appendChild(winnerText);
      if (userScore == 5) {
        alert('You Win!');
        document.body.removeChild(winnerText);
        setUpGame();
      } else if (computerScore == 5) {
        alert('You Lose!');
        document.body.removeChild(winnerText);
        setUpGame();
      }
    });
  });
}

setUpGame();
playGame();
