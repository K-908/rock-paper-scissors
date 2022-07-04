window.addEventListener("load", game);
let wins = 0;
let loss = 0;

function playRound(playerSelection, computerSelection) {
    if((playerSelection == "rock" && computerSelection == "paper")||(playerSelection == "paper" && computerSelection == "scissors")|| (playerSelection == "scissors" && computerSelection == "rock")){
        loss++;
        return "You lose!";
    } else if(playerSelection == computerSelection){
        return "You tied!";
    } else{
        wins++;
        return "You win!!";
    }
  }

function game(){
    const opt = ["rock", "paper", "scissors"];
    let playerSelection = "";
    for(let i=0;i<5;i++){
        while(true){
            playerSelection = prompt("type rock, paper or scissors");
            if(playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors"){
                break;
            }
        }
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Wins: "+wins+". Losses: "+loss);
    }
}

function computerPlay(){
    const opt = ["rock", "paper", "scissors"];
    var pick = Math.floor(Math.random()*3);
    return opt[pick];
}
