//html elemnets

let status = document.querySelector(".status");

let reset = document.querySelector(".reset");

let gameCells =document.querySelectorAll(".game-cell");

console.log(gameCells);

//game variables

let gameIsLive = true;

let xIsNext = true;

let winner = null;


function handleWin(letter){
    gameIsLive = false;
    winner = letter;
    if(winner ==="x"){
        status.innerHTML = `${winner} has won!`;
    }else{
        status.innerHTML = `<span>${winner} has won!<span>`;
    }
    
}

//check-game-status

function checkGameStatus(){
    let topLeft = gameCells[0].classList[2];
    let topMiddle= gameCells[1].classList[2];
    let topRight = gameCells[2].classList[2];
    let middleLeft = gameCells[3].classList[2];
    let middleMiddle = gameCells[4].classList[2];
    let middleRight = gameCells[5].classList[2];
    let bottomLeft = gameCells[6].classList[2];
    let bottomMiddle = gameCells[7].classList[2];
    let bottomRight = gameCells[8].classList[2];

    if(topLeft && topLeft === topMiddle && topLeft===topRight ){
        handleWin(topLeft);
    } else if(middleLeft && middleLeft === middleMiddle && middleLeft===middleRight ){
        handleWin(middleLeft);
    } else if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft===bottomRight ){
        handleWin(bottomLeft);
    } else if(topLeft && topLeft === middleLeft && topLeft===bottomLeft ){
        handleWin(topLeft);
    } else if(topMiddle && topMiddle === middleMiddle && topMiddle===bottomMiddle ){
        handleWin(topMiddle);
    } else if(topRight && topRight === middleRight && topRight===bottomRight ){
        handleWin(topRight);
    } else if(topLeft && topLeft === middleMiddle && topLeft===bottomRight ){
        handleWin(topLeft);
    } else if(topRight && topRight === middleMiddle && topRight===bottomLeft ){
        handleWin(topRight);
    } else if(topLeft && topLeft === topMiddle && topLeft===topRight ){
        handleWin(topLeft);
    } else if( topLeft && topMiddle && topRight &&middleLeft &&middleMiddle &&middleRight &&bottomLeft &&bottomMiddle &&bottomRight){
        gameIsLive = false;
        status.innerHTML = "Its a Tie!"  
    } else {
        xIsNext= !xIsNext;
        if(xIsNext){
            status.innerHTML = `x is next`
        } else{
            status.innerHTML = `<span>o is next<span>`
        }
    }


}




//event handler

function handleReset(e){
    console.log(e);

}


function handleCell(e){
    let classList = e.target.classList
   let location = classList[1];

   if(!gameIsLive || classList[2] === "x"|| classList[2]==="o"){
       return;
   }

   if(xIsNext){
      e.target.classList.add("x");
      checkGameStatus();
   }else{
    e.target.classList.add("o");
      checkGameStatus();
   }
}


//event listener

reset.addEventListener("click" , handleReset);

gameCells.forEach((gameCell)=>{
    gameCell.addEventListener("click" , handleCell);
}

)