let score = 0;

for (i = 0; i < 12; i++) {
  let circles = document.createElement("div");
  circles.setAttribute("id", "circle" + i);
  circles.setAttribute("class", "circles");
  document.body.appendChild(circles);
}

function whackAMole() {
  let scoring = (event) => {
    circle.style.backgroundColor = "white";
    score += 1;
    console.log(score);
    circle.removeEventListener("click", scoring);
  };
  // retirer la couleur rouge des cercles inactifs
  for (j = 0; j < 12; j++) {
    let circle = document.getElementById("circle" + j);
    circle.style.backgroundColor = "white";
    circle.removeEventListener("click", scoring);
  }

  // activer un cercle rouge aléatoire
  let x = Math.floor(Math.random() * 11);
  let circle = document.getElementById("circle" + x);
  circle.style.backgroundColor = "red";
  circle.addEventListener("click", scoring);
}

let whackInterval = setInterval(whackAMole, 1000);
