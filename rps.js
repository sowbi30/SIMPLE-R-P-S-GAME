// Create a rock paper game:
let game = ["rock", "paper", "scissors"];
let player = game[Math.floor(Math.random() * game.length)];
let computer = game[Math.floor(Math.random() * game.length)];
let result =
  player === computer
    ? "Tie"
    : player === "rock" && computer === "scissors"
    ? "Player wins"
    : player === "rock" && computer === "paper"
    ? "Computer wins"
    : player === "paper" && computer === "rock"
    ? "Player wins"
    : player === "paper" && computer === "scissors"
    ? "Computer wins"
    : player === "scissors" && computer === "rock"
    ? "Computer wins"
    : player === "scissors" && computer === "paper"
    ? "Player wins"
    : "Not a tie";
console.log(`Player chose: ${player}`);
console.log(`Computer chose: ${computer}`);
console.log(`Result: ${result}`);

