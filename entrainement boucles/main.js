"use strict";

let toto = {
    prenom: "Toto",
    age: "12 ans",
};
let lucette = {
    prenom: "Lucette",
    age: "14 ans",
}
let antoinette = {
    prenom: "Antoinette",
    age: "13 ans",
}
let gribouille = {
    prenom: "Gribouille",
    age: "13 ans",
}

let persos = [toto, lucette, antoinette, gribouille];

//boucle while
let i = 0;
while ( i< persos.length){
    console.log(`Prénom : ${persos[i].prenom} | ${persos[i].age}`);
    i++;
}

//Boucle for
for (let i=0; i<persos.length; i++){
    console.log(`Prénom : ${persos[i].prenom} | ${persos[i].age}`);
}

//Boucle for...of
//let i= 0;
for (let line of persos){
    console.log(line);
};

//boucle for each
persos.forEach(function(line, i) {
    console.log(line);
    i++
})

//boucle for each Fonction fléché
persos.forEach((line, i) => {console.log(line);;
i++})