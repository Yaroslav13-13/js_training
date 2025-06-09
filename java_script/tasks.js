// function isAdult(age) {
//   return age >= 18;
// }
// console.log(isAdult(20));
// console.log(isAdult(15));
//!______________________________________________________________

// function isEven(number) {
//   return number % 2 === 0 ? "парне" : "непарне";
// }
// console.log(isEven(4));
// console.log(isEven(7));
//!______________________________________________________________

// function getGrade(points) {
//   if (points >= 90 && points <= 100) {
//     return "Відмінно";
//   } else if (points >= 70 && points <= 89) {
//     return "Добре";
//   } else if (points >= 50 && points <= 69) {
//     return "Задовільно";
//   } else {
//     return "Незадовільно";
//   }
// }
// console.log(getGrade(95)); // "Відмінно"
// console.log(getGrade(73)); // "Добре"
// console.log(getGrade(51)); // "Задовільно"
// console.log(getGrade(30)); // "Незадовільно"
//!______________________________________________________________

// function login(username, password) {
//   if (username === "admin" && password === "1234") {
//     return "Вхід успішний";
//   } else {
//     return "Невірні дані";
//   }
// }

// console.log(login("admin", "1234")); // Вхід успішний
// console.log(login("user", "0000")); // Невірні дані
//!______________________________________________________________

// function sumArray(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// console.log(sumArray([1, 2, 3])); // 6
// console.log(sumArray([10, 20, 30, 40])); // 100
//!______________________________________________________________

// function countEven(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       total += 1;
//     }
//   }
//   return total;
// }
// console.log(countEven([1, 2, 3, 4, 5, 6])); // 3
// console.log(countEven([11, 13, 15])); // 0
// console.log(countEven([2, 4, 8, 10])); // 4
//!______________________________________________________________

// function sumEven(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       total += arr[i];
//     }
//   }
//   return total;
// }

// console.log(sumEven([1, 2, 3, 4, 5, 6])); // 12 (2+4+6)
// console.log(sumEven([10, 11, 12])); // 22 (10+12)
// console.log(sumEven([1, 3, 5])); // 0
//!______________________________________________________________
//?      Знайти найбільше число у масиві
//?        Створи функцію findMax, яка:
//?        Приймає масив чисел
//?        Повертає найбільше число

//*   function findMax(arr) {
//*     let maxNumber = arr[0];
//*     for (let i = 1; i < arr.length; i++) {
//*       if (arr[i] > maxNumber) {
//*         maxNumber = arr[i];
//*       }
//*     }
//*     return maxNumber;
//*   }
//*   console.log(findMax([3, 7, 2, 9, 5])); // 9
//*   console.log(findMax([-10, -3, -1])); // -1
//!______________________________________________________________

//TODO   Використовуючи синтаксис обчислювальних властивостей,
//TODO   доповни код оголошення об'єкта credentials таким чином,
//TODO   щоб в результаті у нього були дві властивості:
//TODO   email і password, ключі яких зберігаються у змінних emailInputName і passwordInputName.
//TODO   Значенням властивості email повинен бути рядок "henry.carter@aptmail.com",
//TODO   а значенням властивості password - рядок "jqueryismyjam".

//* const emailInputName = "email";
//* const passwordInputName = "password";
//* const credentials = {
//*   [emailInputName]: "henry.carter@aptmail.com",
//*   [passwordInputName]: "jqueryismyjam",
//* };
//* console.log(credentials.email);
//* console.log(credentials.password);
//!______________________________________________________________

// let name = "Yaroslav";
// const age = 40;
// let text = `My name is ${name} and I am ${age} years old`;
// console.log(text);

// const userAge = function user(age) {
//   if (age >= 18) {
//     return "Access granted";
//   } else {
//     return "Access denied";
//   }
// };
// console.log(userAge(16));

// let age = 17;
// const userAge = age >= 18 ? "Access granted" : "Access denied";
// console.log(userAge);

//* function getGrade(score) {
//*   if (score >= 90 && score <= 100) {
//*     return "Excellent";
//*   } else if (score >= 75 && score <= 89) {
//*     return "Good";
//*   } else if (score >= 60 && score <= 74) {
//*     return "Satisfactory";
//*   } else if (score >= 0 && score <= 59) {
//*     return "Fail";
//*   } else {
//*     return "Invalid score";
//*   }
//* }
//* console.log(getGrade(95));
//* console.log(getGrade(82));
//* console.log(getGrade(68));
//* console.log(getGrade(43));
//* console.log(getGrade(-44));
//!______________________________________________________________

// function walking(distance, fuel) {
//   let result = (fuel / distance) * 100;
//   return `Your average is ${Math.round(result)} L/100km`;
// }
// console.log(walking(456, 67));

// function averageConsumption(trips) {
//   let totalDistance = 0;
//   let totalFuel = 0;

//   for (const trip of trips) {
//     totalDistance += trip.distance;
//     totalFuel += trip.fuel;
//   }
//   if (totalDistance === 0) {
//     return "Invalid input: total distance is zero";
//   }
//   const average = (totalFuel / totalDistance) * 100;
//   return `Average consumption for all trips: ${average.toFixed(2)} L/100km`;
// }

// const trips = [
//   { distance: 100, fuel: 10 },
//   { distance: 200, fuel: 25 },
//   { distance: 150, fuel: 15 },
// ];

// console.log(averageConsumption(trips));
//!______________________________________________________________

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
// }
// console.log(getProductPrice("Radar"));

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 6.8,
//   },
// ];
//? let totalRating = 0;
//? for (const book of books) {
//?   totalRating += book.rating;
// }
// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const values = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
// }
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Scanner"));

//?______________________________________________________________

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

//?_______________________________________________________________

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log(titles);
//?______________________________________________________________________
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players
  .map((player) => player.playtime / player.gamesPlayed)
  .reduce((total, time) => {
    return total + time;
  }, 0);

console.log(totalAveragePlaytimePerGame);
