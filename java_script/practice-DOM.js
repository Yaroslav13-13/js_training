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

// const title = document.querySelector(".title");
// const inputTitle = document.querySelector(".input-title");
// const btnTitle = document.querySelector(".btn-title");
// const inputColor = document.querySelector(".input-color");
// const btnColor = document.querySelector(".btn-color");

// btnTitle.addEventListener("click", () => {
//   if (inputTitle.value.trim() !== "") {
//     title.textContent = inputTitle.value;
//   } else {
//     alert("Введіть текст");
//   }
// });

// btnColor.addEventListener("click", () => {
//   if (inputColor.value.trim() !== "") {
//     title.style.color = inputColor.value;
//   } else {
//     alert("Введіть колір");
//   }
// });

// inputTitle.addEventListener("input", () => {
//   title.textContent = inputTitle.value;
// });

// inputColor.addEventListener("input", () => {
//   title.style.color = inputColor.value;
// });

// const fruits = document.querySelector("#fruitList");
// const inputFruits = document.querySelector(".input");

// fruits.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     inputFruits.value = event.target.textContent;
//     event.target.style.color = "red";
//     event.target.style.cursor = "pointer";
//   }
// });

// inputFruits.addEventListener(focus, (event) => {
//   event.target.style.borderColor = "red";
// });
// const text = document.querySelector("p");
// text.innerHTML = "<p>HTML,CSS, <strong>JavaScript</strong></p>";

// // !=================================================================

// const container = document.querySelector("#container");

// container.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     console.log("Клік по кнопці:", event.target.textContent);
//     console.log("Обробник висить на:", event.currentTarget.id);
//   }
// });

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

//! ======================   Деструктуризація =========================

// const book = {
//   title: "JS для початківців",
//   author: "Іван Петренко",
//   year: 2024,
// };
// function foo({ title, year }) {
//   console.log(`${title} ${year}`);
// }
// console.log(foo(book));

//?_______________________________________________________________________

// const user = {
//   name: "Іван",
//   age: 25,
//   city: "Львів",
// };

//* const { name, city } = user;
//?_______________________________________________________________________
// const product = {
//   title: "Смартфон",
//   price: 12000,
//   info: {
//     color: "black",
//     warranty: "1 рік",
//   },
// };

//* const {
//*   title,
//*   price,
//*   info: { color },
//* } = product;

//?_______________________________________________________________________

// const colors = ["red", "green", "blue", "yellow"];

//* const [a, , c, d] = colors;
//* console.log(a, c, d);
//?_______________________________________________________________________
// const points = [100, 200];
//* conat[(x, y)] = points;
//* console.log(x);
//* console.log(y);
//?_______________________________________________________________________

// function showUser({ name, email }) {
//   console.log(`name:${name} email:${email}`);
// }

// const userData = {
//   name: "Марія",
//   email: "maria@example.com",
// };
// showUser(userData);

//?_______________________________________________________________________

//* function calculateArea({ width, height }) {
//*   console.log(`P = ${width * height}`);
//* }

// const rectangle = {
//   width: 5,
//   height: 10,
// };
//* calculateArea(rectangle);

//!====================================================================

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector("#colorName");
// colorPalette.addEventListener("click", (event) => {
//   output.textContent = event.target.dataset.color;
// });

//! =============================== JSON ============================
// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

//!====================================================================

// const textBtn = document.querySelector(".btn-text");
// const textP = document.querySelector(".p-text");

// textBtn.addEventListener("click", () => {
//   text.textContent = "Привіт, подіє!";
// });

// const inputName = document.querySelector(".input-name");
// const outputName = document.querySelector(".output-name");
// inputName.addEventListener("input", () => {
//   outputName.textContent = inputName.value;
// });

// const form = document.querySelector(".my-form");
// const nameField = document.querySelector(".name-field");
// const btnForm = document.querySelector(".btn-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let userName = nameField.value;
//   alert(`Hello ${userName}`);
// });

//!================================================================================

// const users = ["Anna", "Bohdan", "Iryna", "Yaroslav"];

// const userList = document.querySelector(".user-list");
// function renderUsers(users) {
//   const marcup = users
//     .map((user) => {
//       return `<li>name: ${user}</li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforebegin", marcup);
// }
// renderUsers(users);

// const userList = document.querySelector(".user-list");
// function renderUsers(users) {
//   const marcup = users
//     .map((user) => {
//       return `<li>name: ${user}</li>`;
//     })
//     .join("");
//   userList.innerHTML = marcup;
//   userList.style.listStyle = "none";
// }
// renderUsers(users);

// const userList = document.querySelector(".user-list");
// function renderUsers(users) {
//   users.forEach((user) => {
//     const li = document.createElement("li");
//     li.textContent = `name: ${user}`;
//     userList.append(li);
//     li.style.listStyle = "none";
//   });
//   return;
// }
// renderUsers(users);
//!================================================================================

// const products = [
//   { name: "Смартфон", price: 8999, inStock: true },
//   { name: "Планшет", price: 5999, inStock: false },
//   { name: "Ноутбук", price: 14999, inStock: true },
// ];

// const productCard = document.querySelector(".product");

// function foo(products) {
//   const marcup = products
//     .map((product) => {
//       return `<div class="card">
//   <h2>${product.name}</h2>
//   <p>Ціна: ${product.price} грн</p>
//   <p>В наявності: ${product.inStock ? "✅" : "❌"}</p>
// </div>`;
//     })
//     .join("");
//   productCard.innerHTML = marcup;
// }
// foo(products);

// const users = [
//   {
//     id: 1,
//     name: "Yaroslav",
//     email: "yaroslav@example.com",
//     age: 25,
//     address: {
//       city: "Kyiv",
//       street: "Shevchenka 12",
//       zipcode: "01001",
//     },
//   },
//   {
//     id: 2,
//     name: "Anna",
//     email: "anna@example.com",
//     age: 30,
//     address: {
//       city: "Lviv",
//       street: "Franko 5",
//       zipcode: "79000",
//     },
//   },
//   {
//     id: 3,
//     name: "Ivan",
//     email: "ivan@example.com",
//     age: 22,
//     address: {
//       city: "Odesa",
//       street: "Deribasivska 3",
//       zipcode: "65000",
//     },
//   },
// ];

// const userContainer = document.querySelector("#users-container");
// const searchInput = document.querySelector("#search-input");

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `
//         <ul>
//           <li><strong>Name:</strong> ${user.name}</li>
//           <li><strong>Age:</strong> ${user.age}</li>
//           <li>
//             <button class="show-address">Show/Hide Address</button>
//             <div class="address" hidden>
//               <p><strong>City:</strong> ${user.address.city}</p>
//               <p><strong>Street:</strong> ${user.address.street}</p>
//               <p><strong>Zipcode:</strong> ${user.address.zipcode}</p>
//             </div>
//           </li>
//         </ul>
//       `;
//     })
//     .join("");

//   userContainer.innerHTML = markup;

//   document.querySelectorAll(".show-address").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const address = btn.nextElementSibling;
//       address.hidden = !address.hidden;
//     });
//   });
// }

// renderUsers(users);

// searchInput.addEventListener("input", () => {
//   const query = searchInput.value.toLowerCase();

//   const filtered = users.filter((user) =>
//     user.name.toLowerCase().includes(query)
//   );

//   renderUsers(filtered);
// });

// //!================================================================================

// //! localStorage.setItem() - покласти у Локальнe сховище
// //! localStorage.gеtItem() - витягти з Локального сховища
// //! localStorage.removeItem() - видалити з Локального сховища
// //! localStorage.cleare() - видалити ВСЕ з Локального сховища (не рекомендується)
// // ! JSON.parse()

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, JSON.stringify(names));
//!                          ---------------------
// const value = localStorage.getItem(LS_KEY);
// console.log(Array.isArray(JSON.parse(value)));

// const date = new Date("2030-02-16T14:25:00");
// console.log(date.getTime());
// console.log(new Date(2030, 0, 16, 14, 25, 0, 0));
// console.log(new Date(15000));

// const time = Date.now();
// console.log(time);

// const satrtTime = Date.now();
// for (let i = 0; i <= 160; i += 1) {
//   console.log(i);
// }
// const endTime = Date.now();
// const elapsedTime = endTime - satrtTime;
// console.log(`Elapsed time: ${elapsedTime} ms`);

// !                   ПРОМІСИ

// const promise = new Promise((resorve, reject) => {
//   setTimeout(() => {
//     resorve("Дані завантажено");
//   }, 2000);
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("🔚 Завершено"));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     if (success) {
//       resolve("🎉 Успіх");
//     } else {
//       reject("❌ Помилка");
//     }
//   }, 2000);
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//todo==================================================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello, World!");
//   }, 1000);
// });

// promise.then((result) => console.log(result));

//todo==================================================================

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     if (success) {
//       resolve("Успіх");
//     } else {
//       reject("Помилка");
//     }
//   }, 1500);
// });

// promiseOne
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//todo==================================================================

// function delay(ms) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
//   return promise;
// }

// delay(2000).then(() => console.log("Прошло 2 секунди"));

//todo==================================================================

// function getRandomNumber() {
//   const success1 = Math.random() * 10;
//   const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(success1);
//     }, 1000);
//   });

//   return promiseTwo.then((result) => {
//     console.log(Math.round(result));
//   });
// }
// getRandomNumber();

//todo==================================================================

// function getRandomNumber() {
//   const success1 = Math.random() * 10;
//   const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(success1);
//     }, 1000);
//   });

//   return promiseTwo
//     .then((value) => {
//       const random = Math.round(value);
//       console.log("Random number:", random);
//       return random;
//     })
//     .then((result) => {
//       const plusFive = result + 5;
//       console.log("+5:", plusFive);
//       return plusFive;
//     })
//     .then((final) => {
//       console.log("Result:", final);
//     });
// }
// getRandomNumber();

//todo==================================================================
// function fetchUser() {
//   const likelihood = Math.random();
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (likelihood <= 0.7) {
//         return resolve({ name: "Yaroslav", age: 25 });
//       } else {
//         return reject("❌ Користувача не знайдено");
//       }
//     }, 1500);
//   });
// }

// function displayUser(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`👤 Name: ${user.name} | Age: ${user.age}`);
//     }, 1000);
//   });
// }

// fetchUser()
//   .then((user) => displayUser(user))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//todo==================================================================

//!                Модуль 11. HTTP-запити і взаємодія з бекендом

const todoList = document.querySelector(".todo-list");

// const params = new URLSearchParams({
//   _limit: 7,
//   _page: 3,
// });

// fetch(`http://jsonplaceholder.typicode.com/todos?${params}`)
//   .then((result) => {
//     if (!result.ok) {
//       throw new Error(result.status);
//     }
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//     todoList.insertAdjacentHTML("beforeend", createMarcup(data));
//   })
//   .catch((error) => {
//     console.log("cetch:", error);
//   });

function createMarcup(todos) {
  return todos
    .map(
      ({ id, title, completed }) => `
    <li data-id="${id}" claass = 'list-item'>
    <input type="checkbox" ${completed && "checked"} />
    <p>${title}</p></li>
    `
    )
    .join("");
}

function foo(url) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

foo("http://jsonplaceholder.typicode.com/todos?_limit=7")
  .then((data) => {
    todoList.insertAdjacentHTML("beforeend", createMarcup(data));
  })
  .catch((error) => {
    console.log(error);
  });

foo("http://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//todo==================================================================
