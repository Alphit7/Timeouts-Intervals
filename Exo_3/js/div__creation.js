export function divCreation() {
  for (let i = 0; i < 12; i++) {
    let container = document.querySelector(".circles__container");
    let circles = document.createElement("div");
    circles.setAttribute("id", "circle" + i);
    circles.setAttribute("class", "circles");
    container.appendChild(circles);
  }
}
