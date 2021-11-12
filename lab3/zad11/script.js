"use strict";

const API_URL = "https://jsonblob.com/api/jsonBlob/908745627165540352";

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
let stop = true;

const board = document.getElementById("board");
const crosshair = document.getElementById("crosshair");
const score = document.getElementById("score");
const passed = document.getElementById("passed");
const init = document.getElementById("init");
const nickname = document.getElementById("nickname");
const ranking = document.getElementById("ranking");
const play = document.getElementById("play");

let current_score = 0;
let passed_zoombie = 0;
let current_nickname = "";

function updateScore(points) {
  if (stop) {
    return;
  }
  current_score = points;
  if (current_score >= 0) {
    score.innerText = current_score.toString().padStart(5, "0");
  } else {
    score.innerText = "-" + (-1 * current_score).toString().padStart(5, "0");
  }
}

function updatePassedZoombie(zoombie) {
  if (stop) {
    return;
  }
  passed_zoombie = zoombie;
  passed.innerText = passed_zoombie.toString();
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
      updateScore(current_score + POINTS_PER_ZOOMBIE);
      event.stopPropagation();
    }
  })

  div.addEventListener("animationend", function(event) {
    if (stop) {
      return;
    }

    this.remove();
    updatePassedZoombie(passed_zoombie + 1);

    if (passed_zoombie == ZOOMBIE_MAX_PASSED) {
      stop = true;
      document.querySelectorAll(".zoombie").forEach(zoombie => {zoombie.remove()});
      clearInterval(interval);
      updateAndGetRanking();
    }
  })

  board.appendChild(div);
}

board.addEventListener("mousedown", function(event) {
  if (event.which == 1) {
    updateScore(current_score + POINTS_MISSED_SHOT);
  }
});

document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

document.addEventListener("mousemove", function(event) {
  crosshair.style.left = event.pageX + "px";
  crosshair.style.top = event.pageY + "px";
});


function updateAndGetRanking() {
  fetch(API_URL)
  .then(response => response.json())
  .then(json => {
    if (json[current_nickname] === undefined || 
        json[current_nickname]["score"] < current_score) {
      json[current_nickname] = {
        "score": current_score,
        "date": new Date().getDate()+"."+new Date().getMonth()+"."+new Date().getFullYear()
      };
    }
    fetch(API_URL, {"method": "PUT", "headers": {"Content-Type": "application/json; charset=UTF-8"}, "body": JSON.stringify(json)});

    let data = [];

    for (let nick in json) {
      let score = json[nick]["score"];
      let date = json[nick]["date"];
      data.push({"score": score, "nick": nick, "date": date});
    }

    data.sort(function (a, b) { return b.score - a.score });
    data = data.splice(0, 7);

    let table = document.getElementById("table");
    let i = 1;

    table.querySelectorAll("tr > td").forEach(elem => {
      elem.parentElement.remove();
    });

    for (let row of data) {
      let tr = document.createElement("tr");
      let nick = row["nick"];
      let score = row["score"];
      let date = row["date"];
      tr.innerHTML = "<td>" + i + "</td><td>" + nick + "</td><td>" + score + "</td><td>" + date + "</td>";
      table.appendChild(tr);
      i++;
    }

    ranking.style.display = "flex";
  });
}

function startGame() {
  stop = false;
  updateScore(0);
  updatePassedZoombie(0);
  interval = setInterval(generateZoombie, 1000);
  nickname.innerText = current_nickname;
}

init.focus();

init.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    if (init.value == "") {
      return;
    }
    current_nickname = init.value;
    init.style.display = "none";
    startGame();
  }
});

play.addEventListener("click", function (event) {
  ranking.style.display = "none";
  startGame();
});


