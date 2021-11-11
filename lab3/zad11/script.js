"use strict";

const POINTS_MISSED_SHOT = -6;
const POINTS_PER_ZOOMBIE = 12;
const ZOOMBIE_POS_MAX_HEIGHT = 250;
const ZOOMBIE_POS_MIN_HEIFGT = 0;
const ZOOMBIE_MAX_SIZE = 4;
const ZOOMBIE_MIN_SIZE = 1;
const ZOOMBIE_MIN_SPEED = 1;
const ZOOMBIE_MAX_SPEED = 5;
const ZOOMBIE_MAX_PASSED = 3;

let interval;
let stop = false;

const board = document.getElementById("board");
const crosshair = document.getElementById("crosshair");
const score = document.getElementById("score");
const passed = document.getElementById("passed");
const game_over = document.getElementById("game_over");

let current_score = 0;
let passed_zoombie = 0;

function updateScore(points) {
  if (stop) {
    return;
  }
  current_score += points;
  if (current_score >= 0) {
    score.innerText = current_score.toString().padStart(5, "0");
  } else {
     score.innerText = "-" + (-1 * current_score).toString().padStart(5, "0");
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateZoombie() {
  const div = document.createElement("div");
  div.classList.add("zoombie");

  const speed = random(ZOOMBIE_MIN_SPEED, ZOOMBIE_MAX_SPEED);
  div.style.animationDuration = "0.5s, " + speed + "s";

  const position = random(ZOOMBIE_POS_MIN_HEIFGT, ZOOMBIE_POS_MAX_HEIGHT);
  div.style.bottom = position + "px";
  div.style.zIndex = ZOOMBIE_POS_MAX_HEIGHT - position;

  const scale = 1 + random(ZOOMBIE_MIN_SIZE, ZOOMBIE_MAX_SIZE) / 10;
  div.style.transform = "scale(" + scale + ")";

  div.addEventListener("mousedown", function(event) {
    if (event.which == 1) {
      this.remove();
      updateScore(POINTS_PER_ZOOMBIE);
      event.stopPropagation();
    }
  })

  div.addEventListener("animationend", function() {
    this.remove();
    passed_zoombie++;
    passed.innerText = passed_zoombie.toString();

    if (passed_zoombie >= ZOOMBIE_MAX_PASSED) {
      game_over.style.display = "block";
      stop = true;
      document.querySelectorAll(".zoombie").forEach(zoombie => {zoombie.remove()});
      clearInterval(interval);
    }
  })

  board.appendChild(div);
}

board.addEventListener("mousedown", function(event) {
  if (event.which == 1) {
    updateScore(POINTS_MISSED_SHOT);
  }
});

document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

document.addEventListener("mousemove", function(event) {
  crosshair.style.left = event.pageX + "px";
  crosshair.style.top = event.pageY + "px";
});

interval = setInterval(generateZoombie, 1000);
