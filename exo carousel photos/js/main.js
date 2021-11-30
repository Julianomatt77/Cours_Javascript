"use strict";
/**************
 * VARIABLES
 ******************/

//Création du tableau avec les images
const slides = [
    {image: "1.jpg",
    legend: "Frères panda"
    },
    {image: "2.jpg",
    legend: "yoga"
    },
    {image: "3.jpg",
    legend: "coucher de soleil"
    },
    {image: "4.jpg",
    legend: "nuit étoilée"
    },
    {image: "5.jpg",
    legend: "tea time"
    },
    {image: "6.jpg",
    legend: "gros dessert"
    }

];

//Sélecteur d'image
let images = document.querySelector("#slider img");
let figCaption = document.querySelector("#slider figcaption");
//Sélecteur icone toolbar
let toolbar = document.querySelector("#toolbar-toggle");
let toolbarIcon = document.querySelector("#toolbar-toggle i");
//Sélecteur icones next
let next = document.querySelector("#slider-next");
let previous = document.querySelector("#slider-previous");
let randomButton = document.querySelector("#slider-random");
let diaporamaButton = document.querySelector("#slider-toggle");
let diaporamaIcon = document.querySelector("#slider-toggle i");

//variable état(objet) qui contient les infos sur l' état du carousel
const state = {
    index: 0,
    timer: null,
};

/*************
 * CODE DE BASE
 *************************************************/
//Déclencle code une fois la page html chargée
document.addEventListener("DOMContentLoaded", function(){

    //Action sur bouton barre d'outil
    toolbar.addEventListener("click", showToolbar);

    refreshSlider();

    next.addEventListener("click", nextImage);
    previous.addEventListener("click", previousImage);
    randomButton.addEventListener("click", randomImage);
    diaporamaButton.addEventListener("click", diaporama);
    
});


