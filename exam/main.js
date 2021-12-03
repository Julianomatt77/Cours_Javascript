//MARTIN Julien

"use strict";

/*******************
 *  VARIABLES *
 *******************/
//Création de ma liste de plats
let meals = [
  "Lasagnes",
  "Steak",
  "Crêpes",
  "Lentilles",
  "Couscous",
  "Pizza",
  "Courgettes",
  "Fondue",
  "Saumon",
  "Poisson grillé",
];

let DIV = document.querySelector("#meals");

/*******************
 *  FUNCTIONS *
 *******************/

//Création d'une fonction pour l'affichages html de la liste de plats
function displayHTML() {
  //Affichage du nombres de plats dans le menu
  DIV.innerHTML = `<h3>Il y a ${meals.length} plats au menu :</h3>`;

  //Création de la liste html
  DIV.innerHTML += `<ul></ul>`;

  //Boucle pour l'affichage de chaque plat de la liste
  meals.forEach((element) => {
    document
      .querySelector("#meals ul")
      .insertAdjacentHTML("beforeend", `<li>${element}</li>`);
  });
}

//Fonction permettant de transformer la 1ère lettre d'une chaine de caractères en majuscule, et les autres lettres en minuscule
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

//Fonction récupérant la valeur saisie par l'utilisateur
function getValue() {
  //Récupération de la valeur saisi dans le formulaire et suppression des espaces vides
  let userInput = document.querySelector("#prompt").value.trim();

  //Transformation de la valeur saisi avec la 1ère lettre en majuscule et le reste en minuscule afin d'avoir le même format que les valeurs tu tableau meals et les comparer indifféremment de la manière dont l'utilisateur l'a saisi.
  userInput = capitalizeFirstLetter(userInput);

  //Définition d'une variable permettant de chercher si la valeure saisie correspond à une valeur dans le tableau et à quel index
  let index = meals.indexOf(userInput);

  // Est-ce que le plat spécifié est unique et non nul ?
  if (index == -1 && userInput != "") {
    //non: appel de la fonction pour ajouter le plat
    addItem(userInput);
  } else if (index != -1 && userInput != "") {
    //plat non unique : déjà présent dans le menu
    alert(`Erreur ${userInput} est déjà dans le menu`);
  } else {
    //Saisi vide
    alert("Erreur! veuillez indiquer un plat à ajouter");
  }

  //Effacement du champ input après saisi
  document.querySelector("form").reset();
}

//Fonction permettant de rajouter un plat à la liste
function addItem(item) {
  // Ajoute le produit spécifié au menu.
  meals.push(item);

  //Averti l'utilisateur de l'ajout d'un plat
  alert(`${item} a été rajouté au menu`);

  //Affichage du menu mis à jour
  displayHTML();
}

/*******************
 * CODE PRINCIPAL *
 *******************/
document.addEventListener("DOMContentLoaded", function () {
  //Affichage de la liste de base
  displayHTML();

  //gestionnaire d'événement au clic sur le bouton ajouter qui ajoute un item à la liste
  document.querySelector("#submit").addEventListener("click", getValue);
});
