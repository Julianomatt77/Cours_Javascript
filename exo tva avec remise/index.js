"use strict";
let TAUX_TVA;
let montantHT;
let montantTVA;
let montantTTC;
let montantRemise;

//demande de saisie du montant HT
montantHT = parseFloat(prompt("Quel est le montant HT?", 100).replace(",", "."));

//demande de saisie du pourcentage de remise
let remise = prompt("Avez vous une remise?","oui");
if(remise == "oui" || remise == "yes"){
    montantRemise = parseFloat(prompt("Quel est le taux de la remise en % ?",10));        
} else {
    montantRemise = 0;
}

//Calcul de la remise
montantHT = montantHT - (montantHT * (montantRemise/100));

//calcul de la TVA et du prix TTC
montantTVA = montantHT* (parseFloat(prompt("Quel est le taux de la TVA en % ?",20))/100);
montantTTC = montantHT + montantTVA;

document.querySelector("#content").innerHTML = `<p>Pour un montant HT de ${montantHT}€, il y a ${montantTVA}€ de TVA.</p>
<p>Le montant TTC est donc de ${montantTTC} €. </p>`;

//Affichage du résultat
if(montantRemise == 0){
    document.querySelector("#content").innerHTML += `
    <p>Aucune remise n'a été appliquée</p>`;
} else {
    document.querySelector("#content").innerHTML += `
    <p>Une remise de  ${montantRemise}% a été appliquée sur le montant HT</p>`;
}


