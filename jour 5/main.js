"use strict";

/*********
 * Interval
 *************/

let seconds = 1;

function nextSecond(){
    seconds++;
}


let idInterval = setInterval(nextSecond, 1000);
clearInterval(idInterval);

setTimeout(function (){
    clearInterval(idInterval)
},10000);

setTimeout (() => clearInterval(idInterval), 1000)

clearTimeout