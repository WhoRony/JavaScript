const textEl = document.getElementById("text");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");
const progressEl = document.getElementById("progress");
const mistakesEl = document.getElementById("mistakes");
const charsEl = document.getElementById("chars");
const sound = document.getElementById("keySound");

const paragraph =
  "Typing fast requires practice focus patience and consistency. Improve your speed by typing daily.";

let time = 60;
let timer;
let started = false;

function loadText() {
  textEl.innerHTML = "";
  paragraph.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    textEl.appendChild(span);
  });

  inputEl.disabled = false;
  inputEl.focus();
}

function startTimer() {
  timer = setInterval(() => {
    time--;
    timeEl.innerText = time;

    if (time === 0) {
      clearInterval(timer);
      inputEl.disabled = true;
    }
  }, 1000);
}

inputEl.addEventListener("input", () => {
  if (!started) {
    startTimer();
    started = true;
  }

  sound.currentTime = 0;
  sound.play();

  const chars = textEl.querySelectorAll("span");
  const inputChars = inputEl.value.split("");

  let correct = 0;
  let mistakes = 0;

  chars.forEach((char, index) => {
    if (inputChars[index] == null) {
      char.classList.remove("correct", "incorrect");
    } else if (inputChars[index] === char.innerText) {
      char.classList.add("correct");
      char.classList.remove("incorrect");
      correct++;
    } else {
      char.classList.add("incorrect");
      char.classList.remove("correct");
      mistakes++;
    }
  });

  mistakesEl.innerText = mistakes;
  charsEl.innerText = inputChars.length;

  progressEl.style.width =
    (inputChars.length / chars.length) * 100 + "%";

  const minutes = (60 - time) / 60;
  const words = inputChars.length / 5;
  wpmEl.innerText = Math.round(words / minutes || 0);

  accuracyEl.innerText =
    Math.round((correct / inputChars.length) * 100 || 0);
});

restartBtn.addEventListener("click", () => {
  clearInterval(timer);
  time = 60;
  started = false;
  inputEl.value = "";
  timeEl.innerText = time;
  wpmEl.innerText = 0;
  accuracyEl.innerText = 0;
  mistakesEl.innerText = 0;
  charsEl.innerText = 0;
  progressEl.style.width = "0%";
  loadText();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(timer);
  } else if (started) {
    startTimer();
  }
});

loadText();
