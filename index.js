//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the count is clicked
//change the count-el in the html to reflect the new count
let count = 0;
let countEl = document.getElementById("count-el")

//console.log(countEl)
function increment() {
    count = count + 1;
    countEl.innerText = count
}