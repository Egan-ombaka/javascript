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