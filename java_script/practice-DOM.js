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

//! ____________________________________________________________________

//todo  🔹 Етап 1: Пошук елементів
//?      Знайди всі .item і виведи їх у консоль.

// const fruits = document.querySelectorAll(".item");
// fruits.forEach((fruit) => {
//   //   console.log(fruit.textContent);
// });
//! ____________________________________________________________________

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
//! ____________________________________________________________________

//todo 🔹 Етап 3: Зміна стилів

//?    Завдання 3:
//?    При натисканні на <li> змінюй йому фон.

//* const fruits = document.querySelectorAll(".item");
//todo варіант 1:
//* fruits.forEach((fruct) => {
//*   fruct.addEventListener("click", () => {
//*     fruct.style.cursor = "pointer";
//*     // fruct.style.backgroundColor = "lightgreen";
//*     fruct.classList.toggle("highlight");
//*   });
//* });
//* console.log(fruits);

//todo варіант 2:
//* for (let i = 0; i < fruits.length; i++) {
//*   fruits[i].addEventListener("click", () => {
//*     fruits[i].style.cursor = "pointer";
//*     fruits[i].classList.toggle("highlight");
//*   });
//* }

//todo варіант 3:
//* for (const fruit of fruits) {
//*   fruit.addEventListener("click", () => {
//*     fruit.style.cursor = "pointer";
//*     fruit.classList.toggle("highlight");
//*   });
//* }
//! ____________________________________________________________________

//todo   🔹 Етап 4: Події
//?       Завдання 4:
//?       Створи кнопку, при натисканні якої додається новий <li> у список.
//?       Створи форму з полем для вводу фрукту і кнопкою "Додати".
//?       При натисканні новий фрукт додається в список.

//* const fruitInput = document.querySelector("#fruitInput");
//* const addFruitBtn = document.querySelector("#addFruitBtn");
//* const fruitList = document.querySelector("#fruitList");
//* addFruitBtn.addEventListener("click", () => {
//*   const fruitName = fruitInput.value.trim();
//*   if (fruitName !== "") {
//*     const newItem = document.createElement("li");
//*     newItem.textContent = fruitName;
//*     fruitList.appendChild(newItem);
//*     fruitInput.value = "";
//*   }
//* });
//! ____________________________________________________________________

const title = document.querySelector(".title");
const inputTitle = document.querySelector(".input-title");
const btnTitle = document.querySelector(".btn-title");
const inputColor = document.querySelector(".input-color");
const btnColor = document.querySelector(".btn-color");

btnTitle.addEventListener("click", () => {
  title.textContent = inputTitle.value;
});

btnColor.addEventListener("click", () => {
  title.style.color = inputColor.value;
});
