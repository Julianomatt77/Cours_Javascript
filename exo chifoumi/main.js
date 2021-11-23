"use strict";

let user;
let userIndex
let computer;
let computerIndex;
let choix = ["pierre", "feuille", "ciseau"];
let resultat;
let affichageResultat;

console.table(choix);


//Utilisateur choisit
user = prompt("Choisir pierre, feuille ou ciseau", "pierre");
//conversion en minuscule
user = user.toLowerCase();

//Choix aléatoire pour le pc
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
computerIndex = getRandomInt(3);

//Conversion du choix du pc en string
computer = choix[computerIndex]

//Conversion du choix user en index
if(user == "pierre"){
    userIndex = 0;
} else if (user == "feuille") {
    userIndex = 1;
} else if (user == "ciseau"){
    userIndex = 2;
} else {
    user = prompt("Mauvaise valeure, veuillez choisir pierre, feuille ou ciseau", "pierre");
}
console.log(user, userIndex);
console.log(computer, computerIndex);

//Définir le vainqueur
if (userIndex == computerIndex){
    resultat = "égalité";   
} else if((userIndex == 0 && computerIndex == 1) ||
(userIndex == 1 && computerIndex == 2) || (userIndex == 2 && computerIndex == 0)) {
    resultat = "perdu";
}else{
    resultat = "gagné";    
}
console.log(resultat);

//Définir le texte du résultat
switch(resultat){
    case "perdu":
        if (userIndex == 0 && computerIndex == 1){
            affichageResultat = "La feuille recouvre la pierre";
        } else if (userIndex == 1 && computerIndex == 2){            
            affichageResultat = "La feuille est découpée par le ciseau";
        } else {
            affichageResultat = "Le ciseau est écrasé par la pierre";
        }       
        break;
    case "gagné" :
        if (userIndex == 1 && computerIndex == 0){
            affichageResultat = "La feuille recouvre la pierre";
        } else if (userIndex == 2 && computerIndex == 1){
            affichageResultat = "Le ciseau est écrasé par la pierre";
        } else {
            affichageResultat = "La feuille est découpée par le ciseau";
        }       
        break;
    default :
    affichageResultat = "C'est une égalité";
}


//Affichage du résultat
if (resultat == "gagné"){
    document.querySelector("#content").innerHTML = `
    <p>Vous :<img src="img/${user}.png" />               L'ordinateur<img src="img/${computer}.png" /></p>
    <p>${affichageResultat}  : c'est ${resultat}</p>`
} else if (resultat == "perdu"){
    document.querySelector("#content").innerHTML = `<p>Vous :<img src="img/${user}.png" />                L'ordinateur<img src="img/${computer}.png" /></p>
    <p>${affichageResultat}  : c'est ${resultat}</p>`
} else {
    document.querySelector("#content").innerHTML = `<p>Vous :<img src="img/${user}.png" />L'ordinateur<img src="img/${computer}.png" /></p>
    <p>${affichageResultat}</p>`
}

