//! Методт рядків
/* 
 - slice
 - toLowerCase / toUpperCase
 - icludes
 - startsWith / endWith
 - indexOf
 - trim
*/

//!                           Метод toLowerCase ()

//?    1. Зроби все слово маленькими:
//*    const word = "HELLO";
//*    const str = word.toLowerCase();
//*    console.log(str);

//?    2. Перевір, чи слово користувача дорівнює "admin" (ігноруючи регістр):
//*    function userName(name) {
//*      return name.toLowerCase() === "admin"
//*        ? console.log("Access allowed")
//*        : console.log("Access denied");
//*    }
//*    userName("AdMINsdf");

//?    3. Приведи всі слова в реченні до нижнього регістру:
//*    const sentence = "JavaScript Is AWESOME";
//*    const word = sentence.toLowerCase();
//*    console.log(word);

//?    4. Зроби логін маленькими літерами:
//*    const login = "User123";
//*    const loginLowerCase = login.toLowerCase();
//*    console.log(loginLowerCase);

//?    5. Порівняй два рядки без урахування регістру:
//*    const str1 = "Hello";
//*    const str2 = "HELLO";
//*    const result = str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
//*    console.log(result);
//!==================================================================

//!                            Метод toUpperCase ()

//?    1. Перетвори слово в великі літери:
//*    const word = "hello";
//*    const result = word.toUpperCase();
//*    console.log(result);

//?    2. Привітайся гучно:
//*    const name = "yaroslav";
//*    const word = `HELLO, ${name.toUpperCase()}!`;
//*    console.log(word);

//?    3. Зроби всі слова в реченні великими:
//*    const sentence = "coding is fun";
//*    console.log(sentence.toUpperCase());

//?     4. Порівняй два рядки без урахування регістру:
//     const a = "Test";
//     const b = "test";
//     const result = a.toUpperCase === b.toUpperCase;
//     console.log(result);

//?    5. Перевір, чи введений код збігається з "SECRET", не зважаючи на регістр:
//*    const userInput = "SeCrEt";
//*    const result = userInput.toUpperCase() === "SECRET";
//*    console.log(result);
//!==================================================================

//!                            Метод trim ()

//?   1. Прибери зайві пробіли:
//    onst word = "   hello   ";
//    onsole.log(word.trim());

//?    2. Перевір логін без пробілів:
//*    const input = "  admin ";
//*    const result = input.trim() === "admin";
//*    console.log(result);

//?    3. Порахуй довжину рядка до і після trim():
//*    const str = "   JavaScript   ";
//*    console.log(str.length);
//*    console.log(str.trim().length);

//?    4. Виведи речення без пробілів на початку і в кінці:
//*    const sentence = "   I love JS!   ";
//*    console.log(sentence.trim());

//?    5. Очисти введене ім’я:
//*    const name = "   Yaroslav   ";
//*    console.log(name.trim());

//!==================================================================
//!                             Метод includes()

//?    1. Перевір, чи слово містить літеру "a":
//*    const word = "javascript";
//*    console.log(word.includes("a"));

//?   2. Чи є в реченні слово "fun"?:
//*   const sentence = "Learning JavaScript is fun!";
//*   console.log(sentence.includes("fun"));
//?   3. Перевір, чи містить логін "admin":
//*   const login = "superadmin123";
//*   console.log(login.includes("admin"));
//?   4. Чи містить рядок "error":
//*   const message = "No errors found";
//*   console.log(message.includes("error"));
//?   5. Перевір, чи є в слові "hello" підрядок "ll":
//*   const greeting = "hello";
//*   console.log(greeting.includes("ll"));
//!==================================================================
//!                             Метод startsWith()

//?   1. Перевір, чи слово починається з "J":
//*   const word = "JavaScript";
//*   console.log(word.startsWith("J"));
//?   2. Чи починається фраза з "Hello":
//*   const phrase = "Hello, world!";
//*   console.log(phrase.startsWith("Hello"));
//?   3. Чи починається адреса з "https":
//*   const url = "https://example.com";
//*   console.log(url.startsWith("https"));
//?   4. Перевір, чи ім’я починається з "Max":
//*   const name = "Maximilian";
//*   console.log(name.startsWith("Max"));
//?   5. Чи починається пароль з "123":
//*   const password = "123qwerty";
//*   console.log(password.startsWith("123qwerty"));
//!==================================================================
//!                             Метод endsWith()

//?   1. Перевір, чи слово закінчується на "t":
//*   const word = "JavaScript";
//*   console.log(word.endsWith("t"));
//?   2. Чи закінчується фраза на "!":
//*   const phrase = "Hello, world!";
//*   console.log(phrase.endsWith("!"));
//?   3. Чи закінчується адреса на ".com":
//*   const url = "https://example.com";
//*   console.log(url.endsWith(".com"));
//?   4. Перевір, чи ім’я закінчується на "ian":
//*   const name = "Maximilian";
//*   console.log(name.endsWith("ian"));
//?   5. Чи закінчується пароль на "qwerty":
//*   const password = "123qwerty";
//*   console.log(password.endsWith("qwerty"));
//!==================================================================
//!                             Метод replace(), replaceAll()

//?   1. Замінити "cat" на "dog":
//*   const text = "I have a cat.";
//*   console.log(text.replace("cat", "dog"));
//?   2. Заміни "world" на "JavaScript":
//*   const phrase = "Hello world!";
//*   console.log(phrase.replace("world", "JavaScript"));
// ?   3. Заміни "-" на " ":
//*   const slug = "front-end-developer";
//*   console.log(slug.replaceAll("-", " "));
//?   4. Заміни ім’я "Ann" на "Mary":
//*   const greeting = "Hi, Ann!";
//*   console.log(greeting.replace("Ann", "Mary"));
//?   5. Заміни слово "bad" на "good":
//* const feedback = "That was a bad idea.";
//* console.log(feedback.replace("bad", "good"));
//!==================================================================
//!                             Метод slice()
//?   1. Виріж "Java" зі слова:
//*   const word = "JavaScript";
//*   console.log(word.slice(0, 4));
//?   2. Виріж "Script":
//* const word = "JavaScript";
//* console.log(word.slice(-6));
//?   3. Виріж останні 3 символи:
//* const text = "developer";
//* console.log(text.slice(-3));
//?   4. Виріж "world" з фрази:
//* const phrase = "Hello world!";
//* console.log(phrase.slice(6, 11));
//?   5. Виріж "JS" з кінця рядка:
//* const str = "I love JS";
//* console.log(str.slice(-2));

//!==================================================================
//!                             Метод split()
//?   1. Розбий рядок "JavaScript is awesome" на слова:
// const str1 = "JavaScript is awesome";
// console.log(str.split());
//?   2. Розбий "apple,banana,orange" по комі:
// const str2 = "apple,banana,orange";
// console.log(str.split(" "));
//?   3. Розбий "12345" на окремі цифри:
// const str3 = "12345";
// console.log(str3.split(""));
//?   4. Витягни ім'я з рядка "Name: Yaroslav":
const str4 = "Name: Yaroslav";
console.log(str4.split());
//?   15. Розбий "hello world" тільки на 1 слово:
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
//? Напиши функцію, яка повертає найбільше число з масиву.
//? Якщо на вхід передано не масив — поверни "Sorry, it is not an array!"

//* function findBiggestNumber(numbers) {
//*   if (!Array.isArray(numbers)) {
//*     return "Sorry, it is not an array!";
//*   }
//*   let maxNumber = numbers[0];
//*   for (let i = 1; i < numbers.length; i = i + 1) {
//*     if (numbers[i] > maxNumber) {
//*       maxNumber = numbers[i];
//*     }
//*   }
//*   return maxNumber;
//* }
//* console.log(findBiggestNumber([2, 5, 35, 1, 56]));
//* console.log(findBiggestNumber("MaxNumber"));
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

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players
//   .map((player) => player.playtime / player.gamesPlayed)
//   .reduce((total, time) => {
//     return total + time;
//   }, 0);

// console.log(totalAveragePlaytimePerGame);
//?______________________________________________________________________

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();
// const alphabeticalAuthors = authors.toSorted();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
//?______________________________________________________________________

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(descendingReleaseDates);
//?______________________________________________________________________

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
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.table(names);
//?______________________________________________________________________
