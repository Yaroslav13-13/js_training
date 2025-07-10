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

//!==================== if...else =====================!\\

//* if (number > 10) {
//*   console.log("Більше 10");
//* } else {
//*   console.log("10 або менше");
//* }

//* function number(numbers) {
//*   numbers > 10 ? console.log("Більше 10") : console.log("10 або менше");
//* }
//* number(12);
//?______________________________________________________________________

//* function userName(name) {
//*   if (name === "Yaroslav") {
//*     console.log("Привіт Ярослав");
//*   } else if (name === "") {
//*     console.log("Привіт гість");
//*   } else {
//*     console.log("Вхід заборонено");
//*   }
//* }

//* userName("Yaroslav");
//* userName();
//* userName("");
//?______________________________________________________________________

//* function checkEvenOdd(number) {
//*   return number % 2 === 0 ? console.log("парне") : console.log("непарне");
//* }

//* checkEvenOdd(7); // "непарне"
//* checkEvenOdd(12); // "парне"
//?______________________________________________________________________

//* function checkAccess(age) {
//*   if (age <= 12) {
//*     console.log("Доступ заборонено: занадто молодий");
//*   } else if (age > 12 && age <= 17) {
//*     console.log("Доступ обмежений: потрібен нагляд");
//*   } else if (age > 18) {
//*     console.log("Повний доступ");
//*   }
//* }
//* checkAccess(11);
//* checkAccess(13);
//* checkAccess(19);

//?______________________________________________________________________

//* function grade(score) {
//*   if (score >= 90) {
//*     console.log("Оцінка: A");
//*   } else if (score >= 80 && score <= 89) {
//*     console.log("Оцінка: B");
//*   } else if (score >= 70 && score <= 79) {
//*     console.log("Оцінка: C");
//*   } else if (score >= 60 && score <= 69) {
//*     console.log("Оцінка: D");
//*   } else {
//*     console.log("Оцінка: F");
//*   }
//* }
//* grade(92);
//* grade(85);
//* grade(77);
//* grade(66);
//* grade(51);
//?______________________________________________________________________

//* function guessNumber(secret, guess) {
//*   if (secret === guess) {
//*     console.log("Вітаю! Ти вгадав!");
//*   } else if (secret > guess) {
//*     console.log("Занадто мало");
//*   } else if (secret < guess) {
//*     console.log("Занадто багато");
//*   }
//* }
//* guessNumber(7, 5); // "Занадто мало"
//* guessNumber(7, 9); // "Занадто багато"
//* guessNumber(7, 7); // "Вітаю! Ти вгадав!"
//?______________________________________________________________________

//!=========================== for =================================!\\

// for (let i = 0; i < 5; i++) {
//   console.log(i + 1);
// }

//?______________________________________________________________________

//* let total = 0;
//* for (let i = 0; i < 10; i++) {
//*   total += i + 1;
//* }
//* console.log(total);
//?______________________________________________________________________

//* const fruits = ["яблуко", "банан", "апельсин"];
//* for (let i = 0; i < fruits.length; i++) {
//*   console.log(fruits[i]);
//* }
//?______________________________________________________________________

//* const numbers = [5, 10, 3, 8];
//* let total = 0;
//* for (let i = 0; i < numbers.length; i++) {
//*   total += numbers[i];
//* }
//* console.log(total);
//?______________________________________________________________________

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
//*   const str1 = "JavaScript is awesome";
//*   console.log(str1.split(" "));
//?   2. Розбий "apple,banana,orange" по комі:
//*   const str2 = "apple,banana,orange";
//*   console.log(str2.split(","));
//?   3. Розбий "12345" на окремі цифри:
//*   const str3 = "12345";
//*   console.log(str3.split(""));
//?   4. Витягни ім'я з рядка "Name: Yaroslav":
//*   const str4 = "Name: Yaroslav";
//*   console.log(str4.split(": "));
//?   5. Розбий "hello world" тільки на 1 слово:
//*   const str5 = "hello world";
//*   console.log(str5.split(" ", 2));
//!==================================================================

//!  Метод join() - з’єднує всі елементи масиву в рядок, вставляючи між ними роздільник separator.
//?   Задача 1: Простий join:
// const letters = ["H", "e", "l", "l", "o"];
// console.log(letters.join(""));
//?    Задача 2: Дата:
// const date = ["2025", "06", "23"]; // Очікується: "2025/06/23"
// console.log(date.join("/"));
//?   Задача 3: Імена через кому:
// const names = ["Іван", "Оля", "Тарас"]; // Очікується: "Іван, Оля, Тарас"
// console.log(names.join(","));
//?    Задача 4: Побудуй URL:
// const parts = ["https:", "", "site.com", "about", "contacts"]; // Очікується: "https://site.com/about/contacts"
// console.log(parts.join(""));
//?    Задача 5: Масив чисел у вигляді телефона:
// const phone = [0, 6, 7, "-", 1, 2, 3, "-", 4, 5, 6]; // Очікується: "067-123-456"
// console.log(phone.join(""));
//!==================================================================

//!              Метод push() – додати елемент в кінець масиву
//?  ✅ Задача 1:
// const names = ["Оля", "Ігор"]; // Додай "Анна"
// names.push("Анна");
// console.log(names);
//?  ✅ Задача 2:
// const numbers = [1, 2, 3]; // Додай число 4 і 5
// numbers.push(4, 5);
// console.log(numbers);
//?  ✅ Задача 3:
// const tasks = []; // Додай три завдання: "встати", "вмитися", "поснідати"
// tasks.push("встати", "вмитися", "поснідати");
// console.log(tasks);
//?  ✅ Задача 4:
// const letters = ["A", "B"]; // Додай "C", а потім виведи довжину масиву
// letters.push("C");
// console.log(letters);
// console.log(letters.length);
//?  ✅ Задача 5:
// const basket = ["яблуко"]; // Додай в кінець "груша", "банан", "слива" і виведи весь масив
// basket.push("груша", "банан", "слива");
// console.log(basket);
//!==================================================================

//!              Метод pop() – видалити останній елемент
//?  ✅ Задача 1:
// const fruits = ["яблуко", "банан", "вишня"]; // Видали останній фрукт
// fruits.pop();
// console.log(fruits);
//?  ✅ Задача 2:
// const colors = ["red", "green", "blue", "yellow"]; // Видали останній елемент і виведи його окремо
// const deletedColor = colors.pop();
// console.log(deletedColor);
//?  ✅ Задача 3:
// const numbers = [10, 20, 30, 40, 50]; // Видали останній елемент тричі
// for (let i = 0; i < 3; i++) {
//   numbers.pop();
// }
// console.log(numbers);
// //?  ✅ Задача 4:
// const tasks = ["прокинутись", "прибрати", "повчити JS"]; // Після видалення останнього завдання виведи нову довжину масиву
// tasks.pop();
// console.log(`${tasks} : ${tasks.length}`);
//?  ✅ Задача 5:
// const queue = ["перший", "другий", "третій"]; // Видали останнього й додай нового: "новенький"
// queue.pop();
// queue.push("новенький");
// console.log(queue);
//!==================================================================

//!              Метод includes() - перевіряє, чи є в масиві певне значення
//? ✅ Задача 1:
// const fruits = ["яблуко", "банан", "груша"]; // Перевір, чи є "банан" у масиві
// console.log(fruits.includes("банан"));
//? ✅ Задача 2:
// const numbers = [10, 20, 30, 40]; // Чи є у масиві число 25?
// console.log(numbers.includes(25));
//? ✅ Задача 3:
// const users = ["Оля", "Ігор", "Таня"]; // Чи є користувач "Максим"?
// console.log(users.includes("Максим"));
//? ✅ Задача 4:
// const letters = ["a", "b", "c"]; // Чи є буква "c"?
// console.log(letters.includes("c"));
//? ✅ Задача 5:
// const tasks = []; // Чи є у масиві завдання "помити посуд"?
// console.log(tasks.includes("помити посуд"));

//!============================================================================

//!            Метод .slice() - вирізає частину масиву, повертаючи новий масив.
//? ✅ Задача 1:
// const nums = [10, 20, 30, 40, 50]; // Виріж підмасив з елементів 20, 30, 40
// console.log(nums.slice(1, 4));
//? ✅ Задача 2:
// const letters = ["a", "b", "c", "d", "e"]; // Виріж підмасив з 3 останніх елементів
// console.log(letters.slice(2));
//? ✅ Задача 3:
// const fruits = ["яблуко", "банан", "груша", "апельсин"]; // Виріж перші два елементи
// console.log(fruits.slice(0, 2));
//? ✅ Задача 4:
// const arr = [1, 2, 3, 4, 5]; // Виріж масив, починаючи з індексу 2 до кінця
// console.log(arr.slice(2));
//? ✅ Задача 5:
// const words = ["привіт", "як", "справи", "друже"]; // Виріж підмасив без останнього елемента
// console.log(words.slice(0, 3));
//!============================================================================

//!            Метод .splice() змінює оригінальний масив
//? ✅ ЗЗадача 1 — Видалити:
// const numbers = [1, 2, 3, 4, 5]; // Видали елемент 3 (тобто зі значенням 3)
// numbers.splice(2, 1);
// console.log(numbers);
//? ✅ ЗЗадача 2 — Замінити:
// const colors = ["red", "green", "blue"]; // Замінити "green" на "yellow"
// colors.splice(1, 1, "yellow");
// console.log(colors);
//? ✅ Задача 3 — Додати:
// const fruits = ["яблуко", "груша"]; // Вставити "банан" між "яблуко" і "груша"
// fruits.splice(1, 0, "банан");
// console.log(fruits);
//? ✅ Задача 4 — Видалити останні 2:
// const tasks = ["1", "2", "3", "4"]; // Видали 2 останні елементи
// tasks.splice(2, 2);
// console.log(tasks);
//? ✅ Задача 5 — Замінити останній елемент:
// const names = ["Оля", "Ігор", "Марія"]; // Замінити "Марія" на "Тарас"
// names.splice(2, 1, "Тарас");
// console.log(names);
//!============================================================================

//!       Метод .filter() створює новий масив, який містить тільки ті елементи, що підходять під умову.
//? ✅ Задача 1 — Парні числа
// const numbers = [1, 2, 3, 4, 5, 6]; // Залиш тільки парні числа
// const even = numbers.filter((num) => num % 2 === 0);
// const odd = numbers.filter((num) => num % 2 !== 0);
// console.log(numbers);
// console.log(`Парні: ${even} ; Не парні:${odd}`);

//? ✅ Задача 2
// const words = ["котик", "дом", "привіт", "вода"]; // Залиш слова довші за 4 символи
// const longWords = words.filter((num) => num.length > 4);
// console.log(longWords);

//? ✅ Задача 3
// const nums = [-3, 0, 2, -1, 5, 7]; // Залиш тільки додатні числа
// const integers = nums.filter((num) => num >= 0);
// console.log(integers);

//? ✅ Задача 4 Імена з великої літери
// const names = ["оля", "Ігор", "таня", "Олексій"]; // Залиш імена, які починаються з великої літери
// const capitalized = names.filter(
//   (name) => name[0] === name[0].toUpperCase()
// );
// console.log(capitalized);

//? ✅ Задача 4-1 Імена які закінчуються на "я":
// const endingOfName = names.filter((name) => name.endsWith("я"));
// console.log(endingOfName);

//? ✅ Задача 5 — Ціна менше 100:
// const prices = [120, 80, 45, 150, 60]; // Залиш ціни менше 100
// const lowerPrices = prices.filter((price) => price < 100);
// console.log(lowerPrices);
//!==========================================================================================
//!  Метод   .map()  -  створює новий масив, у якому кожен елемент змінений за твоїм правилом.

//? ✅ Задача 1 — Помножити кожне число на 10
// const nums = [1, 2, 3, 4]; // [10, 20, 30, 40]
// const multiplied = nums.map((num) => num * 10);
// console.log(multiplied);

//? ✅ Задача 2 — Додати до кожного імені "👋"
// const names = ["Ігор", "Оля", "Таня"]; // ["👋 Ігор", "👋 Оля", "👋 Таня"]
// const hello = names.map((hi) => "👋 " + hi);
// console.log(hello);

//? ✅ Задача 3 — Перетвори числа у строки
// const numbers = [1, 2, 3]; // ["1", "2", "3"]
// const numberString = numbers.map((num) => num.toString());
// console.log(numberString);

//? ✅ Задача 4 — ППеретвори слова у великі літери
// const words = ["привіт", "друже"]; // ["ПРИВІТ", "ДРУЖЕ"]
// const toUpper = words.map((word) => word.toLocaleUpperCase());
// console.log(toUpper);

//? ✅ Задача 5 — Додай до ціни "грн"
// const prices = [50, 100, 200]; // ["50 грн", "100 грн", "200 грн"]
// const priceUA = prices.map((price) => price + " грн");
// console.log(priceUA);

//? ✅ Задача 6 — Подвоїти тільки парні
//? Залиш тільки парні числа, а потім кожне помнож на 2 - Очікується: [4, 8, 12]
// const nums = [1, 2, 3, 4, 5, 6];
// const even = nums.filter((num) => num % 2 === 0).map((num) => num * 2);
// const notEven = nums.filter((num) => num % 2 !== 0).map((num) => num * 2);
// const result = `подвоєні парні: ${even}; подвоєні не парні: ${notEven}`;
// console.log(result);

//? ✅ Задача 7 — Імена з великої літери + привітання
//? Залиш імена, які починаються з великої літери, і додай до них "Привіт, ...!"
// const names = ["оля", "Ігор", "таня", "Олексій", "Ярослав", "Давид", "марія"]; // Очікується: ["Привіт, Ігор!", "Привіт, Олексій!"]
// const bigNames = names
//   .filter((name) => name[0] === name[0].toUpperCase())
//   .map((name) => "Привіт 👋 " + name)
//   .join(" | ");
// console.log(bigNames);

//? ✅ Задача 8 — Додатні числа → рядки з "плюс"
//? Залиш тільки додатні, і перетвори на "Плюс: 5", "Плюс: 2"
// const values = [-3, 0, 5, 2, -1]; // Очікується: ["Плюс: 5", "Плюс: 2"]
// const positiveValues = values
//   .filter((value) => value >= 0)
//   .map((value) => "Плюс: " + value)
//   .join(" | ");
// console.log(positiveValues);

//? ✅ Задача 9 — Короткі слова → великі
//? Залиш слова, довжина яких менше 5 символів, і зроби їх великими
// const words = ["привіт", "ні", "дякую", "ок"]; // Очікується: ["НІ", "ОК"]
// const smallWords = words
//   .filter((word) => word.length < 5)
//   .map((word) => word.toUpperCase())
//   .join(" | ");
// console.log(smallWords);

//? ✅ Задача 10 — Ціни менше 100 → форматовані
//? // Залиш ціни менше 100, додай " грн", отримай: ["80 грн", "45 грн", "60 грн"]
// const prices = [120, 80, 45, 150, 60];
// const priceUA = prices
//   .filter((price) => price < 100)
//   .map((price) => price + " грн")
//   .join(" | ");
// console.log(priceUA);

//!==========================================================================================

//! ✅ Задача 1 — push
//? Створи масив `animals` з елементами "кіт", "пес"
//? Додай у кінець "папуга"

// const animals = ["кіт", "пес"];
// const parrot = animals.push("папуга");
// console.log(animals.join(" | "));
//?____________________________________________________________

//! ✅ Задача 2 — pop
//? Є масив `queue` = ["перший", "другий", "третій"]
//? Видали останнього і виведи масив
// const queue = ["перший", "другий", "третій"];
// const queueDel = queue.pop(3);
// console.log(queue.join(" | "));
//?____________________________________________________________

//! ✅ Задача 3 — includes
//? Є масив `fruits` = ["яблуко", "груша", "апельсин"]
//? Перевір, чи є в ньому "груша"
//?____________________________________________________________

// const fruits = ["яблуко", "груша", "апельсин"];
// console.log(fruits.includes("груша"));
//?____________________________________________________________

//! ✅ Задача 4 — slice
//? Є масив `numbers` = [10, 20, 30, 40, 50]
//? Отримай підмасив з елементів 20, 30, 40 (без зміни оригіналу)
// const numbers = [10, 20, 30, 40, 50];
// const arr = numbers.slice(1, 4).join(" | ");
// console.log(arr);
//?____________________________________________________________

//! ✅ Задача 5 — splice
//? Є масив `colors` = ["червоний", "зелений", "синій"]
//? Замінити "зелений" на "жовтий"
// const colors = ["червоний", "зелений", "синій"];
// const color = colors.splice(2, 1, "жовтий");
// console.log(colors.join(" | "));
//?____________________________________________________________

//! ✅ Задача 6 — filter
//? Є масив `ages` = [12, 18, 25, 15, 30]
//? Залиш тільки повнолітніх (тобто 18 і більше)
// const ages = [12, 18, 25, 15, 30];
// const filtrAge = ages
//   .filter((age) => age >= 18)
//   .map((age) => "< " + age + " >")
//   .join(" | ");
// console.log(filtrAge);

//?____________________________________________________________

//! ✅ Задача 7 — map
//? Є масив `names` = ["Ігор", "Таня", "Оля"]
//? Додай до кожного імені "👋" попереду
// const names = ["Ігор", "Таня", "Оля"];
// const helloNames = names.map((name) => "< " + "👋 " + name + " >").join(" | ");
// console.log(helloNames);
//?____________________________________________________________

//!                            forEach

//? ✅ Задача 1 — Виведи всі числа
// const numbers = [5, 10, 15];
// let number = numbers.forEach((num) => {
//   console.log(num);
// });

//? ✅ Задача 2 — Привітай кожного користувача
// const users = ["Оля", "Ігор", "Таня"];
// const userHello = users.forEach((user) => {
//   console.log(`< Привіт, ${user} >`);
// });

//? ✅ Задача 3 — Виведи елементи з індексом
// const fruits = ["яблуко", "банан", "вишня"];
// const fruit = fruits.forEach((fruct, i) => {
//   console.log(`${i + 1}. ${fruct}`);
// });

//? ✅ Задача 4 — Порахуй суму чисел
// const nums = [1, 2, 3, 4];
// let total = 0;
// const result = nums.forEach((num) => {
//   total += num;
// });
// console.log(total);

//? ✅ Задача 5 — Виведи довжину кожного слова
// const words = ["привіт", "світ", "javascript"];
// const lengWords = words.forEach((word) => {
//   console.log(`${word}: ${word.length}`);
// });

//? ✅ Задача: Вивести тільки слова, довші за 5 символів

// const words = ["привіт", "світ", "javascript", "ок", "майбутнє"];
// const wordsLeng = words.forEach((word) => {
//   if (word.length > 5) {
//     console.log(`${word}: ${word.length}`);
//   }
// });

//? ✅ Задача: Виведи тільки імена, які довші за 4 символи
// const names = ["Оля", "Максим", "Таня", "Олександр", "Іра"];
// names.forEach((name) => {
//   if (name.length > 4) {
//     console.log(`${name}: ${name.length}`);
//   }
// });

//? Виведи тільки назви міст, які містять літеру "о"
// const cityes = ["Київ", "Львів", "Одеса", "Житомир", "Ужгород"];
// cityes.forEach((city) => {
//   if (city.includes("о")) {
//     console.log(city);
//   }
// });

//!               Пошук елементів через querySelector

//todo ✅ Завдання 1:
//? Знайди елемент h1 і виведи його в консоль
// const title = document.querySelector("h1");
// console.log(title);
// title.textContent = "Java Script";

//todo ✅ Завдання 2:
//? Знайди елемент з класом .title і виведи його текст
// const title = document.querySelector(".title");
// console.log(title.textContent);

//todo ✅ Завдання 3:
//? Знайди елемент з id main і виведи його HTML вміст
// const main = document.querySelector("#main");
// console.log(main);

//todo ✅ Завдання 4:
//? Знайди кнопку і виведи в консоль її текст
// const button = document.querySelector(".btn");
// console.log(button.textContent);

//todo ✅ Завдання 5:
//? Знайди посилання з класом .link і зміни його текст на "Новий текст"
// const link = document.querySelector(".link");
// link.textContent = "Новий текст";
// console.log(link.textContent);

//!              Зміна тексту та HTML: textContent, innerHTML
//todo          textContent — для зміни тексту в елементі
//todo          innerHTML — для зміни HTML-вмісту (з тегами всередині)

//? ✅ Завдання 1 — Заміни текст заголовка
// const title = document.querySelector(".title");
// title.textContent = "Новий заголовок!";

//? ✅ Завдання 2 — Завдання 2 — Додай емодзі в абзац
// const text = document.querySelector("#about");
// text.innerHTML = "Я вивчаю JavaScript 🚀";
// console.log(text.textContent);

//? ✅ Завдання 3 — Встав HTML в div
// const info = document.querySelector(".info");
// info.innerHTML = "<strong>Важливо:</strong> Вивчай щодня";
// console.log(info);

//? ✅ Завдання 4 — Очисти елемент
// const clearElement = document.querySelector(".box");
// clearElement.innerHTML = "";
// console.log(clearElement);

//? ✅ Завдання 5 — Замініть посилання
// const link = document.querySelector(".link");
// link.innerHTML = "<strong>Перейти</strong>";
// console.log(link);

//!          Зміна стилів через JavaScript
//todo       Ми використовуватимемо .style для зміни CSS напряму через JS.

//? ✅ Завдання 1 — Зміни колір тексту
// Зміни колір тексту на "blue"
// const title = document.querySelector(".title");
// title.style.color = "blue";

//? ✅ Завдання 2 — Задай фон для елемента
// Задай фоновий колір: lightyellow
// const backround = document.querySelector(".desc");
// backround.style.backgroundColor = "lightyellow";

//? ✅ Завдання 3 — Зроби шрифт більшим
// Зміни розмір шрифту на "24px"
// const box = document.querySelector(".box");
// box.style.fontSize = "24px";

//? ✅ Завдання 4 — Жирний текст:
// const bold = document.querySelector(".note");
// bold.style.fontWeight = "bold";

//? ✅ Завдання 5 — Рамка кнопки:
// const button = document.querySelector(".btn");
// button.style.border = "2px solid green";

//!                classList
//todo    Це дозволяє:
//todo    ✅ Додавати / забирати класи CSS
//todo    ✅ Робити перемикання стилів
//todo    ✅ Реалізовувати ефекти, теми, анімації, переключення

// const bodyColor = document.querySelector("body");
// bodyColor.style.backgroundColor = "lightgreen";

//? ✅ Завдання 1 — Додай клас
// Додай клас "highlight"
// const title = document.querySelector(".title");
// title.classList.add("highlight");

//? ✅ Завдання 2 — Видали клас
// const text = document.querySelector(".text");
// text.classList.remove("bold");

//? ✅ Завдання 3 — Перевір наявність класу
// const activClass = document.querySelector(".active");
// activClass.classList.contains("active")
//   ? console.log("АКТИВНИЙ")
//   : console.log("НЕ АКТИВНИЙ");

//? ✅ Завдання 4 — Перемикач класу (toggle)
// const button = document.querySelector(".btn");
// button.addEventListener("click", () => {
//   button.classList.toggle("on");
// });

//? ✅ Завдання 5 — Натискання: змінити клас заголовка
// const hederTitle = document.querySelector(".header");
// const changerBtn = document.querySelector(".changer");
// changerBtn.addEventListener("click", () => {
//   hederTitle.classList.toggle("active-header");
// });

//!            Події в DOM  addEventListener
//? click — натискання кнопки
//? input — введення тексту
//? submit — надсилання форми

//todo                         click

// const message = document.querySelector(".message");
// const button = document.querySelector(".btn");

// button.addEventListener("click", () => {
//   message.textContent = "Ви натиснули кнопку!";
//   const isActive = button.classList.toggle("active");
//   button.style.backgroundColor = isActive ? "red" : "initial";
// });

//?   Завдання 1 — Зміна тексту при кліку
//?   Є кнопка та заголовок.
//? Коли ти натискаєш на кнопку — текст заголовка змінюється на "Текст змінено!".

// const message = document.querySelector(".title");
// const button = document.querySelector(".btn");

// button.addEventListener("click", () => {
//   message.textContent = "Текст змінено!";
//   const activeBtn = button.classList.toggle("active");
//   button.style.backgroundColor = activeBtn ? "red" : "initial";
// });

//? Завдання 2
// Зміни колір тексту заголовка на зелений при кліку на кнопку
// Знайди кнопку і заголовок
// Додай слухача події click на кнопку
// При кліку змінюй стиль заголовка color на "green"

// const button = document.querySelector(".btn");
// const title = document.querySelector(".title");

// const activeButton = () => {
//   const isActive = title.classList.toggle("active");
//   title.style.color = isActive ? "green" : "initial";
// };
// button.addEventListener("click", activeButton);

//? Завдання 3
// При кліку на кнопку покажи повідомлення в <p> — "Кнопка натиснута!"
// Знайди кнопку і елемент <p> для повідомлення
// Встанови текст елемента <p> при кліку

// const button = document.querySelector(".btn");
// const message = document.querySelector(".message");

// const clickText = () => {
//   message.textContent = "Кнопку натиснуто!";
//   message.classList.toggle("active");
// };

// button.addEventListener("click", clickText);

//? Зміни колір фону body при кліку на кнопку,
//? а також напиши, який колір зараз встановлено в span.color.

// const color = document.querySelector(".color");
// const button = document.querySelector(".btn");
// const body = document.querySelector("body");

// function getRandomColorBtn() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// function getRandomColorBody() {
//   const r = Math.floor(Math.random() * 256); // від 0 до 255
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// button.addEventListener("click", () => {
//   const randomColor1 = getRandomColorBody();
//   const randomColor2 = getRandomColorBtn();
//   body.style.backgroundColor = randomColor1;
//   button.style.backgroundColor = randomColor2;
//   color.style.color = randomColor2;
//   color.textContent = `Color body: ${randomColor1} | Color button: ${randomColor2}`;
// });

//?_________________________________________________________________________

// const buttonEl = document.querySelector(".toggle-btn");
// const textEl = document.querySelector(".text");

// buttonEl.addEventListener("click", () => {
//   textEl.classList.toggle("hide-show");
//   textEl.style.color = "orange";
//   buttonEl.style.borderColor = "red";
//   buttonEl.style.color = "green";
// });

//?_________________________________________________________________________

// const buttonEl = document.querySelector(".toggle-btn");
// const textEl = document.querySelector(".text");
// textEl.textContent = "🔞 18+";
// buttonEl.addEventListener("click", () => {
//   const hideShow = textEl.classList.toggle("hide-show");
//   buttonEl.textContent = hideShow ? "Показати" : "Приховати";
// });

//?_________________________________________________________________________

//todo                         input

//? ✅ Завдання 1 — Виведи в консоль те, що вводить користувач

// const input = document.querySelector(".input");
// input.addEventListener("input", () => {
//   console.log(input.value);
// });

//? ✅ Завдання 2 — Показуй текст одразу на екрані

// const input = document.querySelector(".input");
// const output = document.querySelector(".output");

// input.addEventListener("input", () => {
//   output.textContent = input.value;
// });

//? ✅ Завдання 3 — Якщо поле порожнє — покажи "Anonymous"

// const nameUser = document.querySelector(".name");
// const greeting = document.querySelector(".greeting");

// nameUser.addEventListener("input", () => {
//   const userName = nameUser.value.trim();
//   greeting.textContent = userName === "" ? "Anonymous" : userName;
// });

//? ✅ Завдання 4 — Порахуй скільки символів введено
// Виводь кількість символів в <p> при кожному вводі

// const textInput = document.querySelector(".text-input");
// const lengthInfo = document.querySelector(".length-info");

// textInput.addEventListener("input", () => {
//   const length = textInput.value.length;
//   lengthInfo.textContent = `Кількість символів: ${length}`;
//   lengthInfo.style.color = length >= 10 ? "red" : "black";
// });

//? ✅ Завдання 5 — Перевірка пароля
// Якщо введено 6 і більше симвом силів — покажи "Пароль надійний"

// const password = document.querySelector(".password");
// const status = document.querySelector(".status");

// password.addEventListener("input", () => {
//   const length = password.value.length;
//   if (length >= 6) {
//     status.textContent = "Пароль надійний";
//   } else {
//     status.textContent = "Пароль занадто короткий";
//   }
// });

//todo                         submit

//? 🔰 Завдання 1 — Перехопи відправку форми
// const loginForm = document.querySelector(".login-form");
// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("Форма відправлена ✅");
// });

//? ✅ Завдання 2:
// При відправці форми (submit) — зупини стандартну дію.
// Отримай значення з полів username і password.
// Виведи їх у консоль.

// const loginForm = document.querySelector(".login-form");
// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formEl = event.target.elements;
//   const username = formEl.username.value;
//   const password = formEl.password.value;

//   console.log("Ім'я користувача: ", username);
//   console.log("Пароль: ", password);
// });

// let totalPrice = 0;
// function makeTransaction(quantity, pricePerDroid) {
//   totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// let totalPrice = 0;
// function getShippingMessage(country, price, deliveryFee) {
//   totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// function getElementWidth(content, padding, border) {
//   const content1 = Number.parseFloat(content);
//   const content2 = Number.parseFloat(padding);
//   const content3 = Number.parseFloat(border);

//   const total = content1 + content2 * 2 + content3 * 2;
//   return total;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// let totalPrice = 0;
// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   totalPrice = quantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     return "Insufficient funds!";
//   }
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else if (message.length > maxLength) {
//     return message.slice(0, maxLength) + "...";
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// function checkForSpam(message) {
//   const message1 = message.toLowerCase();
//   if (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale") === true
//   ) {
//     return true;
//   }
//   return false;
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function getShippingCost(country) {
//   let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       break;
//     case "Chile":
//       price = 250;
//       break;
//     case "Australia":
//       price = 170;
//       break;
//     case "Jamaica":
//       price = 120;
//       break;
//     default:
//       return "Sorry, there is no delivery to your country";
//   }
//   return `Shipping to ${country} will cost ${price} credits`;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ");
//   return slug.join("-");
// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArrey = [];
//   const newArr = firstArray.concat(secondArray);
//   for (let i = 0; i < newArr.length; i++) {
//     newArrey += newArr;
//     console.log();
//   }
//   return newArrey.length > maxLength ? newArr.slice(0, maxLength) : newArr;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const userProfile = {
//   name: "Ярослав 👨‍💻",
//   age: 28,
//   country: "Україна 🇺🇦",
//   hobby: "Кодування 💻",
//   isOnline: true,
//   favoriteEmoji: "🔥",
// };

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps(userProfile));

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (let key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps(userProfile));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const valuesObject = Object.values(salaries);
//   for (let key of valuesObject) {
//     totalSalary += key;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let key of colors) {
//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const key of products) {
//     if (productName === key.name) {
//       return key.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.getTotalPrice());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(32, 6, 13, 19, 8));

// function addOverNum(value, ...args) {
//   let result = 0;
//   for (const num of args) {
//     if (num > value) {
//       result += num;
//     }
//   }
//   return result;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// function isEnoughCapacity(products, containerSize) {
//   const price = Object.values(products);
//   let totalPrice = 0;
//   for (const num of price) {
//     totalPrice += num;
//   }
//   return totalPrice <= containerSize ? true : false;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// function calcAverageCalories(days) {
//   let result = 0;
//   const totalCalories = Object.values(days);
//   for (const num of totalCalories) {
//     result += num.calories;
//   }
//   return result / 7;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     return (this.username = newName);
//   },
//   updatePlayTime(hours) {
//     return (this.playTime += hours);
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     return (this.username = newName);
//   },
//   updatePlayTime(hours) {
//     return this.playTime * hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// const player = {
//   name: "Max",
//   level: 1,
//   experience: 0,
//   energy: 100,

//   gainExperience(points) {
//     this.experience += points;
//     while (this.experience >= 100) {
//       this.level += 1;
//       this.experience -= 100;
//     }
//   },
//   useEnergy(amount) {
//     this.energy -= amount;
//     if (this.energy < 0) {
//       this.energy = 0;
//     }
//   },
//   getStatus() {
//     return `Player: ${this.name} | Level: ${this.level} | XP: ${this.experience} | Energy: ${this.energy}`;
//   },
// };
// player.gainExperience(40);
// player.useEnergy(30);
// console.log(player.getStatus());
// // Player: Max | Level: 1 | XP: 40 | Energy: 70
// player.gainExperience(70);
// console.log(player.getStatus());
// // Player: Max | Level: 2 | XP: 10 | Energy: 70

// function add(x, y) {
//   return x + y;
// }
// function multiply(x, y, callback) {
//   return callback(x, y);
// }
// console.log(multiply(5, 6, add));

// function divide(x, y) {
//   return x / y;
// }
// function getMax(x, y) {
//   return x > y ? x : y;
// }
// function calculator(x, y, callback) {
//   return callback(x, y);
// }

// console.log(calculator(10, 2, divide)); // 👉 5
// console.log(calculator(10, 2, getMax)); // 👉 10

// function filterArray(numbers, value) {
//   const array = [];
//   numbers.forEach(function (element) {
//     if (element > value) {
//       array.push(element);
//     }
//   });
//   return array;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// const names = ["Оля", "Іван", "Марія", "Петро"];
// names.forEach(function (element) {
//   console.log(element);
// });

// const numbers = [3, 7, 10, 5];
// let total = 0;
// numbers.forEach(function (num) {
//   total += num;
// });
// console.log(total);

// const words = ["яблуко", "груша", "кавун", "ананас", "персик"];
// words.forEach(function (word) {
//   console.log(Math.max(word.length));
// });

// const mixed = [-2, 5, -10, 0, 8, 4];
// let totalNum = 0;
// mixed.forEach(function (element) {
//   if (element > 0) {
//     totalNum += element;
//   }
// });
// console.log(totalNum);

// const users = ["Анна", "Богдан", "Катя"];
// users.forEach(function (user) {
//   console.log(`Привіт ${user}`);
// });

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// const changeEven = (numbers, value) => {
//   const newArrey = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       let result = number + value;
//       newArrey.push(result);
//     } else {
//       newArrey.push(number);
//     }
//   });
//   return newArrey;
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));

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

// const products = [
//   { name: "🍕 Піца", price: 200 },
//   { name: "🍔 Бургер", price: 150 },
//   { name: "🥗 Салат", price: 120 },
// ];

// const prodPrice = products.map((product) => {
//   return {
//     name: product.name,
//     price: product.price - (product.price * 20) / 100,
//   };
// });
// console.log(prodPrice);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// const oddNumbers = numbers.filter((num) => num % 2 === 1);

// console.log(evenNumbers);
// console.log(oddNumbers);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((playTime, player) => playTime + player);
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);

const cart = [
  { name: "🍎", price: 30, quantity: 2 },
  { name: "🍌", price: 20, quantity: 5 },
  { name: "🍇", price: 50, quantity: 1 },
];

const totalPrice = cart.reduce((acc, num) => acc + num.price, 0);
console.log(totalPrice);
