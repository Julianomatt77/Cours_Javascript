"use strict";
/*******************
 * VARIABLES
 *******************/
const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button:not(#export)");

//Bonus1:
const popup = document.querySelector("#popup");

/*******************
 * FONCTIONS
 *******************/

function generateHTML(){
    let ID = this.id

    //le HTML à générer est différent pour le HR, on fait donc une condition

    if (ID==hr){
        content.insertAdjacentHTML("beforeend", `<hr>`);
    } else {
        content.insertAdjacentHTML("beforeend", `<${ID} contenteditable='true'>${this.dataset.placeholder}</${ID}>`
        ) ;//On modifie la fonction de génération du HTML en se servant de la valeur du @Les data-attributs placeholder afin de modifier ce qui apparait
    }
}

/**
 * Récupère le HTML généré et l'affiche dans la popup sous la forme de texte prêt à être copié collé
 */

function exportHTML() {
    const HTML = content.innerHTML.replace(/ contenteditable="true"/g, "");
    const DIV = document.createElement("div");
    DIV.textContent = HTML;
    popup.innerHTML = "";
    popup.appendChild(DIV);
    popup.classList.remove("hide");
}

function closePopup(){
    popup.classList.add("hide");
}

/*******************
 * CODE PRINCIPAL
 *******************/

//Cible tous les boutons qui permettent de générer une balise et on leur installe un gestionnaire d'événement
buttons.forEach((button) => button.addEventListener("click",generateHTML));

//Cible le bouton qui l'id export et installe un gestionnaire d'événement
document.querySelector("#export").addEventListener("click",exportHTML);

//Cacher la popup au double clic
popup.addEventListener("dblclick",closePopup)


