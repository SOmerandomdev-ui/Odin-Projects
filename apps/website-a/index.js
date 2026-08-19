//Checks if the choice the user gave is rock, paper, or scissor. If it isn't, returns error and restarts
let wins = 0;
let ties = 0 
let losses = 0
let compchoice;
let number = 0;

//Lets the computer decide what it is going to play
let computerchoice = () => {
let compnum = Math.random()
    if (compnum <= 0.33) {compchoice = "rock"}
    else if (compnum <= 0.66) {compchoice = "paper"}
    else {compchoice = "scissors"}
}


let score = (stats) => {
    const status = document.querySelector(".Status")
    status.textContent = "You " + stats;
    status.style.backgroundColor = "rgb(206, 199, 199)";
    status.style.fontSize = "40px";
    status.style.paddingTop = "20px";
    const choices = document.querySelector(".choices")
    
    const win = document.querySelector(".R")
    win.textContent = "Wins: " + wins

    const loss = document.querySelector(".P")
    loss.textContent = "losses: " + losses

    const tie = document.querySelector(".S")
    tie.textContent = "ties: " + ties

    
}
//compare the two results and give a result
const run = (choice) => {
    
    computerchoice();
    
    if (compchoice == choice ) {
        ties += 1;
        score("tied")
        
    
    }
    
    else if (
    (compchoice == "rock" && choice == "paper") ||
    (compchoice == "paper" && choice == "scissors") ||
    (compchoice == "scissors" && choice == "rock" ) 
    ) {
        score("won");
        wins += 1;
        const won = document.querySelector(".score")
        number += 1;
        
    }
    else {
        losses += 1;
        score("lost");
        
        
    }
} 

//DOM for the selection 
const choice = ["rock", "paper", "scissors"];

choice.forEach(choice => {
    const button = document.querySelector(`.${choice.charAt(0).toUpperCase() + choice.slice(1)} img`);
    button.addEventListener("click", () => run(choice));
});






