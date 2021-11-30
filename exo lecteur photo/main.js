"use strict";
/*******************
 *  Variables
 ************************/
let image = document.querySelectorAll(".photo-list li");
let selectAll = document.querySelector("#selectAll");
let deselectAll = document.querySelector("#deselectAll");


/***************
 * Fonctions
 ******************/
 function onClickListItem(){
    this.classList.toggle("selected");
    countImage();            
}

function countImage(){
    let selectedPhotos = document.querySelectorAll(".photo-list li.selected");
    document.querySelector("#total em").textContent = selectedPhotos.length;
}

/***********
 * Code de base 
 ********************/

for (let i=0; i<image.length; i++){

    //On sélectionne une image
    image[i].addEventListener("click",onClickListItem);

    //On sélectionne toutes les images
    selectAll.addEventListener("click",
        function selectAllImages(){

            image[i].classList.add("selected");
            countImage();        
        }
    );

    //On déselectionne toutes les images
    deselectAll.addEventListener("click",
        function deselectAllImages(){

            image[i].classList.remove("selected");
            countImage();            
        }
    );
}
