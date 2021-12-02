"use strict";
/*********
 * FONCTIONS
 ***********/

//Affiche du html dans #target @param {string} htmlDatas
//fonction success
function displayHTML(htmlDatas) {
  $("#target").html(htmlDatas);

  if (typeof htmlDatas == "object") {
    $("#target").html(`<ul></ul>`);
    htmlDatas.forEach((element) => {
      $("#target ul").append(`<li>
            <strong> Prénom : ${element.firstName} </strong><br> <i>Téléphone : ${element.phone}</i>
            </li>`);
    });
  }
}

function displayJSON(jsonDatas) {
  $("#target").html(`<ul class="movie-list"></ul>`);
  jsonDatas.forEach((element) => {
    $("#target ul").append(`<li>
        <img src="images/${element.cover}">
        <p>
        <strong>${element.title} </strong> -  <em>${element.duration}</em></p></li>`);
  });
}

//Gestion du choix utilisateur
function onClickExecute() {
  //récupérer la valeur de l'input coché
  let value = $("input:checked").val();

  //en fonction de cette valeur, gérer les différents appels AJAX
  switch (value) {
    case "1":
      $.get("data/1-get-html-article.html", displayHTML);
      break;

    case "2":
      $.getJSON("data/2-get-contacts-list.json", displayHTML);
      break;

    case "3":
      $.get("data/3-get-html-movies.html", displayHTML);
      break;

    case "4":
      $.getJSON("data/4-get-json-movies.json", displayJSON);
      break;
  }
}
/*********
 * CODE PRINCIPAL
 ***********/
$(document).ready(function () {
  $("#run").on("click", onClickExecute);
});
