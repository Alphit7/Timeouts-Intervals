export function divCreation() {
  for (let i = 0; i < 12; i++) {
    let circles = document.createElement("div");
    circles.setAttribute("id", "circle" + i);
    circles.setAttribute("class", "circles");
    document.body.appendChild(circles);
  }
}
