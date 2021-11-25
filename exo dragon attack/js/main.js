"use strict";

let game = new Object();
let dragonDamagePoint;
let playerDamagePoint;

const DIV = document.querySelector("#game");

function displayHideWinner(){
    let article = document.querySelector("#game article");
    //méthode manuelle
    /*if (article.classList.contains("hide")){
       article.classList.remove("hide");
    } else {
        article.classList.add("hide");
    }*/
    
    //méthode auto
    article.classList.toggle("hide");
}

document.querySelector("#go").addEventListener("click", startGame);

document.querySelector("#toggleWinner").addEventListener("click", displayHideWinner);

//Ajouter Difficulté
/*
let difficultyMax = 3;
for (let i=1; i<=difficultyMax; i++){
    difficulty[i-1] = i;
}
console.table(difficulty);*/

