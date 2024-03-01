function getComputerChoice() {
  var rockPaperScissorList = ['Rock', 'Paper', 'Scissor'];
  var choice = Math.floor(Math.random() * rockPaperScissorList.length);
  console.log(rockPaperScissorList[choice]);
}

getComputerChoice();
