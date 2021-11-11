"use strict";

let list = document.getElementById("list");

function remove(event) {
  this.closest("li").remove();
}

document.querySelectorAll(".remove").forEach(item => {
  item.addEventListener("click", remove);
});

document.getElementById("add").addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let tel = document.getElementById("tel").value;

  if (name === "" || tel === "") {
    alert("Uzupełnij formularz.");
    return;
  }

  if (!/^[A-Z]([a-z])*( [A-Z][a-z]*)?$/.test(name)) {
    alert("Błędne imie.");
    return;
  }
  
  if (!/^[0-9]{9}$/.test(tel)) {
    alert("Błędny numer telefonu.");
    return;
  }

  let item = document.createElement("li");
  item.innerHTML =
      '<div class="content">' +
      '<span class="name">' + name + '</span>' +
      '<br>' +
      '<span class="tel">' + tel + '</span>' +
      '</div><button class="remove"><i class="fa fa-trash"></i></button>';

  list.appendChild(item);
  item.getElementsByClassName("remove")[0].addEventListener("click", remove);

  document.getElementById("name").value = "";
  document.getElementById("tel").value = "";
});
