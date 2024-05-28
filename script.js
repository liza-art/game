function playGame(){
   let humanScore = 0;
   let computerScore = 0;

     for(let i = 0; i < 5; i ++){
      let computerChoise = getComputerChoice();
      let humanChoise =  prompt('Input rock, scissors or paper');


      const winner = playRound(humanChoise, computerChoise);

      if(winner === humanChoise){
        humanScore++;
        console.log('You win');
      }else if('You lose'){
        computerScore++;
      }else{
        console.log('its a tie');
      }
     };

     console.log(`Your score - ${humanScore}, computer Score - ${computerScore}`);

     if(humanScore > computerScore){
      console.log('you winer!');
     }else if(humanScore < computerScore){
      console.log('you lose the game');
     }else {
      console.log('its a tie');
     }
  };


  function getComputerChoice(){
    let computerMove = '';
     let randomN = Math.random();
     if(randomN < 1/3){
       computerMove = 'rock';
     } else if(randomN < 2/3){
      computerMove = 'scissors';
     }else{
      computerMove = 'paper';
     }

     return computerMove;
   };


  function playRound(humanChoise, computerChoise){

    if(humanChoise === computerChoise){
      return null;
    } else if(
      (humanChoise === 'rock' && computerChoise === 'scissors') ||
      (humanChoise === 'scissors' && computerChoise === 'paper') ||
      (humanChoise === 'paper' && computerChoise === 'rock')){
        return humanChoise;
      }else{
        return computerChoise;
      }
  }

  playGame();
