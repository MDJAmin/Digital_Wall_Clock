"use strict"

const numberHours = document.querySelector(".number-hours")
const barSeconds = document.querySelector(".bar-second")

const numberElement = [];
const barElement = [];

for(let i = 1; i <=12; i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.
    join(""));

    
for (let i = 1; i <= 60; i++) {
    barElement.push(
      `<span style="--index:${i};"><p></p></span>`
      );
  }
  
  barSeconds.insertAdjacentHTML("afterbegin",barElement.
  join(""));