"use strict";

//déclaration de la variable
//le nom ne doit pas commencer par un chiffre, ne contient pas d'espace ni de caract spéciaux excepté (_), doit être en anglais
let maVariable; 

//affectation de la variable
maVariable = "33.50";
maVariable = parseFloat(maVariable);

console.log("maVariable parseFloat=", maVariable, "type=", typeof maVariable); //typeof pour connaitre le type de ma variable
maVariable = parseInt(maVariable);
console.log("maVariable parseInt=", maVariable, "type=", typeof maVariable); //typeof pour connaitre le type de ma variable

let autreVar = false;
console.log("autreVar=", autreVar, "type=", typeof autreVar)

//constante
const MA_CONSTANTE = "valeur"; //valeur obligatoire, const en majuscule séparé par des _ est une convention

//Calculs
let nb = 2;
nb = nb + 2;
console.log("nb=", nb);

let mot = "choses"
let chaine = nb + mot;
console.log("ma chaine de caractère vaut :" + chaine);

//template string depuis ES6
//Utiliser les anti-quotes (alt Gr + 7)
//variables entourés de ${}
console.log(`Je fais une concaténation entre ${nb} et ${mot}, ce qui donne : ${chaine}`);

/*
//saisie utilisateur
let user = prompt("message à afficher");
user = parseInt(user)
console.log(user, typeof user);

window.alert
window.confirm*/

console.clear();

/***************************
    CALCULATEUR DE TVA
**************************/

const TAUX_TVA = 20;

let montantHT; 
let montantTVA;
let montantTTC;

//affectation de valeur
montantHT = 100;

//calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//calcul montant TTC
montantTTC = montantHT + montantTVA;
console.log(`Pour un montant HT de ${montantHT}€, nous payons un TTC de ${montantTTC}€. Le montant de la TVA est donc de ${montantTVA}€`);

console.clear();
//tableaux

let weekDays = new Array();
weekDays[0] = "Dimanche";
weekDays[1] = "Lundi";
weekDays[2] = "Mardi";
weekDays[3] = "Mercredi";
weekDays[4] = "jeudi";
weekDays[5] = "Vendredi";
weekDays[6] = "Samedi";

console.table(weekDays);

weekDays = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "jeudi",
    "Vendredi",
    "Samedi"
]
console.table(weekDays);

//crée un objet date à la date du jour
let today = new Date();

//Récupérer le jour de la semaine en cours
let dayIndex = today.getDay();
console.log(weekDays[dayIndex]);