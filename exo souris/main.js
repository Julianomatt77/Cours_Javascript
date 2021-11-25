"use strict";
let rectangle = document.querySelector("main .rectangle");

function displayHide(){ 
    rectangle.classList.toggle("hide");
};

function colorOnHover(){
    rectangle.classList.add("important");
}

function colorOnClick(){
    rectangle.classList.add("good");
}

function colorOut(){
    rectangle.classList.remove("important", "good");
}

document.querySelector("#toggle-rectangle").addEventListener("click", displayHide);
document.querySelector(".rectangle").addEventListener("dblclick", colorOnClick);
document.querySelector(".rectangle").addEventListener("mouseover", colorOnHover);
document.querySelector(".rectangle").addEventListener("mouseout", colorOut);