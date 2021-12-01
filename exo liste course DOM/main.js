"use strict"; // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let shoppingList = new Array();

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function addItem (produit){
  shoppingList.push(produit);
  displayList();
}

function getValue(selector, val){
  let item = document.querySelector(selector).value.toLowerCase();
  val(item);  
  document.querySelector("form").reset();
}

function displayList (){
  const UL = document.querySelector("ul");
  document.querySelector("h2").textContent = `La liste contient ${shoppingList.length} produits`;

  UL.innerHTML = "";  

  for (let item of shoppingList){
  UL.insertAdjacentHTML("beforeend",`<li>${item}</li>`)
  }
}

function deleteList(){
  shoppingList = new Array();
  displayList();
}

function deleteOne(item){
  
  let index = shoppingList.indexOf(item);

  if (index == -1){
    alert(`Erreur ${item} n'éxiste pas dans la liste`);

    return;
  }

  shoppingList.splice(index,1);
  displayList();
  togglePopUp();
}

function togglePopUp (){
  document.querySelector("#popup").classList.toggle("hide");
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
  
  displayList();

  document.querySelector("#submit").addEventListener("click", function(){
    getValue("#toAdd", addItem)
  });

  document.querySelector("#delete").addEventListener("click", deleteList);

  document.querySelector("#deleteOne").addEventListener("click", togglePopUp);

  document.querySelector("#popup span").addEventListener("click", togglePopUp);

  document.querySelector("#btnDelete").addEventListener("click", function(){
    getValue("#toDelete", deleteOne)
  });

});
