const PlayerChoiceDisplay = document.getElementById("PlayerChoiceDisplay");
const ComputerChoiceDisplay = document.getElementById("ComputerChoiceDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");
let possibleChoices = document.querySelectorAll("button");


possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener("click", (e) => {
    PlayerChoice = e.target.id
    PlayerChoiceDisplay.innerHTML = PlayerChoice
    generateComputerChoice()
    getResult()
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*(2 + 1));
    (randomNumber < 1 ? 
        computerChoice = "paper 📜" : 
        (randomNumber === 1 ? 
        computerChoice = "rock 🧱" : 
        computerChoice = "scissors ✂"));
    ComputerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () => {
    if (PlayerChoice === "paper 📜") {
        switch(computerChoice) {
            case "rock 🧱":
                ResultDisplay.innerHTML = "You Win!";
                break;
            case "scissors ✂":
                ResultDisplay.innerHTML = "You Lose!";
                break;
            default:
                ResultDisplay.innerHTML = "Its a Draw!";
        }
    }
    if (PlayerChoice === "rock 🧱") {
        switch(computerChoice) {
            case "scissors ✂":
                ResultDisplay.innerHTML = "You Win!";
                break;
            case "paper 📜":
                ResultDisplay.innerHTML = "You Lose!";
                break;
            default:
                ResultDisplay.innerHTML = "Its a Draw!";
        }
    }
    if (PlayerChoice === "scissors ✂") {
        switch(computerChoice) {
            case "paper 📜":
                ResultDisplay.innerHTML = "You Win!";
                break;
            case "rock 🧱":
                ResultDisplay.innerHTML = "You Lose!";
                break;
            default:
                ResultDisplay.innerHTML = "Its a Draw!";
        }
    }
}