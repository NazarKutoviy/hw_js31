let totalMinutes = 60;
function updateTimer1() {
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 6;
  document.getElementById("timer1").textContent = `${hours}h ${minutes}m`;
  if (totalMinutes === 30) {
    alert("Залишилось менше половини часу!");
  }
  if (totalMinutes > 0) {
    totalMinutes--;
    setTimeout(updateTimer1, 60000); 
  }
}
updateTimer1();

let totalMilliseconds = 3000;
function updateTimer2() {
  let seconds = Math.floor(totalMilliseconds / 1000);
  let milliseconds = totalMilliseconds % 1000;
  document.getElementById(
    "timer2"
  ).textContent = `${seconds}.${milliseconds} s`;
  if (
    totalMilliseconds <= 10000 &&
    document.getElementById("animation").style.display === "none"
  ) {
    document.getElementById("animation").style.display = "block";
    document.getElementById("animation").style.animation =
      "blinking 1s infinite";
  }

  if (totalMilliseconds > 0) {
    totalMilliseconds -= 10;
    setTimeout(updateTimer2, 10);
  } else {
    document.getElementById("restartButton").disabled = false;
    document.getElementById("animation").style.display = "none";
  }
}
updateTimer2();