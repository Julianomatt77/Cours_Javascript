"use strict";

let user;
let compteur = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let number = getRndInteger(0,500) ;
console.log(`Nombre à trouver : ${number}`) ;

let message = "Veuillez trouver le juste prix!";

do {
    user = parseInt(prompt(message, 50));    
        if (isNaN(user) || user>500){
            message = "Il faut saisir un chiffre entre 0 et 500, lis un peu! ";
        } else if ( user < number) {
            message = "C'est plus que " + user;
        } else {
            message = "C'est moins que " + user;
        }
    compteur++
} while (isNaN(user) || user != number);

document.querySelector("#content").innerHTML = `<p>Bien joué, c'était bien. Il t'aura fallu ${compteur} essais.</p>`
