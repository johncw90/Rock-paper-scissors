function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let compAnswer = getComputerChoice();
  computerSelection = compAnswer;

  playerSelection = prompt("Rock, paper or scissors?");
  console.log(`You chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `Round won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `Round won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `Round won! ${playerSelection} beat ${computerSelection}`;
  } else {
    return `Round lost! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let myScore = 0;
  let compScore = 0;
  for (let round = 1; round <= 5; round++) {
    let result = playRound();
    let roundWon = "Round won!";
    let roundLost = "Round lost!";
    if (result.includes(roundWon)) {
      myScore++;
    } else if (result.includes(roundLost)) {
      compScore++;
    }
    console.log(result);
    console.log(`Your score: ${myScore}`);
    console.log(`Computer score: ${compScore}`);

    if (round === 5 && myScore > compScore) {
      console.log("You win the game!");
    } else if (round === 5 && compScore > myScore) {
      console.log("Computer wins the game!");
    } else if (round === 5 && myScore === compScore) {
      console.log("Tie game!");
    }
  }
}

game();
