"use strict";

let external = document.getElementById("external");
let middle = document.getElementById("middle");
let internal = document.getElementById("internal");

let middleActive = true;
let internalActive = true;
let propagation = true;

let score = 0;

function incScore(value, color) {
  score += value;

  if (score > 30 && middleActive) {
    middle.removeEventListener("click", handle);
    middle.style.background = "#c7c7c7";
    middleActive = false;
  }

  if (score > 50 && internalActive) {
    internal.removeEventListener("click", handle);
    internal.style.background = "#949494";
    internalActive = false;
  }

  document.getElementById("score").innerText = score;
  document.getElementById("info").innerText = "nacisnąłeś " + color + " o wartości " + value;
}

function handle(event) {
  switch (this.id) {
    case "external":
      incScore(1, "niebieski");
    break;
    case "middle":
      incScore(2, "czerwony");
    break;
    case "internal":
      incScore(5, "żółty");
    break;
  }

  if (!propagation) {
    event.stopPropagation();
  }
}

external.addEventListener("click", handle);
middle.addEventListener("click", handle);
internal.addEventListener("click", handle);

document.getElementById("reset").addEventListener("click", function () {
  score = 0;
  middleActive = true;
  internalActive = true;

  middle.style.background = "#da2d2d";
  internal.style.background = "#f7f72d";

  middle.addEventListener("click", handle);
  internal.addEventListener("click", handle);

  document.getElementById("score").innerText = score;
  document.getElementById("info").innerText = "";
});

document.getElementById("propagation").addEventListener("click", function () {
  propagation = !propagation;
  this.innerText = "Propagation: " + propagation;
  if (propagation) {
    this.style.background = "#56ff55";
  } else {
    this.style.background = "#ff6363";
  }
  
});

