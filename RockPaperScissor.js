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
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    return 'You Lose! Scissor beats Paper';
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    return 'You Lose! Rock beats Scissor';
  }

  // User Wins
  else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    return 'You Win! Rock beats Scissor';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    return 'You Win! Scosspr beats Paper';
  }

  return 'Invalid Choice';
}

function playGame() {
  let counter = 0;

  while (counter < 5) {
    playerSelection = prompt();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    counter += 1;
  }
}

playGame();
