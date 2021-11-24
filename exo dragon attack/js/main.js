"use strict";

let game = new Object();
let dragonDamagePoint;
let playerDamagePoint;

const DIV = document.querySelector("#game");

console.log(game);
initializeGame();
startGame();
gameLoop();
showGameWinner();


//Ajouter Difficulté
/*
let difficultyMax = 3;
for (let i=1; i<=difficultyMax; i++){
    difficulty[i-1] = i;
}
console.table(difficulty);*/

