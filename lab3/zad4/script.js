"use strict";

let isOn = false;
let count = 0;

function updateCounter(value) {
  count = value;
  document.getElementById("counter").innerText = count;
}

document.getElementById("increment").addEventListener("click", function (event) {
  if (isOn) {
    updateCounter(count + 1);
  }
});

document.getElementById("handle").addEventListener("click", function (event) {
  updateCounter(0);
  isOn = !isOn;
});

