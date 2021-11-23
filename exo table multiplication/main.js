"use strict";
let tableMult = [[],[]];
let line = [];
let column = [];
let nbre = 5;

for (let i=0; i<nbre; i++){
    column[i] = i+1;
    line[i] = i+1;
}
console.table(column);
console.table(line);

for (let i=0; i<nbre; i++){
    for (let j=0; j<nbre; j++){
        tableMult[i][j] = [column[i], line[j]];
    }
}


console.table(tableMult);

