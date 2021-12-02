"use strict";

function fetchAPI() {
  let item = document.querySelector("#firstname").value.trim();

  fetch(`https://api.agify.io/?name=${item}`)
    .then((Response) => Response.json())
    .then((datas) => displayHtml(datas))
    .catch((error) => alert("erreur : " + error));
}

function displayHtml(item) {
  document.querySelector("article").classList.remove("hide");
  document.querySelector(
    "article h2"
  ).innerHTML = `D'après Agify, avec le prénom ${item.name}, tu as ${item.age} ans.`;

  document.querySelector("article p strong").innerHTML = `${item.count}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#submit").addEventListener("click", fetchAPI);
});
