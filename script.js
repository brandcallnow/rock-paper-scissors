//JavaScript behind Rock-Paper-Scissors Game I Made... Enjoy!
//-
function computerSelection() //Function for computer selection
{
    const choices = ['r', 's', 'p'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

const paper = document.querySelector(".Paper");//selects the paper class from the html
const rock = document.querySelector(".Rock");//selects the rock class from the html
const scissors = document.querySelector(".Scissors");//selects the scissors class from the html

scissors.addEventListener("click", function() {
    playRound('s', computerSelection())
}); //If the Scissors is clicked it chooses that as the player selection
paper.addEventListener("click", function() {
    playRound('p', computerSelection())
});//If the Paper is clicked it chooses that as the player selection
rock.addEventListener("click", function() {
    playRound('r', computerSelection())
});//If the Rock is clicked it chooses that as the player selection

const pscore = document.getElementById("playerScore")
var plscore = 0;
var cocore = 0;
var draws = 0;
function win(p) {
    pscore.innerHTML = p;
}
const cscore = document.getElementById("computerScore")
function lose(c) {
    cscore.innerHTML = c;
}

const result = document.getElementById("test");
function displayResults(str) {
    result.innerHTML = str;
}

function playRound(P, CPU) { 
    
    switch (P + CPU) {
        case 'rs':
        case 'sp':
        case 'pr':
        displayResults("You Won");
        win(++plscore);
        break;
        case 'sr':
        case 'ps':
        case 'rp':
        displayResults("You Lost");
        lose(++cocore);
        break;
        case 'rr':
        case 'pp':
        case 'ss':
        displayResults("It's a draw");
        
    }

    
} 


