

let currentTime = new Date();

let day = currentTime.getDay();
let month = currentTime.getMonth();
let year = currentTime.getFullYear();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
const time = `${day}/${month}/${year} at ${hour}:${minute}`

document.getElementById("day").innerHTML = time;


const d1 = document.getElementById("dice-1");
const d2 = document.getElementById("dice-2");


const button = document.getElementById("btn");

button.addEventListener('click',roll);

let score = 0;
function roll(){
    const ran1 = Math.round((Math.random())*10);
    if(ran1 >6){
        ran1 -= 4
    }
    const d1Pic = `dice-${ran1}.svg`
    d1.src = d1Pic
    
    const ran2 = Math.round((Math.random())*10);
    if(ran2 >6){
        ran2 -= 4
    }
    const d2Pic = `dice-${ran2}.svg`
    d2.src = d2Pic

    result = ran1 + ran2
    if(result >= 8){
        score = score + 1
    }
    document.getElementById("total").innerHTML = `${score}`;

    
}



