"use strict";

let user;
let compteur = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let number = getRndInteger(0,100) ;
console.log(`Nombre à trouver : ${number}`) ;

let message = "Veuillez trouver le bon nombre! (entre 0 et 100)";

function startGame(){
    do {
        user = parseInt(prompt(message, 50));    
            if (isNaN(user) || user>100){
                message = "Il faut saisir un chiffre entre 0 et 100, Ouvre tes yeux! ";
            } else if ( user < number) {
                message = "C'est plus que " + user;
            } else {
                message = "C'est moins que " + user;
            }
        compteur++
    } while (isNaN(user) || user != number);
    document.querySelector("#content").innerHTML = `<h1>SURPRISE !</h1><h2>Vous allez être grand-parents !</h2><img src="images/bebe.jpg" />`
}

document.querySelector("#go").addEventListener("click", startGame);


