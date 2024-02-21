
function getComputerChoice() {
    const randomN = Math.floor(Math.random() * 3);
    const choices = ['Rock', 'Scissors', 'Paper'];
    const choice = choices[randomN];
    return choice;
 }

function playRound(player, computer) {
    player = player.toLowerCase();
    if (player === computer) {
        return 'It"s a tie';
    } else if ((player === 'rock' && computer === 'scissors') |
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')) {
        
        return 'you win! ' + player + 'beat ' + computer;
    } else {
        return 'you lose(' + computer + "  beat " + player;
        }
 }

function playGame() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    if (playRound() === "you win!") {
      playerScore++;
    } else playRound() === "you lose(";
    computerScore++;
  }

  if (computerScore > playerScore) {
    return "Computer won! " + computerScore + "beat your " + playerScore;
  } else if (playerScore > computerScore) {
    return "You won! " + playerScore + "beat " + computerScore;
  } else {
    return 'it"s a tie, paly again!';
  }
}