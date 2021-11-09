"use strict";

fetch("db.json")
.then(response => response.json())
.then(data => {

  let sec1 = document.getElementById("sec1-list");
  for (let row of data) {
    if (row["province"] !== "małopolskie") {
      continue;
    }
    let li = document.createElement("li");
    li.innerText = row["name"];
    sec1.appendChild(li);
  }

  let sec2 = document.getElementById("sec2-list");
  for (let row of data) {
    if (row["name"].split("a").length - 1 !== 2) {
      continue;
    }
    let li = document.createElement("li");
    li.innerText = row["name"];
    sec2.appendChild(li);
  }

  data.sort((a, b) => b["people"] - a["people"]);

  let li = document.createElement("li");
  li.innerText = data[4]["name"];
  sec3.appendChild(li);

  let sec4 = document.getElementById("sec4-list");
  for (let row of data) {
    if (row["people"] <= 100000) {
      break;
    }
    let li = document.createElement("li");
    li.innerText = row["name"] + " City";
    sec4.appendChild(li);
  }

  let sec5 = document.getElementById("sec5-list");
  let count = 0;
  for (let row of data) {
    if (row["people"] > 80000) {
      count++;
    }
  }

  li = document.createElement("li");
  li.innerText = "Miast > 80000: " + count;
  sec5.appendChild(li);

  li = document.createElement("li");
  li.innerText = "Miast < 80000: " + (data.length - count);
  sec5.appendChild(li);


  let sec6 = document.getElementById("sec6-list");
  let sec6_sum = 0;
  let sec6_count = 0;

  for (let row of data) {
    if (row["township"][0] !== "p") {
      continue;
    }
    sec6_sum += row["people"];
    sec6_count++;
  }

  li = document.createElement("li");
  li.innerText = "Średnia: " + (sec6_sum / sec6_count);
  sec6.appendChild(li);
});
