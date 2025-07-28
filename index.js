//Checks if the choice the user gave is rock, paper, or scissor. If it isn't, returns error and restarts
let wins = 0;
let losses = 0; 
let ties = 0;
let count = 0;
let cleaned;
let compchoice;

//Lets the computer decide what it is going to play
let computerchoice = () => {
    let compnum = Math.random()
    if (compnum <= 0.33) {compchoice = "rock"}
    else if (compnum <= 0.66) {compchoice = "paper"}
    else {compchoice = "scissor"}
}

//compare the two results and give a result
do {
    let choice = prompt("Rock, Paper, or Scissors?");
    cleaned = choice.toLowerCase().trim().replaceAll(' ','')
    
    if (!["rock", "paper", "scissor"].includes(cleaned)) {
    console.log("Error");
    continue
 }
    computerchoice();
    
    if (compchoice ==choice ) {
        alert("It is a tie")
        ties ++;
    }
    
    else if (
    (compchoice == "rock" && cleaned == "paper") ||
    (compchoice == "paper" && cleaned == "scissor") ||
    (compchoice == "scissor" && cleaned == "rock" ) 
    ) {
        alert("You won");
            wins ++;
    }
    else {
        alert("you lost");
        losses ++;
    }

    console.log("")
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("ties: " + ties);
    count += 1;
    } while(count <5)



