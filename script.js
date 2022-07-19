window.addEventListener("load", start);
let wins = 0;
let loss = 0;

function start(){
    var imagenes = document.getElementsByClassName("imagen");
    document.getElementById("restart").addEventListener("click", restart, false);
    for (var i=0;i<imagenes.length;i++){
        let computerSelection = computerPlay();
        imagenes[i].addEventListener("click", playRound, false)
    }
}

function end(){
    var imagenes = document.getElementsByClassName("imagen");
    for (var i=0;i<imagenes.length;i++){
        let computerSelection = computerPlay();
        imagenes[i].removeEventListener("click", playRound, false)
    }
}


function playRound() {
    let playerSelection = this.id;
    let computerSelection = computerPlay();
    let score = document.getElementById("score");
    document.getElementById("test").innerHTML = playerSelection + "   "+computerSelection;
    if((playerSelection == "rock" && computerSelection == "paper")||(playerSelection == "paper" && computerSelection == "scissors")|| (playerSelection == "scissors" && computerSelection == "rock")){
        loss++;
        score.innerHTML = "You lose!!<br> Wins:"+wins+"<br>Losses: "+loss;
    } else if(playerSelection == computerSelection){
        score.innerHTML = "You tied!!<br> Wins:"+wins+"<br>Losses: "+loss;
    } else{
        wins++;
        score.innerHTML = "You win!!<br> Wins:"+wins+"<br>Losses: "+loss;
    }
    if(wins==5){
        document.getElementById("final").innerHTML = "YOU WON!!!!";
        end();
    } else if(loss == 5){
        document.getElementById("final").innerHTML = "YOU LOST!!!!";
        end();
    }
  }

  function restart(){
    wins = 0;
    loss = 0;
    document.getElementById("score").innerHTML = "";
    document.getElementById("test").innerHTML = "";
    document.getElementById("final").innerHTML = "";
    start();
  }
/*
function game(){
    const opt = ["rock", "paper", "scissors"];
    let playerSelection = "";
    for(let i=0;i<5;i++){
        while(true){
            //playerSelection = prompt("type rock, paper or scissors");
            if(playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors"){
                break;
            }
        }
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Wins: "+wins+".  Losses: "+loss);
    }
}
*/
function computerPlay(){
    const opt = ["rock", "paper", "scissors"];
    var pick = Math.floor(Math.random()*3);
    return opt[pick];
}
