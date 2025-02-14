const hrs = document.getElementById("hours");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (hrs < 12) {
    hrs = hrs - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hrs.innerText = h;
  mins.innerText = m;
  secs.innerText = s;

  ampm, (innerText = ampm);
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

