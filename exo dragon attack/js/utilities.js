"use strict";

//Choix aléatoire d'un nombre entier
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)  + min);
}

//On demande à l'utilisateur de choisir les parametres de début de jeu
function requestInteger(message, min, max) {
    let choix;    
    do {
      
      choix = parseInt(prompt(message, 1));
    } while (isNaN(choix) == true || choix < min || choix > max);  
    return choix;
  }

//Initialisation du jeu
function initializeGame(){
    game.difficulty = requestInteger(`Difficulté? \n 1.facile - 2.Normal - 3.Difficile`,1 ,3);
    //Définition des pts de vie en fonction du niveau
    switch (game.difficulty) {
        case game.difficulty = 1:
            game.playerLife = getRndInteger(200,250);
            game.dragonLife = getRndInteger(150,200);        
            break;
        
        case game.difficulty = 2:
            game.playerLife = getRndInteger(200,250);
            game.dragonLife = getRndInteger(200,250);
            break;

        case game.difficulty = 3:
            game.playerLife = getRndInteger(150,200);
            game.dragonLife = getRndInteger(200,250);      
            break;
    }

    game.sword = requestInteger(`Sword ? \n 1.Bois - 2.Acier - 3.Excalibur`,1 ,3);

    //Augmentation des degats en fonction de l'épée
    switch (game.sword) {
        case game.sword = 1:
            game.playerDamageRatio = 0.5;                
            break;
        
        case game.sword = 2:
            game.playerDamageRatio = 1;        
            break;

        case game.sword = 3:
            game.playerDamageRatio = 1.5;
            break;
    }

    game.armor = requestInteger(`Armor ? \n 1.Cuivre - 2.Fer - 3.Magique`,1 ,3);

    //Réduction des dégats en fonction de l'armure
    switch (game.armor) {
        case game.armor = 1:
            game.dragonDamageRatio = 1;                
            break;
        
        case game.armor = 2:
            game.dragonDamageRatio = 0.75;        
            break;

        case game.armor = 3:
            game.dragonDamageRatio = 0.5;
            break;
    }
    game.round = 1;
    displayHp();
}

//Définition des points de dégat du dragon(avec bonus/malus)
function computeDragonDamagePoint(){
    if (game.difficulty = 1){
        dragonDamagePoint = getRndInteger(10,20);
    } else {
        dragonDamagePoint = getRndInteger(20,30);
    }

    dragonDamagePoint = Math.round(dragonDamagePoint * game.dragonDamageRatio); //math.round pour arrondir les dégats
    return dragonDamagePoint;
}

//Définition des points de dégats du joueur (avec bonus/malus)
function computePlayerDamagePoint(){
    
    switch (game.difficulty) {
        case game.difficulty = 1:
            playerDamagePoint = getRndInteger(25,30);       
            break;
        
        case game.difficulty = 2:
            playerDamagePoint = getRndInteger(15,20);
            break;

        case game.difficulty = 3:
            playerDamagePoint = getRndInteger(5,10);     
            break;
    }
    playerDamagePoint = Math.round(playerDamagePoint * game.playerDamageRatio); //math.round pour arrondir les dégats
    return playerDamagePoint;
}

//Définition du tout par tour
function gameLoop(){
    let playerSpeed;
    let dragonSpeed;
    let damagePoint;

    //Le jeu a lieu tant que les 2 sont en vie
    while (game.playerLife > 0 && game.dragonLife > 0){

        DIV.innerHTML += `<h3>----Tour de jeu N°${game.round}----</h3>`;

        //Détermination du + rapide        
        playerSpeed = getRndInteger(10,20);
        dragonSpeed = getRndInteger(10,20);


        //le + rapide attaque
        if (playerSpeed > dragonSpeed){
            damagePoint = computePlayerDamagePoint();
            game.dragonLife -=  damagePoint;
            if (game.dragonLife < 0) game.dragonLife = 0;
            DIV.innerHTML += `<p>Vous êtes plus rapide et frappez le dragon, vous lui enlevez ${damagePoint} PV</p>`;
        } else {
            damagePoint = computeDragonDamagePoint();
            game.playerLife -= damagePoint;
            if (game.playerLife < 0) game.playerLife = 0;
            DIV.innerHTML += `<p>Le dragon est plus rapide que vous et vous brûle, il vous enlève ${damagePoint} PV</p>`;
        }
                       
        displayHp();        
        game.round++;
    }
}

//Affichage du vainqueur
function showGameWinner(){
    DIV.innerHTML = "<article></article>" + DIV.innerHTML;
    const WINNER = document.querySelector("#game article");
    if (game.dragonLife <= 0){
        
        WINNER.innerHTML += `<img src='img/knight.png'><p>Félicitation vous avez gagné !</p><p>Il vous restait ${game.playerLife} PV</p>`;
    } else {
        
        WINNER.innerHTML += `<img src='img/dragon.png'><p>Désolé vous avez perdu, le dragon vous a défoncé !</p><p>Il lui restait ${game.dragonLife} PV</p>`;
    }
}

function displayHp(){
    DIV.innerHTML += `<table>
        <thead>
          <tr>
            <th>Personnage</th>
            <th>PV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>Chevalier</td>
              <td>${game.playerLife}</td>
          </tr>
          <tr>
            <td>Dragon</td>
            <td>${game.dragonLife}</td>
          </tr>
        </tbody>
      </table>`;  
}

//Définition du début du jeu
function startGame(){
    initializeGame();
    gameLoop();
    showGameWinner();  
}