import { whackAMole, whackEasy } from "./whackAMole.js";
import { score, scoring } from "./Scoring.js";

let whackMedium;
let whackHard;

export function mediumDifficulty() {
  clearInterval(whackEasy);
  whackMedium = setInterval(whackAMole, 850);
  return whackMedium;
}
export function hardDifficulty() {
  clearInterval(whackMedium);
  whackHard = setInterval(whackAMole, 500);
  return whackHard;
}

export function endGame() {
  clearInterval(whackHard);
  for (let i = 0; i < 12; i++) {
    let circle = document.getElementById("circle" + i);
    circle.style.backgroundColor = "white";
    circle.removeEventListener("click", scoring);
  }
  alert("You scored: " + score + " points");
}
