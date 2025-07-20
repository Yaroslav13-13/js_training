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
  if (inputTitle.value.trim() !== "") {
    title.textContent = inputTitle.value;
  } else {
    alert("Введіть текст");
  }
});

btnColor.addEventListener("click", () => {
  if (inputColor.value.trim() !== "") {
    title.style.color = inputColor.value;
  } else {
    alert("Введіть колір");
  }
});

inputTitle.addEventListener("input", () => {
  title.textContent = inputTitle.value;
});

inputColor.addEventListener("input", () => {
  title.style.color = inputColor.value;
});

const fruits = document.querySelector("#fruitList");
const inputFruits = document.querySelector(".input");

fruits.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    inputFruits.value = event.target.textContent;
    event.target.style.color = "red";
    event.target.style.cursor = "pointer";
  }
});

inputFruits.addEventListener(focus, (event) => {
  event.target.style.borderColor = "red";
});
const text = document.querySelector("p");
text.innerHTML = "<p>HTML,CSS, <strong>JavaScript</strong></p>";

// const categories = document.querySelectorAll("#categories .item");
// const item = document.querySelectorAll(".item");
// console.log(`Numbers of category: ${categories.length}`);
// categories.forEach((element) => {
//   const title = element.querySelector("h2").textContent;
//   const elementsCount = element.querySelectorAll("ul li").length;

//   console.log(`Category: ${title}`);
//   console.log(`Elements: ${elementsCount}`);
// });

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   },
// ];

// const gallery = document.querySelector(".gallery");
// const marcup = images
//   .map(({ url, alt }) => {
//     return `<li class = "gallery-item"><img src="${url}" alt="${alt}"></li>`;
//   })
//   .join("");

// gallery.insertAdjacentHTML("beforeend", marcup);

const book = {
  title: "JS для початківців",
  author: "Іван Петренко",
  year: 2024,
};

function foo({ title, year }) {
  console.log(`${title} ${year}`);
}
console.log(foo(book));
