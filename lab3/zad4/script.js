"use strict";

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const handle = document.getElementById("handle");
const reset = document.getElementById("reset");

let isOn = false;
let count = 0;

function updateCounter(value) {
  count = value;
  counter.innerText = value;
}

function incrementEvent() {
  updateCounter(count + 1);
}

handle.addEventListener("click", () => {
  isOn = !isOn;

  if (isOn) {
    increment.addEventListener("click", incrementEvent);
  } else {
    increment.removeEventListener("click", incrementEvent);
    updateCounter(0);
  }
});

reset.addEventListener("click", () => { updateCounter(0) });
