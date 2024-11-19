/*calculating the arbitrage percentage // if Arbitrage < 100 is a profit
if Arbitrage => 100 no profit n' Arbitrage > 100 its a loss*/

let firstTeamOdds = document.getElementById("first_tmodds");
let secondTeamOdds = document.getElementById("second_tmodds");

function arbitrageRate(){
    Arbirate = ((1 / firstTeamOdds) + (1 / secondTeamOdds)) * 100;
    return;
    console.log(Arbirate)
}

arbitrageRate()







let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//console.log(countEl)
function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let saveDig = count + " - "
    saveEl.textContent += saveDig
    countEl.textContent = 0
    count = 0
}











let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//console.log(countEl)
function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let saveDig = count + " - "
    saveEl.textContent += saveDig
    countEl.textContent = 0
    count = 0
}







let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//console.log(countEl)
function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let saveDig = count + " - "
    saveEl.textContent += saveDig
    countEl.textContent = 0
    count = 0
}




let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//console.log(countEl)
function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let saveDig = count + " - "
    saveEl.textContent += saveDig
    countEl.textContent = 0
    count = 0
}





