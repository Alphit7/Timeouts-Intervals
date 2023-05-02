import { scoring, score } from "./Scoring.js";
import { hardDifficulty, mediumDifficulty, endGame } from "./difficulty.js";

export let whackEasy;

export function whackAMole() {
  // retirer la couleur rouge des cercles inactifs
  for (let i = 0; i < 12; i++) {
    let circle = document.getElementById("circle" + i);
    circle.style.backgroundColor = "white";
    circle.removeEventListener("click", scoring);
  }

  // activer un cercle rouge aléatoire
  let i = Math.floor(Math.random() * 11);
  let circle = document.getElementById("circle" + i);
  circle.style.backgroundColor = "red";
  circle.addEventListener("click", scoring);
}
let startButton = document.querySelector(".start__button");
startButton.addEventListener("click", start);

function start() {
  whackEasy = setInterval(whackAMole, 1000);
  setTimeout(mediumDifficulty, 25000);
  setTimeout(hardDifficulty, 45000);
  setTimeout(endGame, 60000);
}
