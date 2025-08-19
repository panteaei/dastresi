// countdown.js
export function initCountdown() {
  let hoursC = document.querySelector(".myCountdown .hours");
  let minutesC = document.querySelector(".myCountdown .minutes");
  let secondsC = document.querySelector(".myCountdown .seconds");

  let targetMiliSeconds = new Date(2025, 7, 19, 10, 0, 0, 0).getTime();

  function updateTime() {
    let todayAllMiliSeconds = new Date().getTime();
    let distance = targetMiliSeconds - todayAllMiliSeconds;
    if (distance > 0) {
      const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(distance / 1000 / 60) % 60;
      const seconds = Math.floor(distance / 1000) % 60;

      hoursC.innerHTML = hours;
      minutesC.innerHTML = minutes;
      secondsC.innerHTML = seconds;
    } else {
      const hours = "00";
      const minutes = "00";
      const seconds = "00";
      hoursC.innerHTML = hours;
      minutesC.innerHTML = minutes;
      secondsC.innerHTML = seconds;
      clearInterval(timer); // stop counting
    }
  }
  setInterval(updateTime, 1000);
}
