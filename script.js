let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNum) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
};

let humanScore = 0;
let computerScore = 0;

let resultDiv = document.querySelector(".result");
let playerDiv = document.querySelector(".playerDiv");
let computerDiv = document.querySelector(".computerDiv");
let playerScoreDiv = document.querySelector(".playerScore");
let computerScoreDiv = document.querySelector(".computerScore");
let winnerMessage = document.querySelector(".winnerMessage");

let playGame = () => {
  let computerChoice = getComputerChoice();
  let playRound = (humanChoice, computerChoice) => {
    let roundMsg;
    if (humanChoice === computerChoice) {
      roundMsg = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      roundMsg = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      roundMsg = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore = humanScore + 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      roundMsg = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore = humanScore + 1;
    } else {
      roundMsg = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore = computerScore + 1;
    }
    playerDiv.textContent = `You chose ${humanChoice}`;
    computerDiv.textContent = `Computer chose ${computerChoice}`;
    resultDiv.textContent = roundMsg;
    playerScoreDiv.textContent = `Your score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
  };

  getComputerChoice();
  playRound(humanChoice, computerChoice);

  if (humanScore === 5) {
    winnerMessage.textContent = "You win the game!";
  } else if (computerScore === 5) {
    winnerMessage.textContent = "Computer wins the game!";
  }
};

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resetBtn = document.querySelector(".reset");

rockBtn.addEventListener("click", function () {
  humanChoice = "rock";
  playGame();
});
paperBtn.addEventListener("click", function () {
  humanChoice = "paper";
  playGame();
});
scissorsBtn.addEventListener("click", function () {
  humanChoice = "scissors";
  playGame();
});

resetBtn.addEventListener("click", function () {
  playerDiv.textContent = "";
  computerDiv.textContent = "";
  resultDiv.textContent = "";
  playerScoreDiv.textContent = "";
  computerScoreDiv.textContent = "";
  humanScore = 0;
  computerScore = 0;
});
