"use strict";

/**************
 * ********VARIABLES
 ****************/
 
 

/**************
 * ********FONCTIONS
 ****************/
function emptyForm(){
//Ciblage et vidage du formulaire
    $("#contact-form")[0].reset();
}

function showForm(){
    //Affichage du formulaire
    $("#contact-form").removeClass("hide");
}

function saveUser(event){
    
    //Récupère élément du local storage, si vide alors on transforme contact en tableau
    let contact = extractLocale();
          
    //Récupérer les valeurs saisies par l'utilisateur
    let user = {};
    user.title = $("#title option:selected").text();
    user.lastName = $("#lastName").val();
    user.firstName = $("#firstName").val();
    user.phone = $("#phone").val();
    
    //Ajout des données dans le tableau
    contact.push(user);  
            
    //Stockage dans le local storage
    enregistrerLocale(contact);

    emptyForm();

    displayList();
}

function enregistrerLocale(item){
    //Transformation de l'objet en JSON
    let contactJSON = JSON.stringify(item);

    //Stockage du JSON dans le local storage
    localStorage.setItem("username", contactJSON);
}

function extractLocale(){   
    //Récupère élément du local storage, si vide alors on transforme contact en tableau 
    let datas = JSON.parse(localStorage.getItem("username"));
    if (datas === null) datas = [];
    return datas;
}


function displayList(){
    
    let contact = extractLocale();

    $("#address-book").html(`<ul>`);


    for (let user of contact){
        $("#address-book ul").append(`<li>${user.firstName} ${user.lastName} ${user.phone}</li>`);
    }
}

function deployUser(){
    $("#contact-details").removeClass("hide");
    
}

/**************
 * ********CODE DE BASE
 ****************/
$(document).ready(function () {

    displayList();

    $("#add-contact").on("click", showForm);
    $("#save-contact").on("click", saveUser);


    $("#address-book ul li").on("click", deployUser);

    
    //localStorage. clear();
})

