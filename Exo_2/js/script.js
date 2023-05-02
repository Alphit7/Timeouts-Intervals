let minutes = 0;
let seconds = 0;
function timer() {
  if (minutes == 0) {
    document.body.textContent = seconds;
  } else if (minutes == 1) {
    document.body.textContent = minutes + " minute has passed " + seconds;
  } else if (minutes > 1) {
    document.body.textContent = minutes + " minutes have passed " + seconds;
  }
  seconds++;
  if (seconds == 59) {
    seconds = 0;
    minutes++;
  }
}
setInterval(timer, 1000);
