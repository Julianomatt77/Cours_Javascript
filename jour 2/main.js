"use strict";

let age = 15;
console.log(age>=18);
if(age>=18){
    console.log("La personne est majeure");
} else {
    console.log("La personne est mineure");
}

if(true){
    //
} else if (false){
    //
} else {
    //
}

//comparaison de valeur
console.log("égalité ? : 21 est égal à 21 ?", "21" == 21);
console.log("différence? : 21 est différent de 21 ?", "21" != 21);

//comparaison de valeur
console.log("égalité ? : 21 est égal à 21 ?", "21" === 21);
console.log("égalité ? : 21 est différent de 21 ?", "21" !== 21);

//comparaison sup/inf
console.log(12>12);
console.log(12>=12);
console.log(10<12);
console.log(15<=12);

let meteo = "nuage"; //soleil nuage, pluie, brouillard
let temperature = 15; //chaud a aprtir de 20
if(meteo == "soleil" && temperature >= 20){
    console.log("Allons à la plage");
} else if (meteo == "nuage" || meteo == "brouillard" || (meteo == "soleil" && temperature < 20)){
    console.log("On va en ville");
} else {
    console.log("Restons à la maison");
}

// OU = ||
// ET == &&

/********
 * Switch case
 * Comparaison === en valeur et en type
 */

switch (meteo) {
    case "soleil":
        if (temperature>=20){
        console.log("on va à la plage");
        } else {
            console.log("on va en ville");
        }
        break;
    case "nuage":
    case "brouillard":
        console.log("on va en ville");
        break;
    default:
        console.log("on reste à la maison");
}

/********
 * While
 */

//demande à l'utilisateur de saisir un nbre tant que ce nombre n'est pas supérieur à 100
/*
let nb = prompt("Entrez un nombre supérieur à 100");

while(nb<100){
    nb = prompt("Entrez un nombre supérieur à 100");
}

//DO....WHILE -> faire au moins une fois l'éxécution du code dans la boucle

let nb2;
do{
    nb2 = prompt("Entrez un nombre inférieur à 100");
} while (nb2>=100);
*/
/****************
 * Boucles
 */
console.clear;
 let table = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "jeudi",
    "Vendredi",
    "Samedi"
]

//While
console.log("----While-------");
let index=0;
while (index <table.length) {
    console.log(table[index]);
    index++;
}

//FOR
console.log("----FOR-------");
for (let i = 0; i < table.length; i++){
    console.log(table[i])
}

//FOR....OF
console.log("----FOR.....OF-------");
for (let ligne of table) {
    console.log(ligne);
}

//FOR....EACH
console.log("----FOREACH-------");
table.forEach(function(ligne, index){
    console.log(ligne);
});

table.forEach((ligne, index) => console.log(ligne));
