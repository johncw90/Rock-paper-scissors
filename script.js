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

let getHumanChoice = () => {
  let humanPrompt = prompt("Rock, paper or scissors?");
  let humanChoice = humanPrompt.toLowerCase();
  return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

let playGame = () => {
  let playRound = (humanChoice, computerChoice) => {
    let roundMsg;
    console.log("You chose" + " " + humanChoice);
    console.log("Computer chose" + " " + computerChoice);
    // console.log(`you lose ${humanSelection} + beats + ${computerSelection}`);
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
    console.log(roundMsg);
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  };

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (i === 5 && humanScore > computerScore) {
      console.log("You win the game!");
    } else if (i === 5 && computerScore > humanScore) {
      console.log("Computer won the game!");
    } else if (i === 5 && computerScore === humanScore) {
      console.log("No winner!");
    }
  }
};
