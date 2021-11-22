"use strict";
let today = new Date ();
let options = {weekday :'long', month: 'long', day :'2-digit', year : 'numeric'}

document.querySelector("#content").innerHTML = `<p>Nous sommes le ${today.toLocaleDateString("fr-FR", options)}.</p>`;