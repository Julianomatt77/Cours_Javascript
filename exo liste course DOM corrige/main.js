"use strict"; // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let shoppingList = new Array();
let popup;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function togglePopup() {
  popup.classList.toggle("hide");
}

function getValue(selector, fct) {
  let item = document.querySelector(selector).value.toLowerCase();
  fct(item);
  document.querySelector("form").reset();
}

function addItem(item) {
  // Ajoute le produit spécifié à la liste de courses.
  shoppingList.push(item);
  displayShoppingList();
}

function displayShoppingList() {
  const UL = document.querySelector("ul");
  document.querySelector("h2").textContent =
    "La liste contient " + shoppingList.length + " produit(s)";
  UL.innerHTML = "";
  for (let item of shoppingList) {
    UL.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  }
}

function removeAllItems() {
  // Remplacement de la liste de courses actuelle par une liste vide.
  shoppingList = new Array();
  displayShoppingList();
}

function removeItem(item) {
  console.log(shoppingList);

  // Recherche de l'emplacement (l'indice) du produit spécifié dans la liste de courses.
  let index = shoppingList.indexOf(item);

  // Est-ce que le produit spécifié n'a pas été trouvé ?
  if (index == -1) {
    // Oui, affichage d'une erreur.
    alert("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    // Fin de la fonction removeItem(), il ne faut pas aller plus loin.
    return;
  }

  // Suppression du produit spécifié dans la liste de courses (le tableau diminue de taille).
  shoppingList.splice(index, 1);
  displayShoppingList();
  togglePopup();
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
  popup = document.querySelector("#popup");
  displayShoppingList();

  //gestionnaire d'événement au clic sur le bouton ajouter qui ajoute un item à la liste
  document.querySelector("#submit").addEventListener("click", function () {
    getValue("#toAdd", addItem);
  });

  //gestionnaire d'événement sur le bouton Vider pour supprimer tous les items
  document.querySelector("#delete").addEventListener("click", removeAllItems);

  //gestionnaire d'événement sur le bouton Supprimer 1 aliment qui fait apparaitre la popup
  document.querySelector("#deleteOne").addEventListener("click", togglePopup);

  //gestionnaire d'événement sur la ❌ pour fermer la popup
  document.querySelector("#popup span").addEventListener("click", togglePopup);

  //gestionnaire d'événement au clic sur le bouton supprimer 1 qui supprime un item de la liste
  document.querySelector("#btnDelete").addEventListener("click", function () {
    getValue("#toDelete", removeItem);
  });
});
