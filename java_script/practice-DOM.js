//! Основні DOM методи та властивості:

//!    1. document.querySelector() / querySelectorAll()

//todo🔹 Завдання 1:
//?   Знайди перший елемент з класом "title" і зміни його текст на "Привіт з DOM!".

// const title = document.querySelector(".title");
// console.log(title);
// title.textContent = "Hello DOM";
// title.style.backgroundColor = "green";

//todo=====================================================================

//todo🔹 Завдання 2:
//? Знайди всі елементи з класом "item" і зміни їхній колір фону на жовтий.

// const color = document.querySelectorAll(".item");
// console.log(color);
// color[0].textContent = "DOM";
// color[1].textContent = "BOM";
// color.forEach((item) => {
//   item.style.backgroundColor = "yellow";
// });

//todo=====================================================================

//!    2. .textContent / .innerHTML

//todo🔹 Завдання:
//? Виведи текст кнопки у консоль, коли на неї натискають.
// const btn = document.querySelectorAll("#log-btn");
// console.log(btn);
// btn.forEach((baton) =>
//   baton.addEventListener("click", () => {
//     console.log(baton.textContent);
//   })
// );

//!     ✅ Етапи практики DOM з вправами

//todo  🔹 Етап 1: Пошук елементів
//?      Знайди всі .item і виведи їх у консоль.

// const fruits = document.querySelectorAll(".item");
// fruits.forEach((fruit) => {
//   //   console.log(fruit.textContent);
// });

//todo  🔹 Етап 2: Зміна вмісту
//?     Завдання 2:
//?     Зміни вміст <li> на інший фрукт або текст.

// fruits[2].textContent = "🍇";
// fruits[1].insertAdjacentHTML("beforebegin", "<li class=item>🍍</li>");
// const updatedFruits = document.querySelectorAll(".item");
// updatedFruits.forEach((fruit) => {
//   console.log(fruit.textContent);
// });
// console.log(fruits);

//todo 🔹 Етап 3: Зміна стилів

//?    Завдання 3:
//?    При натисканні на <li> змінюй йому фон.

const fruits = document.querySelectorAll(".item");
fruits.forEach((fruct) => {
  fruct.addEventListener("click", () => {
    fruct.style.cursor = "pointer";
    // fruct.style.backgroundColor = "lightgreen";
    fruct.classList.toggle("highlight");
  });
});
console.log(fruits);
