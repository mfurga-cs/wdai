"use strict";

let balloon = document.getElementById("balloon");
let boom = document.getElementById("boom");

function grow() {
  let currentSize = window.getComputedStyle(balloon, null).getPropertyValue("font-size");
  currentSize = parseInt(currentSize);
  currentSize *= 1.1;

  if (currentSize > 800) {
    boom.style.display = "block";
    balloon.style.display = "none";
    return;
  }

  balloon.style.fontSize = currentSize + "px";
}

function shrink() {
  let currentSize = window.getComputedStyle(balloon, null).getPropertyValue("font-size");
  currentSize = parseInt(currentSize);

  if (currentSize <= 50) {
    return;
  }

  currentSize *= 0.9;
  balloon.style.fontSize = currentSize + "px";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    grow();
  }
  if (event.key === "ArrowDown") {
    shrink();
  }
});

balloon.addEventListener("contextmenu", function (event) {
  if (!event.ctrlKey) {
    return;
  }

  event.preventDefault();

  if (balloon.style.display === "none") {
    return;
  }

  let currentSize = window.getComputedStyle(balloon, null).getPropertyValue("font-size");

  let menu = document.createElement("div")
  menu.id = "menu"
  menu.style = `top: ${event.pageY - 10}px;left: ${event.pageX - 10}px`
  menu.onmouseleave = () => menu.outerHTML = ''
  menu.innerText = "Wilkość balonika: " + currentSize;

  document.body.appendChild(menu)
});

