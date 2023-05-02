export let score = 0;

export function scoring(event) {
  let circle = event.target;
  circle.style.backgroundColor = "white";
  score += 1;
  let scoreBoard = document.querySelector(".score");
  scoreBoard.textContent = "Score: " + score;
  circle.removeEventListener("click", scoring);
}
