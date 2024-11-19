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