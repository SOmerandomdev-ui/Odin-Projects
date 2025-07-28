//Checks if the choice the user gave is rock, paper, or scissor. If it isn't, returns errorand restarts
let cleaned;
let compchoice;
let compnum = Math.random()

do {
let choice = prompt("what is ur major")
cleaned = choice.toLowerCase().trim().replaceAll(' ','')

if (!["rock", "paper", "scissor"].includes(cleaned)) {
    console.log("Error")
 }
} while (!["rock", "paper", "scissor"].includes(cleaned));

//Lets the computer decide what it is going to play
let computerchoice = () => {
    if (compnum <= 0.33) {compchoice = "Rock"}
    else if (compnum <= 0.66) {compchoice = "Paper"}
    else {compchoice = "Scissor"}
    }

computerchoice()


//If the choice is correct, runs this code 


//Make a random number generator that selects the thing that the console chooses 

//compare the two resutls and give a resutl 

//in the backend, log the wins, losses, and ties and make that into an average 
