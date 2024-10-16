"use strict";

setInterval(getCurrentTime, 1000);

const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i};"><p></p></span>`);
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurrentTime() {
  let date = new Date();
  let CurrentHours = date.getHours();
  let CurrentMinutes = date.getMinutes();
  let Currentseconds = date.getSeconds();

  handHours.style.transform = `rotate(${
    CurrentHours * 30 + CurrentMinutes / 2
  }deg)`;
  handMinutes.style.transform = `rotate(${CurrentMinutes * 6}deg)`;
  handSeconds.style.transform = `rotate(${Currentseconds * 6}deg)`;
}
getCurrentTime();
