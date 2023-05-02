import { scoring, score } from "./Scoring.js";
import { hardDifficulty, mediumDifficulty, endGame } from "./difficulty.js";

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

export let whackEasy = setInterval(whackAMole, 1000);
setTimeout(mediumDifficulty, 60000);
setTimeout(hardDifficulty, 90000);
setTimeout(endGame, 120000);
