"use strict";

let data = [];
let selected = [];

function updateSelected() {
  let ul = document.getElementById("selected-list");
  ul.innerHTML = "";

  for (let product of selected) {
    let li = document.createElement("li");
    li.innerText = product;
    ul.appendChild(li);
  }
}

function selectProduct(event) {
  if (this.checked) {
    selected.push(this.labels[0].innerText);
  } else {
    selected.splice(selected.indexOf(this.labels[0].innerText), 1);
  }
  updateSelected();
}

function addCategoryWithProducts(id, category, products) {
  let list = document.getElementById("category-list");

  let li = document.createElement("li");
  li.innerHTML = '<input type="checkbox" id="cat' + id + '"><label for="cat' + id + '">' + category +'</label>';

  let ul = document.createElement("ul");
  ul.className = "products";

  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    const productId = "cat" + id + "-prod" + i;

    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = productId;

    input.addEventListener("click", selectProduct);

    let label = document.createElement("label");
    label.htmlFor = productId;
    label.innerText = products[i];

    li.appendChild(input);
    li.appendChild(label);

    ul.appendChild(li);
  }

  li.appendChild(ul);
  list.appendChild(li);
}


function pareseJson(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);

  let json = JSON.parse(request.responseText);

  for (let category in json) {
    let products = json[category];
    if (products === undefined || products.length == 0) {
      continue;
    }

    if (!(category in data)) {
      data[category] = [];
    }

    for (let product of products) {
      data[category].push(product);
    }
  }
}

(function () {
  pareseJson("a.json");
  pareseJson("b.json");
  pareseJson("c.json");

  let i = 0;
  for (let category in data) {
    data[category] = Array.from(new Set(data[category]).values());
    addCategoryWithProducts(i, category, data[category]);
    i++;
  }
})();

