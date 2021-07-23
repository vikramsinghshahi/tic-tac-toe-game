//html elemnets

let status = document.querySelector(".status");

let reset = document.querySelector(".reset");

let gameCells =document.querySelectorAll(".game-cell");

let gameBanner= document.querySelector(".game-banner");

console.log(gameBanner);

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
    gameBanner.classList.add("display-banner");

    gameBanner.innerHTML = "Game Over!"
     
    for(let gameCell of gameCells){
        gameCell.classList.add("cursor");
    }
    // gameCells.classList.add("cursor");
    
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
        gameCells[0].classList.add("win");
        gameCells[1].classList.add("win");
        gameCells[2].classList.add("win");
        
    } else if(middleLeft && middleLeft === middleMiddle && middleLeft===middleRight ){
        handleWin(middleLeft);
        gameCells[3].classList.add("win");
        gameCells[4].classList.add("win");
        gameCells[5].classList.add("win");

    } else if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft===bottomRight ){
        handleWin(bottomLeft);
        gameCells[6].classList.add("win");
        gameCells[7].classList.add("win");
        gameCells[8].classList.add("win");

    } else if(topLeft && topLeft === middleLeft && topLeft===bottomLeft ){
        handleWin(topLeft);
        gameCells[0].classList.add("win");
        gameCells[3].classList.add("win");
        gameCells[6].classList.add("win");
        
    } else if(topMiddle && topMiddle === middleMiddle && topMiddle===bottomMiddle ){
        handleWin(topMiddle);
        gameCells[1].classList.add("win");
        gameCells[4].classList.add("win");
        gameCells[7].classList.add("win");

    } else if(topRight && topRight === middleRight && topRight===bottomRight ){
        handleWin(topRight);
        gameCells[2].classList.add("win");
        gameCells[5].classList.add("win");
        gameCells[8].classList.add("win");

    } else if(topLeft && topLeft === middleMiddle && topLeft===bottomRight ){
        handleWin(topLeft);
        gameCells[0].classList.add("win");
        gameCells[4].classList.add("win");
        gameCells[8].classList.add("win");

    } else if(topRight && topRight === middleMiddle && topRight===bottomLeft ){
        handleWin(topRight);
        gameCells[2].classList.add("win");
        gameCells[4].classList.add("win");
        gameCells[6].classList.add("win");

    } else if( topLeft && topMiddle && topRight &&middleLeft &&middleMiddle &&middleRight &&bottomLeft &&bottomMiddle &&bottomRight){
        gameIsLive = false;
        status.innerHTML = "Its a Tie!"  

        gameBanner.classList.add("display-banner");

         gameBanner.innerHTML = "Its Tie!"

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

function handleReset(){
    xIsNext = true;
    status.innerHTML = `x is next`;
    winner = null;
    for( let gameCell of gameCells){
        gameCell.classList.remove("x");
        gameCell.classList.remove("o");
        gameCell.classList.remove("win");
        gameCell.classList.remove("cursor");

    }
    gameBanner.classList.remove("display-banner")
     gameBanner.innerHTML = "";
    gameIsLive = true;

}


function handleCell(e){
    let classList = e.target.classList
//    let location = classList[1];

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

