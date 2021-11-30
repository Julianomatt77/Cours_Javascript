"use strict";

//Choix aléatoire d'un nombre entier
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}

//Fonction pour afficher/cacher la toolbar
function showToolbar(){
    document.querySelector(".toolbar ul").classList.toggle("hide");

    //changement de l'icone
    toolbarIcon.classList.toggle("fa-arrow-right");
    toolbarIcon.classList.toggle("fa-arrow-down");

};

//Fonction changer image
function refreshSlider(){
    images.src = `images/${slides[state.index].image}`
    //images.setAttribute("src", `images/${slides[0].image}`);
    figCaption.textContent = `${slides[state.index].legend}`
};

//Fonction previous image
function nextImage(){
    state.index++;
    if (state.index > slides.length-1){
        state.index = 0;
    }
    refreshSlider();
}

//Fonction next image
function previousImage(){
    state.index--;
    if (state.index < 0){
        state.index = slides.length-1;
    }
    refreshSlider();
}

//Fonction image aléatoire
function randomImage(){
    let number = getRndInteger(0, slides.length-1);
        while (number == state.index){
            number = getRndInteger(0, slides.length-1);
        }
        state.index = number;
    refreshSlider();
}

//fonction diaporama
function diaporama(){

    //changement de l'icone
    diaporamaIcon.classList.toggle("fa-play");
    diaporamaIcon.classList.toggle("fa-stop");

    
    if(state.timer == null){
    state.timer = setInterval(nextImage, 2000);
    this.title = "Arrêter le carousel";
    } else { 
        clearInterval(state.timer);
        state.timer = null;
        this.title = "Démarrer le carousel";
    }
}

