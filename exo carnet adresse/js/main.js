"use strict";

/**************
 * ********VARIABLES
 ****************/
 
 const FORM = $("#contact-form");

/**************
 * ********FONCTIONS
 ****************/
function emptyForm(){
//Ciblage et vidage du formulaire
    FORM[0].reset();
}

function showForm(){
    //Affichage du formulaire
    FORM.removeClass("hide").attr("data-mode", "add");
}

function saveUser(event){
    

    //Récupère élément du local storage, si vide alors on transforme contact en tableau
    let contact = extractLocale();
          
    //Récupérer les valeurs saisies par l'utilisateur
    let user = {};
    user.title = $("#title").val();
    user.lastName = $("#lastName").val();
    user.firstName = $("#firstName").val();
    user.phone = $("#phone").val();
    
    //Ajout des données dans le tableau
    if (FORM.data('mode') == "add"){
    contact.push(user);
    } else {
       let index = $('#contact-details a').data('index'); 
       contact[index] = user;           
    }
            
    //Stockage dans le local storage
    enregistrerLocale(contact);

    emptyForm();

    displayList();
    FORM.addClass("hide");

    FORM.attr("data-mode", "add");
}

function enregistrerLocale(datas){
    //Transformation de l'objet en JSON
    let contactJSON = JSON.stringify(datas);

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

    contact.forEach((user, index) => {
    $("#address-book ul").append(`<li><a data-index="${index}"> ${user.firstName} ${user.lastName} ${user.phone}</a>      
    <i data-index="${index}"
     class="fa fa-trash-o"></i></li>`);
    })

/* Boucle for classique :
    let index = 0;
    for (let user of contact) {
    $("#address-book ul").append(
      `<li><a data-index="${index}">${user.lastName} ${user.firstName}</a></li>`
    );
    index++;
  }*/
    
}

function displayDetails(){
    
    //Récupération des données du local storage
    let contact =  extractLocale();

    //Récupérer l'index du contact stocké dans son data-index (dans la balise html)'
    let index = this.dataset.index;
    //Récupération dans le tableau l'objet correspondant à l'index
    let user = contact[index];
    
    //Remplir le tableau aside
    $("#contact-details h3").text(`${displayTitle(user.title)} ${user.firstName} ${user.lastName} `);
    $("#contact-details p").text(` ${user.phone} `);

    //stocke l'index dans la balise "editer le contact"
    $("#contact-details a").data("index", index);
    
    //Afficher le aside
    $("#contact-details").removeClass("hide");
  
}

function editDetails(){
    //Récupération des données du local storage
    let contact =  extractLocale();

    //stocke l'index dans la balise
    let index = $("#contact-details a").data("index");

    //Récupération dans le tableau l'objet correspondant à l'index
    let user = contact[index];
    
    //Pré-remplir le formulaire
    $("#title").val(user.title);
    $("#lastName").val(user.lastName);
    $("#firstName").val(user.firstName);
    $("#phone").val(user.phone);

    //passer le formulaire en mode edition et l'afficher
    FORM.removeClass("hide").attr("data-mode", "edit");

    $("#contact-details").addClass("hide");
}

function displayTitle(title){
    let textTitle = "";
    switch (title) {
        case "1":
            textTitle = "Mme.";
            break;
        case "2":
            textTitle = "Mlle.";
            break;
        case "3":
            textTitle = "Mr.";
            break;
    }
    return textTitle;
}

function deleteAll(){
    enregistrerLocale([]); 
    displayList();   
}

function deleteEntry(){    
    let contact = extractLocale();
    let index = this.dataset.index;

    contact.splice(index,1);
    enregistrerLocale(contact);
    displayList();
}

/**************
 * ********CODE DE BASE
 ****************/
$(document).ready(function () {

    displayList();

    $("#add-contact").on("click", showForm);
    $("#save-contact").on("click", saveUser);

    //gestionnaire d'évènement sur un élément qui sera créer dans le futur par le js
    $("#address-book").on("click","li a", displayDetails);

    //Affichage éditer contact
    $("#contact-details a").on("click", editDetails);

    //Tout supprimer
    $("#clear-address-book").on("click", deleteAll);

    //Suppression d'un contact
    $("#address-book").on("click","li i", deleteEntry);    
})

//storage.removeItem(nomCle);

