//!       Модуль 5. Перебираючі методи масивів
//TODO    Колбек-функції

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

//TODO Інлайн-колбеки

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//TODO Метод forEach(callback)

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (order) {
//     totalPrice += order;
//   });

//   return totalPrice;
// }

//?   Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers
//?    і повертає новий масив,в якому будуть тільки ті елементи оригінального масиву,
//?    які більші за значення другого параметра числа value.
//?   Якщо таких значень не буде знайдено, функція повертає порожній масив.
//?   Виконай рефакторинг функції таким чином, щоб замість циклу for,
//?    вона використовувала метод forEach.

//*   function filterArray(numbers, value) {
//*     const result = [];
//*     numbers.forEach(function (item) {
//*       if (item > value) {
//*         result.push(item);
//*       }
//*     });
//*     return result;
//*   }
//*   console.log(filterArray([1, 2, 3, 4, 5], 3));
//*   console.log(filterArray([1, 2, 3, 4, 5], 4));

//TODO     Стрілочні функції

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };

//TODO     Методи map і flatMap
