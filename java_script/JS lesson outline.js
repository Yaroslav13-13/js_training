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

//!         Урок 1. Модуль 6. ООП. Класи

// const user = {
//   userName: "Alice",
//   showThis() {
//     console.log("this", this);
//   },
// };

// function foo(callback) {
//   console.log(callback);
//   callback();
// }

// foo(user.showThis);

const timePlayers = {
  players: [
    {
      id: "player-1",
      name: "Mango",
      timePlayed: 310,
      points: 54,
      online: true,
    },
    {
      id: "player-2",
      name: "Poly",
      timePlayed: 470,
      points: 92,
      online: false,
    },
    { id: "player-3", name: "Ajax", timePlayed: 180, points: 48, online: true },
    {
      id: "player-4",
      name: "Kiwi",
      timePlayed: 250,
      points: 61,
      online: false,
    },
    { id: "player-5", name: "Luna", timePlayed: 375, points: 80, online: true },
  ],
  calcTimePlayers(playersName) {
    const player = this.players.find((item) => item.name === playersName);
    if (!player) {
      return `${playersName} not found`;
    }
    return player.timePlayed / player.points;
  },
};

console.log(timePlayers.calcTimePlayers("Ajax"));
