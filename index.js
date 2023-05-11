const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const millisecondEl = document.getElementById("milliseconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ms = now.getMilliseconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  ms = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms; // format milliseconds with leading zeros

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  millisecondEl.innerText = ms;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1); // update every millisecond
}

updateClock();
