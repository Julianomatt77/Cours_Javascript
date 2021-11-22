"use strict";
const TAUX_TVA = 20;

let montantHT;
let montantTVA;
let montantTTC;

montantHT = prompt("Quel est le montant HT?", 100);
montantHT = parseFloat(montantHT);
console.log(montantHT);

montantTVA = montantHT*(TAUX_TVA/100);
console.log(montantTVA);
montantTTC = montantHT + montantTVA;
console.log(montantTTC);

document.querySelector("#content").innerHTML = `<p>Pour un montant HT de ${montantHT}€, nous payons un TTC de ${montantTTC}€. Le montant de la TVA est donc de ${montantTVA}€</p>`;
