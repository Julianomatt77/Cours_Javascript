"use strict";

/*********
 * AJAX
 *************/

/*********
 * FONCTIONS
 ***********/

//Affiche du html dans #target @param {string} htmlDatas
//fonction success
function displayHTML(htmlDatas){
    $("#target").html(htmlDatas);
}

//Gestion du choix utilisateur
function onClickExecute() {
    console.log("ok");
    //récupérer la valeur de l'input coché

    //en fonction de cette valeur, gérer les différents appels AJAX
    $.GET("data/1-get-html-article.html", displayHTML)
}


/*********
 * CODE PRINCIPAL
 ***********/
$(document).ready(function(){
    $("#run").on("click", onClickExecute);

})
