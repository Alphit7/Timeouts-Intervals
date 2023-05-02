import { scoring } from "./Scoring.js";

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
