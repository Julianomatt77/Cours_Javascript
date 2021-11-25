"use strict";

let liste = new Array();
let action;
const DIV = document.querySelector("#content");

/******************
 * FONCTIONS
 ****************/

//Création d'une fonction pour ajouter un produit
function addItem(item){
    liste.push(item);
    return liste;
}

//Création d'une fonction pour afficher la liste de course
function affichageListe(item){
    console.table(item);
    console.log(`la liste de courses contient ${item.length} produits`); 
    return;
}

function deleteItem(item){
    let index = liste.indexOf(item)
    
    if (index == -1){
        console.log("Ce produit n'existe pas");
        return
    }

    liste.splice(index, 1);
    return liste;
}

function deleteAll(){

    liste.splice(liste[0],liste.length);   
}

function demandeUser(action){
    do {
        switch(action){
        case("Ajouter"):
            addItem(prompt("Quel produit voulez vous ajouter ?"));
            
            action = prompt("Que voulez vous faire? Ajouter? Supprimer? Finir?", "Ajouter");
    
            break;
        case("Supprimer"):
            deleteItem(prompt("Quel produit voulez-vous supprimer ?"));
            
            action = prompt("Que voulez vous faire? Ajouter? Supprimer? Finir?", "Ajouter");
    
            break;
        case("Finir"):        
            affichageListe(liste);
        }
        
    } while (action != "Finir");
   return; 
}

function demandeAction(action){
    return action
}

/***********************
 * APPEL DES FONCTIONS
 ***********************/

demandeUser(prompt("Que voulez vous faire? Ajouter? Supprimer? Finir?", "Ajouter"));
affichageListe(liste);


/*
do {
    switch(action){
    case("Ajouter"):
        addItem(prompt("Quel produit voulez vous ajouter ?"));
        affichageListe(liste);
        demandeAction(prompt("Que voulez vous faire? Ajouter? Supprimer? Finir?", "Ajouter"));

        break;
    case("Supprimer"):
        deleteItem(prompt("Quel produit voulez-vous supprimer ?"));
        affichageListe(liste);
        demandeAction(prompt("Que voulez vous faire? Ajouter? Supprimer? Finir?", "Ajouter"));

        break;
    default:
        affichageListe(liste);
    }
    
} while (action != "Finir");

*/
 
/*
//Création des premiers éléments de la liste
addItem("fraise");
addItem("clémentine");
addItem("poulet");
addItem("kiwi");

//affichage de la liste de course puis demande à l'utilisateur d'ajouter un produit
affichageListe(liste);
addItem(prompt("Quel produit voulez vous ajouter ?"));
affichageListe(liste);

//Demande de suppression d'un produit
deleteItem(prompt("Quel produit voulez-vous supprimer ?"));
affichageListe(liste);

//Suppression de la liste
deleteAll();
affichageListe(liste);
*/



