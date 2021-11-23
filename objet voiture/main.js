"use strict";

let achat = new Date('2015-07-31');
let dateUS = achat.toLocaleDateString("en-GB", {weekday :'short',month: 'short', day :'2-digit', year : 'numeric'});


let voiture = {
    marque: "Renault Twingo 3",
    annee: 2014,
    achat: dateUS,
    passagers: ["Audrey","Gribouille"],
};

document.querySelector("#content").innerHTML = 
`
<p>Informations sur la voiture:</p>
<ul>
    <li>Marque: ${voiture.marque}</li>
    <li>Année de fabrication: ${voiture.annee}</li>
    <li>Date de l'achat: ${voiture.achat}</li>
    <li>Passagers:
        <ol>
        <li> ${voiture.passagers[0]}</li>
        <li> ${voiture.passagers[1]}</li>
        </ol>
    </li>
</ul>
`