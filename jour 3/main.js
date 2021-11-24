"use strict";

/***********************
definition de la fonction
*************************/

//fonction simple
function direCoucou(){
    console.log("coucou");
}

//Fonction avec paramètres
function isEven(nb){
    let result = nb % 2;
    if (result ==1) {
        console.log(nb + " est impair");
    } else {
        console.log(nb + " est pair");
    }
}

//Fonction avec parametres et return
function whatReste(nb, diviseur){
    let reste = nb % diviseur;
    return reste;
}

/*
//Fonction locale (Aucun intérêt)
let uneFonction = function (){
    console.log("ok");
}*/

//fonction fléchée (ex: dans react ou DOM)
let maFonction = () => {
    console.log("fonction fléchée");
};

/***************************
 * *********Code principal
 **************************/

//appel de la fonction
isEven(38);
isEven(999);

let result = whatReste (568, 57);
console.log(result);
//alert("567 / 57 = "+ result);

const numbers = [2, 6, 7, 13, 57, 99, 914, 1125];

numbers.forEach((nb) => isEven(nb));

for (let i=0; i < numbers.length; i++){
    isEven(numbers[i]);
}