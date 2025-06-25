//! Основні DOM методи та властивості:

//!    1. document.querySelector() / querySelectorAll()

//todo🔹 Завдання 1:
//?   Знайди перший елемент з класом "title" і зміни його текст на "Привіт з DOM!".

const title = document.querySelector(".title");
console.log(title);
title.textContent = "Hello DOM";
title.style.backgroundColor = "green";

//todo=====================================================================

//todo🔹 Завдання 2:
//? Знайди всі елементи з класом "item" і зміни їхній колір фону на жовтий.

const color = document.querySelectorAll(".item");
console.log(color);
color[0].textContent = "DOM";
color[1].textContent = "BOM";
color.forEach((item) => {
  item.style.backgroundColor = "yellow";
});

//todo=====================================================================

//todo🔹 Завдання 2:
//? Знайди всі елементи з класом "item" і зміни їхній колір фону на жовтий.
