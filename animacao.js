
const resultText = document.getElementById("result-text");
const humanChoiceElement = document.getElementById("human-choice");
const machineChoiceElement = document.getElementById("machine-choice");
const humanScoreElement = document.getElementById("human-score");
const machineScoreElement = document.getElementById("machine-score");
const drawScoreElement = document.getElementById("draw-score");


let humanScore = 0;
let machineScore = 0;
let drawScore = 0;

const emojis = {
    rock: "✊",
    paper: "🖐",
    scissors: "✌️"
};

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    humanChoiceElement.textContent = emojis[human];
    machineChoiceElement.textContent = emojis[machine];

    if (human === machine) {
        drawScore++;
        drawScoreElement.textContent = drawScore;
        resultText.textContent = "Empate!";
    } else if (
        (human === "rock" && machine === "scissors") ||
        (human === "paper" && machine === "rock") ||
        (human === "scissors" && machine === "paper")
    ) {
        humanScore++;
        humanScoreElement.textContent = humanScore;
        resultText.textContent = "Você ganhou!";
    } else {
        machineScore++;
        machineScoreElement.textContent = machineScore;
        resultText.textContent = "Você perdeu!";
    }
};


const resetGame = () => {
    humanScore = 0;
    machineScore = 0;
    drawScore = 0;
    humanScoreElement.textContent = 0;
    machineScoreElement.textContent = 0;
    drawScoreElement.textContent = 0;
    humanChoiceElement.textContent = "-";
    machineChoiceElement.textContent = "-";
    resultText.textContent = "Faça sua escolha!";
};

document.getElementById("rock").addEventListener("click", () => playTheGame("rock", playMachine()));
document.getElementById("paper").addEventListener("click", () => playTheGame("paper", playMachine()));
document.getElementById("scissors").addEventListener("click", () => playTheGame("scissors", playMachine()));
document.getElementById("reset").addEventListener("click", resetGame);