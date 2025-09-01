// countdown.js
export default function initCountdown() {
  let hoursC = document.querySelector(".myCountdown .hours");
  let minutesC = document.querySelector(".myCountdown .minutes");
  let secondsC = document.querySelector(".myCountdown .seconds");

  let targetMiliSeconds = new Date(2025, 9, 2, 10, 0, 0, 0).getTime();
// اضافه کردن صفر بع قبل اعداد تک رقمی برای زیبایی 
  function pad(n) {
    return n.toString().padStart(2, "0");
  }
  function updateTime() {
    let todayAllMiliSeconds = new Date().getTime();
    let distance = targetMiliSeconds - todayAllMiliSeconds;
    if (distance > 0) {
      const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(distance / 1000 / 60) % 60;
      const seconds = Math.floor(distance / 1000) % 60;

      hoursC.innerHTML = pad(hours);
      minutesC.innerHTML = pad(minutes);
      secondsC.innerHTML = pad(seconds);
    } else {
      const hours = "00";
      const minutes = "00";
      const seconds = "00";
      hoursC.innerHTML = hours;
      minutesC.innerHTML = minutes;
      secondsC.innerHTML = seconds;
      clearInterval(updateTime); // stop counting
    }
  }
  updateTime(); // run once immediately
  setInterval(updateTime, 1000);
}
