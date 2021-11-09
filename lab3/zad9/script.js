"use strict";

let current = 0;

let profile = document.getElementById("profile");
let name = document.getElementById("name");
let job = document.getElementById("job");
let info = document.getElementById("info");

function show(id) {
  profile.src = data[id].profile;
  name.textContent = data[id].name;
  job.textContent = data[id].job;
  info.textContent = data[id].info;
}

const data = [
  {
    name: "Anna Nowak",
    profile: "https://dummyimage.com/400x400/cccccc/000000",
    job: "Web developer",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Szymon Złoty",
    profile: "https://dummyimage.com/400x400/c900c9/000000",
    job: "Security Engineer",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Mateusz Polak",
    profile: "https://dummyimage.com/400x400/0084d1/000000",
    job: "Intern",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Piotr Kozłowski",
    profile: "https://dummyimage.com/400x400/db0000/000000",
    job: "UX designer",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Jakub Nowak",
    profile: "https://dummyimage.com/400x400/dbffff/000000",
    job: "PE designer",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];


document.getElementById("next").addEventListener("click", function (event) {
  current++;
  if (current >= data.length) {
    current = 0;
  }
  show(current);
});


document.getElementById("prev").addEventListener("click", function (event) {
  current--;
  if (current < 0) {
    current = data.length - 1;
  }
  show(current);
});


document.getElementById("random").addEventListener("click", function (event) {
  current = Math.floor(Math.random() * data.length);
  show(current);
});
