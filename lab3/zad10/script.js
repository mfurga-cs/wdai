"use strict";

let data = [];
let selected = [];

function collapse(event) {
  this.dataset.state = (1 - this.dataset.state);
  let list = this.parentElement.getElementsByClassName("products")[0];

  if (this.dataset.state == 1) {
    this.className = "fa fa-angle-down";
    list.style.display = "block";
  } else {
    this.className = "fa fa-angle-right";
    list.style.display = "none";
  }
}

function updateSelected() {
  let ul = document.getElementById("selected-list");
  ul.innerHTML = "";

  for (let product of selected) {
    let li = document.createElement("li");
    li.innerText = product;
    ul.appendChild(li);
  }
}

function selectProduct(that) {
  if (that.checked) {
    if (selected.indexOf(that.labels[0].innerText) === -1) {
      selected.push(that.labels[0].innerText);
    }
  } else {
    selected.splice(selected.indexOf(that.labels[0].innerText), 1);
  }

  updateSelected();

  const category = document.getElementById("cat" + that.dataset.cat);
  const list = that.closest("ul");
  const count = [].filter.call(list.getElementsByTagName("input"), e => e.checked).length;

  if (count === 0) {
    category.checked = false;
    category.indeterminate = false;
  } else if (count === list.getElementsByTagName("li").length) {
    category.checked = true;
    category.indeterminate = false;
  } else {
    category.checked = false;
    category.indeterminate = true;
  }
}

function selectCategory(event) {
  let list = [...this.nextSibling.nextSibling.getElementsByTagName("input")];

  if (this.checked) {
    list.forEach(elem => {elem.checked = true; selectProduct(elem)});
  } else {
    list.forEach(elem => {elem.checked = false; selectProduct(elem)});
  }
}

function addCategoryWithProducts(id, category, products) {
  let list = document.getElementById("category-list");

  let i = document.createElement("i");
  i.className = "fa fa-angle-right";
  i.dataset.state = "0";
  i.addEventListener("click", collapse);

  let li = document.createElement("li");

  let input = document.createElement("input");
  input.type = "checkbox";
  input.id = "cat" + id;
  input.addEventListener("click", selectCategory);

  let label = document.createElement("label");
  label.htmlFor = "cat" + id;
  label.innerText = category;

  li.appendChild(i);
  li.appendChild(input);
  li.appendChild(label);

  let ul = document.createElement("ul");
  ul.className = "products";

  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    const productId = "cat" + id + "-prod" + i;

    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = productId;
    input.dataset.cat = id;

    input.addEventListener("click", () => {selectProduct(input)});

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

