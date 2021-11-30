"use strict";

/*********
 * Jquery
 *************/

/*********
 * VARIABLES
 ***********/
let list = [];

/*********
 * FONCTIONS
 ***********/

//Générer des li pour chaque élément présent dans la liste
function displayList(){
    //cible la ul
    const UL = $("ul");
    //vide le tableau car sinon rajoute tout le tableau à chaque élément ajouté .empty juste pour jquery, pour vanilla js: inner.HTML("")
    UL.empty();
    //Pour chaque élément dans le tableau liste ça génère une li injectée avant la fermeture de la ul
    for (let item of list){       
        UL.append(`<li>${item}</li>`); //Append ajoute un élément html à la fin //prepend = afterbegin (ajoute avant le contenu)
    }

    $(".display").removeClass("hide"); //enlève class hide de la div
}

/*******Récupérer la valeur saisie dans le formulaire
 * @param {event} event automatique récuperée car fonction appelée via eventlistenet
 */
function handleForm(event){ //event recupere toutes les infos de l'évènement
    event.preventDefault(); //annule l'action par défaut de l'évènement (par ex pour les formulaires annule le refresh après le submit)

    //Récupérer la valeur saisie par l'utilisateur
    let user = $("input[type= 'text']").val().trim(); 

    //.val récupère valeur de l'élément 
    //.trim enlève les espaces vide au début et à la fin du string 
    //si () renvoie une valeur, mais si quelque chose dans les () ça injecte une valeure
    //vanilla JS : let user = document.querySelector("input[type= 'text']").value.trim();

    //Ajouter la saisie à la liste
    list.push(user);
    
    $("form")[0].reset(); // Vide le formulaire ici "form" n'est pas la balise html mais un tableau, [0] pour cibler le form qui est à l'index 0.

    //Appel la fonction
    displayList();
}

/*********
 * CODE PRINCIPAL
 ***********/
$(document).ready(function () {
    $("form").on("submit", handleForm);
})

/* Vanilla:
document.addEventListener("DOMcontentLoaded", function(){
    //code qui s'éxécute que quand la page html a fini de charger (Obligatoire avec wordpress par exemple)

})*/