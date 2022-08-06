/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = [
    '<i class="bi bi-suit-heart-fill"></i>',
    '<i class="bi bi-suit-club-fill"></i>',
    '<i class="bi bi-suit-diamond-fill"></i>',
    '<i class="bi bi-suit-spade-fill"></i>'
  ];
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  const randomGenerate = arr => arr[Math.floor(Math.random() * arr.length)];

  function generateCard() {
    let randomPalo = randomGenerate(palos);
    let randomNum = randomGenerate(numeros);
    // Reemplazar Numero
    let changeNumber = document.querySelector(".number");
    changeNumber.innerHTML = randomNum;
    // Reemplazar Palo y asignar Color
    let changePalo = document.querySelectorAll(".palo");
    changePalo.forEach(item => {
      item.innerHTML = randomPalo;
      if (
        randomPalo === '<i class="bi bi-suit-heart-fill"></i>' ||
        randomPalo === '<i class="bi bi-suit-diamond-fill"></i>'
      ) {
        (item.style.color = "red") && (changeNumber.style.color = "red");
      } else {
        (item.style.color = "black") && (changeNumber.style.color = "black");
      }
    });
  }
  document.querySelector("#randomCardButton").onclick = function() {
    generateCard();
  };
  // Intervalo de 10s
  setInterval(() => {
    generateCard();
  }, 10000);
};
