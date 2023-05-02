let wilsonArray = ["W", "i", "l", "s", "o", "n", "-", "2"];
let letter = 0;
function Wilson() {
  if (letter < 8) {
    document.write(wilsonArray[letter]);
    letter++;
  } else {
    clearInterval;
  }
}
setInterval(Wilson, 1000);
