const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('results');
const winnerDiv = document.getElementById('winner');
const humanSpanScore = document.getElementsByClassName('humanSpan');
const computerSpanScore = document.getElementsByClassName('computerSpan');


let humanScore =0;
let computerScore =0;


function getComputerChoice() {
  let computerMove = "";
  let randomN = Math.random();
  if (randomN < 1 / 3) {
    computerMove = "rock";
  } else if (randomN < 2 / 3) {
    computerMove = "scissors";
  } else {
    computerMove = "paper";
  }

  return computerMove;
}

function playRound(humanChoise, computerChoise) {
  if (humanChoise === computerChoise) {
    resultDiv.textContent = 'Its a tie!!!'
  } else if (
    (humanChoise === "rock" && computerChoise === "scissors") ||
    (humanChoise === "scissors" && computerChoise === "paper") ||
    (humanChoise === "paper" && computerChoise === "rock")
  ) {
    resultDiv.textContent = 'You win! ;)';
    humanScore++;
  } else {
    resultDiv.textContent = 'You lose. (((';
    computerScore++;
  }

  humanSpanScore.textContent = humanScore;
  computerSpanScore.textContent = computerScore;

}

function defineWinner (){
    const winnerText = humanScore > computerScore ?
    'You winner today. Your score ' + humanScore 
    : humanScore === computerScore 
    ? 'Tie..... ' 
   :  'You lose today. Computer score ' + computerScore;
    return winnerDiv.textContent = winnerText;

}

buttons.forEach((button) => addEventListener('click', function(){
  const humanChoise= this.id;
  const computerChoise = getComputerChoice();
  playRound(humanChoise, computerChoise);
}));


