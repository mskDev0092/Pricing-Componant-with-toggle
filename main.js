"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const toggleArea = document.querySelector(".toggle-area");
const basicPrice = document.querySelector(".price-1");
const profPrice = document.querySelector(".price-2");
const masterPrice = document.querySelector(".price-3");

toggleArea.addEventListener("click", function (e) {
  e.preventDefault();
  if (toggleArea.classList.contains("monthly")) {
    toggleArea.classList.remove("monthly");
    toggleArea.classList.add("anually");
    basicPrice.innerText = `$ 199.99`;
    profPrice.innerText = `$ 249.99`;
    masterPrice.innerText = `$ 399.99`;
  } else {
    toggleArea.classList.add("monthly");
    toggleArea.classList.remove("anually");
    basicPrice.innerText = `$ 19.99`;
    profPrice.innerText = `$ 24.99`;
    masterPrice.innerText = `$ 39.99`;
  }
});
