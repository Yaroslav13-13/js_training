// const age = 37;
// const text = "hello";
// const youAre = true;
// console.log(typeof age);
// console.log(typeof text);
// console.log(typeof youAre);

// let першеІмя = "Іван";
// let другеІмя = "Петренко";
// console.log(`Hello ${першеІмя} ${другеІмя}!`);

// let city = 'Lviv';
// city = 'Skhidnitsia';
// console.log(city);

// const a = 8;
// const b = 5;
// const total = a >= b;
// console.log(total);

// let x = 5;
// let y = "apple";
// console.log(x + y);

// let name = "Yaroslav";
// console.log(`"hello, " + ${name} + " !"`)

// const message = "Я вивчаю Java Script";
// console.log(message.length);  // У JavaScript властивість .length використовується для отримання довжини

// let text1 = "JavaScript";
// console.log(text1.toUpperCase()); // Метод toUpperCase() у JavaScript використовується для перетворення всіх літер рядка на великі (прописні).
// console.log(text1.length);

// const word = "Програмування";
// console.log(word.slice(3, 7)); // Метод slice() використовується для отримання частини масиву або рядка без зміни оригіналу.

//? console.log(Number("5"));
//! console.log(Number(true));
//TODO console.log(Number(false));
//* console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number("Yaroslav"));

//! console.log(5 + true);

//* console.log( 5 >= "5")
//* console.log( "2" >= "12")

//! console.log("4" == 4);
//! console.log("4" === 4);

//* console.log(1 == true);
//* console.log(1 === true);

// console.log("0" == false); //!true
// console.log("A" < "a"); //!true

// let width = "50px";
// width = Number(width); //! NaN
// width = Number.parseInt(width); //* 50

// let height = "200.53px";
// height = Number.parseInt(height); //!200
// height = Number.parseFloat(height); //*200.53

// console.log(height);

//! Math — це вбудований об’єкт, який надає функції та константи для виконання математичних обчислень

// const value = 27.5;
// console.log(Math.floor(value)); //* 27 - Math.floor(x) — округлення вниз
// console.log(Math.ceil(value)); //* 28 -  Math.ceil(x) — округлення вгору
// console.log(Math.round(value)); //* 28 - Math.round(x) — округлення до найближчого цілого
// console.log(Math.trunc(value)); //* 27 - Math.trunc(x) — відкидає дробову частину

//!Function — це підпрограма, яку можна використовувати повторно. Вона може приймати аргументи (вхідні дані), виконувати дії й повертати результат.

// function add(x, y) {
//     const total = x + y;
//     return ;
// }

// const a = add(5, 6); // const a = 11

// console.log(a);

// function makeMessage (name, price) {
//     return `You picked ${name}, price per item is ${price} credits`;
//     };
// makeMessage("Radar", 6150);
// console.log(makeMessage("Radar", 6150));

// const orderedQuantity = 5;
// const pricePerItem = 100;
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     return orderedQuantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100));

// function isAdult(age) {
//     return age >= 18
// }

// console.log(isAdult(18));

// function getTicketPrice(day) {
//     switch (day) {
//         case "monday": return 100;
//         case "thursday": return 90;
//         case "wednesday": return 80;
//         case "whursday": return 90;
//         case "friday": return 120;
//         case "saturday": return 150;
//         case "sunday": return 150;
//         default: return "Invalid day";
//     }
// }

// console.log(getTicketPrice("friday"));    // 100
// console.log(getTicketPrice("whursday")); // 80
// console.log(getTicketPrice("Holiday"));   // "Invalid day"

// function getScreenType(screenWidth) {
//     const sm = 320;
//     const md = 768;
//     const lg = 1200;

//     if (screenWidth <= sm) {
//       return "Mobile screen";
//     } else if (screenWidth > sm && screenWidth <= md) {
//       return "Tablet screen";
//     } else if (screenWidth > md && screenWidth <= lg) {
//       return "Desktop screen";
//     } else {
//       return "Godzilla screen";
//     }
//   }

//TODO  console.log(getScreenType(700));  // "Tablet screen"
//TODO  console.log(getScreenType(1200)); // "Desktop screen"
//TODO  console.log(getScreenType(1500)); // "Godzilla screen"
//TODO  console.log(getScreenType(320));  // "Mobile screen"

// let num = 7;
// num = 8;
// console.log(num % 2 === 0 ? "Парне" : "Не парне");

//TODO function getSubstring(string, length) {
//TODO     return string.slice(0, length)
//TODO }
//! console.log(getSubstring("hello world", 3));
//! console.log(getSubstring("hello world", 5));
//! console.log(getSubstring("hello world", 8));
//! console.log(getSubstring("hello world", 11));
//! console.log(getSubstring("hello world", 0));

//?function normalizeInput(input, to) {
//?    if (to === "upper") {
//?        return input.toUpperCase();
//?    }
//?    else if (to === "lower") {
//?        return input.toLowerCase();
//?    }
//?    else {
//?    }
//?  }
// TODO console.log(normalizeInput("This ISN'T SpaM", "lower"));
// TODO console.log(normalizeInput("This ISN'T SpaM", "upper"));
// TODO console.log(normalizeInput("Big SALE", "lower"));

//? function checkForName(fullName, firstName) {
//?     return fullName.toLowerCase().includes(firstName.toLowerCase());
//?   }

//* console.log(checkForName("Jason Neis", "Jason"));
//* console.log(checkForName("Jason Neis", "jAsOn"));
//* console.log(checkForName("Jason Neis", "Jacob"));
//* console.log(checkForName("Caty Stars", "Caty"));
//* console.log(checkForName("Caty Stars", "cAtY"));
//* console.log(checkForName("Caty Stars", "Andromeda"));

//! Метод endsWith()

//* function checkFileExtension(fileName, ext) {
//*     if (fileName.endsWith(ext)) {
//*         return "File extension matches";
//*     }
//*     else {
//*         return "File extension does not match";
//*     }
//*   }

//* console.log(checkFileExtension("styles.css", ".css"));
//* console.log(checkFileExtension("styles.css", ".js"));
//* console.log(checkFileExtension("app.js", ".js"));
//* console.log(checkFileExtension("app.js", ".html"));
//* console.log(checkFileExtension("index.html", ".html"));

//TODO const message = "Welcome to Bahamas";
//TODO const index = message.indexOf("mas");
//TODO console.log(index);

//TODO const sum = 150;
//TODO if (sum >= 100) {
//TODO     console.log("big beer");
//TODO }
//TODO else {
//TODO     console.log("small beer");
//TODO }

//* const points = 1000;
//* if (points > 1500) {
//*     console.log("lewel-1")
//* }
//* else if (points > 500) {
//*     console.log("lewel-2")
//* }
//* else if (points <500) {
//*     console.log("lewel-3")
//* }
//* else {
//*     console.log("lewel-4")
//* }

//!                Тернарний оператор

// *const balance = 500;

// *const message = balance >= 0 ? `Positive` : "Negative";

// *var message = balance >= 1000 ? `more 1000` : balance >= 500 ? "more 500" : "NON"

// *console.log(message);

//! __________________________________________________

// const a = 15;
// if (true) {
//     const b = 10;
//     // console.log(c);
// }

// if (true) {
//     const c = 5;
//     console.log(b);
// }

// console.log(b);

//TODO const hours = 14;
//TODO const minutes = 25;

//! const time;

//! if (minutes > 0) {
//!     time = `${hours} г. ${minutes} хв.`;
//! } else {
//!     time = `${hours} г.`;
//! }
//! console.log(time);

// * const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

//* console.log(message);

// !_______________________________________________________
//? const deadline = 2;

//? if (deadline === 0) {
//?     console.log("Today");
//?     }
//?     else if (deadline === 1) {
//?         console.log("Tomorrow")
//? }
//?     else if (deadline === 2) {
//?         console.log("Owermorrow")
//?     }
//? else {
//?     console.log("Date in the future")
//? }

//TODO const deadline = 3;
//TODO switch (deadline) {
//TODO     case 0:
//TODO         console.log("Today");
//TODO         break;
//TODO     case 1:
//TODO             console.log("Tomorrow")
//TODO         break;
//TODO     case 2:
//TODO             console.log("Owermorrow")
//TODO         break;
//TODO     default:
//TODO         console.log("Date in the future");
//TODO }

// !       switch (case, break)

//* const user = "David"
//* switch (user) {
//*     case "Maria":
//*         console.log("case-1")
//*         break;
//*     case "Yura":
//*         console.log("case-2")
//*         break;
//*     case "David":
//*         console.log("winner")
//*         break;
//*     default:
//*         console.log("default")
//* }

//! _________________________________________________________

//* const option = 3;
//* let message ="";
//* switch (option) {
//*      case 1:
//*          message = "Ви зможете забрати товар завтра"
//*          break;
//*      case 2:
//*          message = "Курєр доставить замовлення завтра"
//*        break;
//*      case 3:
//*          message="посилка буде відправлена сьогодні"
//*          break;
//*      default:
//*          message="Вам передзвонить менеджер"
//* }

//* console.log(message)

//! console.log(Boolean(false));
//! console.log(Boolean(NaN));
//! console.log(Boolean(null));
//! console.log(Boolean(undefined));
//! console.log(Boolean(0));
//! console.log(Boolean(""));

//* console.log(Boolean(true));
//* console.log(Boolean(5));
//* console.log(Boolean(5.5));
//* console.log(Boolean(-5));
//* console.log(Boolean("-5"));

//! ___________________Логічне «І» (&&)_______________________

// console.log(5 && 6);
// console.log(null && 6);
// console.log(5 && 0);
// console.log(undefined && false);

//* function isNumberInRange(start, end, number) {
//*     return number >= start && number <= end;
//* }
//* console.log(isNumberInRange(50, 30, 17));

//! ___________________Логічне «АБО» (||)_______________________

// console.log(false || 5);
// console.log(false || NaN);
// console.log("string" || false);

//* function checkAccess(subType) {
//*     return subType === "pro" || subType === "vip";
//* }

//* console.log(checkAccess("pro"));
//* console.log(checkAccess("ooo"));
//* console.log(checkAccess("vip"));

//! ___________________Логічне «НІ» (!)_______________________

// console.log(!false); //true
// console.log(!true); //falce
// console.log(!5); //falce

// const sub = "free";
// let canConnect = sub === "pro" || sub === "vip";

// console.log(canConnect);

// if (sub === "pro" || sub === "vip") {
//   canConnect = true;
// } else {
//   canConnect = false;
// }

// console.log(canConnect);

// const isOnline = true;
// const isFrend = true;
// const isDnD = false;

// const canOpenChat = isOnline && isFrend && !isDnD;
// console.log("Can open", canOpenChat);

// ! Урок 4 (Методи рядків)

//? ______Метод:__"slice()" ________________

//* const user = "David Pron";
//* const str = user.slice(5);
//* console.log(str);

//? __ ___Метод:__"toLowerCase()"/"toUpperCase()"____

//* const user = "DaVid pRoN";
//* console.log(user.toLowerCase());
//* console.log(user.toUpperCase());

//? _____Метод:__"includes()"______________

// * const user = "David Pron";
// * console.log(user.includes(" p"));
// * console.log(user.toLocaleLowerCase().includes(" p"));

//? _____Метод:__"startsWith()"/"endsWith()"______________

//* const user = "David Pron";
//* console.log(user.startsWith("dav"));
//* console.log(user.toLowerCase().startsWith("dav"));

//* const user = "David Pron";
//* console.log(user.endsWith("ron"));
//* console.log(user.toUpperCase().endsWith("Ron"));

//? _____Метод:__"indexof()"______________

//* const user = "David Pron";
//* console.log(user.indexOf("d"));
//* console.log(user.indexOf(" "));

//? _____Метод:__"trim()"______________

//* const user = "    David Pron    ";
//* console.log(user);
//* console.log(user.trim());

//?__________________________________________________

// let link = "http://my-site.com/abount/";
// mySite = link.endsWith("/");
// console.log(mySite);

// let link = "http://my-site.com/abount";
// if (!link.endsWith("/")) {
//   console.log("error");
//   link += "/";
// }

// let link = "http://my-site.com/abount";
// if (!link.endsWith("/") && link.includes("my-sit")) {
//   console.log("syper");
//   link += "/";
// }
// console.log(link);

// if (link.toLowerCase().includes("my-site")) {
//   link.endsWith("/");
//   link += "/";
//   console.log(link);
// }
//?__________________________________________________

// const blacklisttedWord = "sale";
// const blacklisttedWord2 = "spam";
// let string = "Hello world SALE this week, don`tmiss out SpAm";
// console.log(string.toLowerCase().includes(blacklisttedWord));
// console.log(string.toLowerCase().includes(blacklisttedWord2));

//TODO _____________________Цикли _____________________
//TODO ________________________________________________

//? __________________Цикли:__"for(){}"____________________

//* console.log("Beafore");
//* for (let i = 0; i < 5; i += 1) {
//*   console.log(i);
//* }
//* console.log("After");

//* for (let i = 10; i > 0; i -= 2) {
//*   console.log(i);
//* }

//* const str = "David Pron";

//* for (let i = 0; i < str.length; i += 1) {
//*   if (str[i] === " ") {
//*     break;
//*   }
//*   console.log(str[i]);
//* }
//* console.log(str.);
//*___________________________________________________

//TODO ________________Інкремент ++/Декремент --_______
//TODO ________________________________________________

// let a = 10;
// let b = a;

// a++; //Поствіксний
// ++a; //Префіксний

// console.log(a);
// console.log(b);
// console.log(b + a);

//? __________________Цикли:__"while(){}"_______________

// console.log("before");
// let counter = 2;
// while (counter < 5) {
//   console.log(counter);
//   counter++;
// }
// console.log("after");

// let a = 10;
// do {
//   console.log(a);
//   a++;
// } while (a < 6);

// ?---------------------------------------------------------------
//TODO    Напиши цикл for, який виводить у консоль
//TODO    браузера числа за зростанням від a до b,
//TODO    але тільки якщо число кратне 5.

// const a = 20;
// const b = 100;

// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

//TODO    Напиши скрипт, який підраховує суму всіх парних чисел,
//TODO    які входять в діапазон чисел у змінних від min до max.
//TODO    Наприклад якщо min=0 і max=5 то діапазон 0-5, і в
//TODO    ньому два парних числа - 2 і 4, їх сума 6.

// const min = 0;
// const max = 5;
// let total = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

//*---------------- Варіант вирішення задачі 2-------------------

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     continue;
//   }
//   console.log(i);
// }

//TODO    Доповни код таким чином, щоб у змінну number
//TODO    записувалося перше число у проміжку від start до end,
//TODO    яке ділиться на 5 без остачі.

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

//TODO    Функція findNumber(start, end, divisor)
//TODO    приймає три параметра, які є цілими числами.
//TODO    Доповни код функції таким чином, щоб вона:
//TODO    повертала перше число у діапазоні від start до end включно,
//TODO    яке ділиться на divisor без остачі
//TODO    не використовуй оператор break

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(2, 6, 5));

//? ===================================================
//! ___________________________________________________
//! ___________________________________________________

//!__________ Модуль 3. Масиви і функції______________

//?                  [0]      [1]     [2]      [3]
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits[0] + " & " + fruits[3] + " & " + fruits[1]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// planets[0] = "Jupiter";
// console.log(planets[0]);

// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

//! -----------Присвоєння за посиланням і за значенням--------------

// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a = 44;
// console.log(a);
// console.log(b);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1[1] = 1;
// arr2[2] = 1;

// console.log(arr1);
// console.log(arr2);

// const array = [1, true, "Poly"];
// console.log(array + "");
// console.log(array + "5");

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

// const emptyArray = [];
// const nonEmptyArray = [false];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if (emptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }

// if (nonEmptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }

// const array = [false];
// const result = array ? "A" : "B";
// console.log(result);

//!______________Методи масиву_______________

//!______________Метод join()________________

// const words = ["JavaScript", "is", "amazing"];
// console.log(words);
// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("-"));

// function transformString(string) {
//   const words = string.split("-");
//   return words.join("_");
// }
// console.log(transformString("david_pron"));

// function getLength(array) {
//   let arrayLength = array.join("").length;
//   return arrayLength;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
//TODO___________________________________________________________

// const fruits = ["Mango", "hurries", "to", "the", "train"];
// const str = fruits.join("_");
// console.log(str);

//!______________Метод split()________________\\

// const name = "Orange";
// const letters = name.split("");
// console.log(letters);

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words);

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts);

// function calculateEngravingPrice(message, pricePerWord) {
//   let word = message.split(" ");
//   let totalWord = word.length;
//   return totalWord * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));

//TODO___________________________________________________________

// const fruits = ["Mango", "hurries", "to", "the", "train"];
// const str = fruits.join(" ");
// const arr = str.split("");
// console.log(typeof str);

// console.log(arr);

//!______________Метод slice()________________\\

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
//                         (begin, end)
// console.log(planets.slice(0, 4));
// console.log(planets.slice(1, 3));
// console.log(planets.slice());
// console.log(planets.slice(4));
// console.log(planets.slice(-2));
// const result = planets.slice(2, 4);
// console.log(result);

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//TODO___________________________________________________________

// const fruits = ["Mango", "hurries", "to", "the", "train"];
// const arr = fruits.slice(2);
// console.log(arr);

//!______________Метод concat()________________\\

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);
// console.log(result);

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(secondArray.concat(firstArray, thirdArray));
// console.log(thirdArray.concat(secondArray, firstArray));

//?  Оголоси змінну allClients та доповни код таким чином,
//? щоб її значенням було посилання на масив,
//?  що складається з усіх елементів масивів oldClients і newClients.
//?   Спочатку мають іти елементи з масива oldClients, а потім з newClients.

//* const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
//* const newClients = ["Peach", "Houston"];
//* let allClients = oldClients.concat(newClients);
//* console.log(allClients);
//?___________________________________________________________

//!______________Метод indexOf()________________\\

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly"));
// console.log(clients.indexOf("Monkong"));

//? Функція getSlice(array, value) приймає два параметра:
//? array - масив довільних елементів
//? value - значення елемента масиву для пошуку
//? Доповни код функції getSlice(array, value) так,
//?   щоб вона виконувала пошук значення value у масиві array і повертала:
//? порожній масив, якщо в array немає елемента зі значенням value
//? підмасив, що починається з початку array і до елемента зі значенням
//?  value включно, якщо такий елемент є в array

//* function getSlice(array, value) {
//*   const search = array.indexOf(value);
//*   if (search === -1) {
//*     return [];
//*   }
//*   return array.slice(0, search + 1);
//* }

//* console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));

//!______________Метод push()________________\\

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// console.log(planets);
// planets.push("Saturn", "Neptune");
// console.log(planets);

// const tags = [];
// for (let i = 0; i < 3; i += 1) {
//   tags.push(`tag-${i}`);
// }
// console.log(tags); // ["tag-0", "tag-1", "tag-2"]

//? Функція createArrayOfNumbers(min, max) приймає два параметра:
//? min - ціле число, з якого починаються обчислення
//? max - ціле число, до якого включно триватимуть обчислення
//? Доповни код функції createArrayOfNumbers(min, max) таким чином,
//? щоб вона повертала масив усіх цілих чисел від значення min до maxвключно.

//* function createArrayOfNumbers(min, max) {
//*   const numbers = [];
//*   for (let i = min; i < max; i += 1) {
//*     numbers.push(i);
//*   }
//*   return numbers;
//* }
//* console.log(createArrayOfNumbers(29, 34));

//!______________Ітерація по масиву________________\\

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i ++ 1) {
//   console.log(planets[i]);
// }

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }
// console.log(getEvenNumbers(8, 8));

//!______________Метод push()________________\\

// function checkStorage(storage, item) {
//   const lowerItem = item.toLowerCase();
//   const isAvailable = storage.some(
//     (product) => product.toLowerCase() === lowerItem
//   );
//   if (isAvailable) {
//     return `${item} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));

// const planets = ["Earth", "Mars", "Venus", "Earth"];

// for (const planet of planets) {
//   console.log(planet);
// }

//!______________ Цикл for...of ________________\\\

//? for (const element of array) {
//?   // тіло циклу
//? }
//* element — це змінна, в яку на кожній ітерації буде
//* записуватися поточний елемент масиву.
//* array — це вихідний масив, який ми хочемо перебрати.

//* const planets = ["Earth", "Mars", "Venus"];
//* for (const planet of planets) {
//*   console.log(planet);
//* }

//!______________ Функції частина 2 ________________\\

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1));

// const arr = [1, 2, 3];
// const result = courses.concat(arr, hhhh, jjj);
// console.log(result);

// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL "];
// courses.push("Node.js", "Python");
// const a = courses.pop();
// console.log("a", a);
// console.log("courses", courses);

// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL "];
// for (let i = 0; i < courses.length; i++) {
//   console.log(courses[i]);
// }

// for (const item of courses) {
//   console.log(item);
// console.table(item);
// console.warn(item);
// console.error(item);
// console.info(item);
// console.dir(item);
// }

// const value = "8 10";

// const arr = value.split(" ");
// // const res = (Number(arr[0]) + Number(arr[1])) * 2;
// const res = (+arr[0] + +arr[1]) * 2;

// console.log(arr);
// console.log(res);

// TODO__________________________________________________
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }
// console.log(total);

//?    Варіант 2
// for (const number of numbers) {
//   if (!(number % 2)) {
//     total += number;
//   }
// }
// console.log(total);

//?     Варіант 3

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   total += number;
// }
// console.log(total);
// TODO__________________________________________________

// const fruits = ["яблуко", "груша", "слива"];
// console.log(fruits[1]);
// console.log(fruits.length[]);

// const animals = ["кіт", "пес", "папуга", "хом’як"];
// for (const animal of animals) {
//   console.log(animal);
// }

// const animals = ["кіт", "пес", "папуга", "хом’як"];
// for (const animal of animals) {
//   if (animal.length > 4) {
//     console.log(animal);
//   }
// }

// const animals = ["кіт", "пес", "папуга", "хом’як"];
// const longNames = [];
// for (const animal of animals) {
//   if (animal.length > 4) {
//     longNames.push(animal);
//   }
// }
// console.log(longNames);

// const values = [2, 17, 94, 1, 23, 37];
// let min;
// for (let i = 0; i < values.length; i++) {
//   if (i === 0) {
//     min = values[i];
//   } else if (values[i] < min) {
//     min = values[i];
//   }
// }
// console.log(min);

//!______________  Відео-лекція 6  _____________

// function foo() {
//   const arr = Array.from(arguments);
//   console.log(Array.isArray(arguments));
//   console.log(Array.isArray(arr));
// }
// foo(1, 2, 3);
// foo(10, 11, 12, 13, 14, 15);

//?_______________________________________

// const add = function () {
//   const arr = Array.from(arguments);
//   let total = 0;
//   for (const item of arr) {
//     total += item;
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(10, 20, 30, 4, 5));

//?_______________________________________

// function number() {
//   const arr = Array.from(arguments);
//   let total = 0;
//   for (const item of arr) {
//     total += arr;
//   }
//   return total / arr;
// }

// console.log(number(1, 2, 3));
// console.log(number(10, 12, 31, 5));
// console.log(number(1, 22, 4, 7, 9, 8));

//?_______________________________________

// function number() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total / arguments.length;
// }

// console.log(number(1, 2, 3));
// console.log(number(10, 12, 31, 5));
// console.log(number(1, 22, 4, 7, 9, 8));

//!----------------  Об'єкти  ---------------------!\\

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.name);
// console.log(apartment.tags);
// console.log(apartment.owner.name);

// сonst playlist = ["My playlist", 5];

//!----------------Додавання властивостей-------------------!\\

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };
// console.log(apartment);

//?____________________________________________________________?\\

//!---Синтаксис коротких властивостей (shorthand properties)---!\\

// const name = "Henry Sibola";
// const age = 25;
// const user = {
//   name: name,
//   age: age,
// };
// console.log(user.name);
// console.log(user.age);

//* const name = "Henry Sibola";
//* const age = 25;
//* const user = {
//?   name,  // Замість name:name, використали name
//?   age,   // Замість age:age, використали age.
//* };
//* console.log(user.name);
//* console.log(user.age);

//TODO   Доповни код оголошення об'єкта таким чином, щоб у нього були властивості
//TODO   name, price, image і tags зі значеннями зі змінних з аналогічними іменами.
//TODO   Обов'язково використовуй синтаксис коротких властивостей.

//* const name = "Repair Droid";
//* const price = 2500;
//* const image = "https://via.placeholder.com/640x480";
//* const tags = ["on sale", "trending", "best buy"];
//* const product = {
//*   name,
//*   price,
//*   image,
//*   tags,
//* };
//* console.log(product);

//?__________________________________________________________?\\

//!---Синтаксис обчислювальних властивостей (computed properties)---!\\

// const propName = "name";
// const user = {
//   age: 25,
// };
// user[propName] = "Henry Sibola";
// console.log(user.name);

//* const propName = "name";
//* const user = {
//*   age: 25,
//*   [propName]: "Henry Sibola",
//* };
//* console.log(user.name);

//?__________________________________________________________?\\

//!================= Перебір об'єкта =================!\\

//TODO -------------- Цикл for...in ----------------!\\

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

//TODO --------------- Метод Object.keys() ----------------!\\

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

// const timePlayers = {
//   players: [
//     {
//       id: "player-1",
//       name: "Mango",
//       timePlayed: 310,
//       points: 54,
//       online: true,
//     },
//     {
//       id: "player-2",
//       name: "Poly",
//       timePlayed: 470,
//       points: 92,
//       online: false,
//     },
//     { id: "player-3", name: "Ajax", timePlayed: 180, points: 48, online: true },
//     {
//       id: "player-4",
//       name: "Kiwi",
//       timePlayed: 250,
//       points: 61,
//       online: false,
//     },
//     { id: "player-5", name: "Luna", timePlayed: 375, points: 80, online: true },
//   ],
//   calcTimePlayers(playersName) {
//     const player = this.players.find((item) => item.name === playersName);
//     if (!player) {
//       return `${playersName} not found`;
//     }
//     return player.timePlayed / player.points;
//   },
// };
// console.log(timePlayers.calcTimePlayers("Ajax"));
//? _________________________________________________________________________

//TODO     Методи: call , apply, bind

// function showThis(a, b, arr) {
//   console.log(a, b, arr);
//   console.log("this", this);
// }

// const obj = {
//   a: 5,
//   b: 10,
// };

// showThis.call(obj, "Alice", 2, [1, 2, 3]); // call
// showThis.apply(obj, ["David", 3, [1, 2, 3]]);// apply
//? ________________________________________________________

// function changeColor(newColor) {
//   console.log("this", this);
//   this.color = newColor;
// }

// const hat = {
//   color: "black",
// };

// const sweter = {
//   color: "green",
// };

//!           call
//* changeColor.call(hat, "red");
//* console.log(hat);

//!           apply
//* changeColor.apply(sweter, ["yellow"]);
//* console.log(sweter);

//!           bind
//* const changeHatColor = changeColor.bind(hat, "yellow"); //bind
//* changeHatColor();
//* console.log(hat);
// ?_______________________________________________________

// const counter = {
//   value: 0,
//   increment(num) {
//     console.log("increment", this);
//     this.value += num;
//   },
//   decrement(num) {
//     console.log("decrement", this);
//     this.value -= num;
//   },
// };

// function foo(number, callback) {

//   callback(number);
// }

//? foo(10, counter.increment.bind(counter));
//? foo(1, counter.increment.bind(counter));
// console.log(counter);
//? foo(3, counter.decrement.bind(counter));

// console.log(counter);
// ?_______________________________________________________

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis((hotel.username = "Andora"));
// username.showThis();

// ?_______________________________________________________

//TODO     Прототипи обєкта

// const animal = {
//   lengs: 4,
// };

// const dog = Object.create(animal);

// dog.name = "Patron";
// console.log(dog);
// // console.log(dog.hasOwnProperty("name"));
// // console.log(dog.hasOwnProperty("legn"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(dog);
//   }
// }

// ?_______________________________________________________
// const cruiseControl = {
//   speed: 0,
//   brand: "Audi",
//   accelarate() {
//     this.spead += 10;
//     console.log(`Автомобіль ${this.brand} має швидкість ${this.speed}`);
//   },
//   decrease() {
//     if (this.speed <= 0) {
//       console.log("Авто зупинилось");
//       return;
//     }
//     this.speed -= 10;
//     console.log(`Автомобіль ${this.brand} гальмує ${this.speed}`);
//   },
// };
// cruiseControl.accelarate();
// cruiseControl.accelarate();
// cruiseControl.decrease();
// console.log(cruiseControl);
// ?_______________________________________________________

// const SPEED = 60;

// const bmw = {
//   brand: "BMW",
//   speed: 80,
// };

// const audi = {
//   brand: "Audi",
//   speed: 55,
// };

//* function speedSensor(maxSpeed) {
//   //   if (this.speed <= maxSpeed) {
//   //     return `Автомобіль ${this.brand} рухається з безпечною швидкістю`;
//   //   }
//   //   return `${this.brand} перевищує швидкість`;
//*   return this.speed <= maxSpeed
//*     ? `Автомобіль ${this.brand} рухається з безпечною швидкістю`
//*     : `${this.brand} перевищує швидкість`;
//* }

// console.log(speedSensor.call(bmw, SPEED));
// console.log(speedSensor.call(audi, SPEED));
// ?_______________________________________________________

//!         Урок 2. Модуль 6. ООП. Класи

//TODO                   Класи

//? class Car {
//?   static qty = 0;

//?   static increment() {
//?     Car.qty += 1;
//?   }

//?   #price;

//?   constructor(obj) {
//?     this.brand = obj.brand;
//?     this.model = obj.modal;
//?     this.#price = obj.price;
//?     Car.increment();
//?   }
//*   getPrice() {
//*     return this.#price;
//*   }
//*   changePrise(newPrice) {
//*     this.#price = newPrice;
//*   }

//*   get price() {
//*     return this.#price;
//*   }

//*   set price(newPrice) {
//*     return this.#checkType(newPrice, "number")
//*       ? (this.#price += newPrice)
//*       : console.log("OOOPS!");
//     // if (this.checkType(newPrice, "number")) {
//     //   this.#price += newPrice;
//     //   return;
//     // }
//     // console.log("OOOPS!");
//*   }

//*   #checkType(data, type) {
//*     return typeof data !== type ? false : true;
//     // if (typeof data !== type) {
//     //   return false;
//     // }
//     // return true;
//*   }
//* }

//? const bmw = new Car({ brand: "bmw", modal: "x5", price: 55000 }); // bmw.construktor()
//? const audi = new Car({ brand: "Audi", modal: "q7", price: 48000 }); // bmw.construktor()
// // const audi = new Car("audi"); // audi.construktor()
//? bmw.price = 8888;
//* console.log(bmw.price);
// // bmw.changePrise(59000);
// // console.log(bmw.price);
//* console.log(bmw);
// // console.log(audi);
//* console.log(Car.qty);
//* console.log(bmw.qty);

//TODO_______________________________________________________

//TODO           Наслідування класів(extends)

//? class Hero {
//?   constructor(obj) {
//?     this.name = obj.name;
//?     this.xp = obj.xp;
//?   }
//?   gainXp(amout) {
//?     console.log(`${this.name} received ${amout} xp`);
//?     this.xp += amout;
//?   }
//? }

//* class Warrior extends Hero {
//*   constructor(obj) {
//*     super({
//*       name: obj.name,
//*       xp: obj.xp,
//*     });
//*     this.weapon = obj.weapon;
//*   }
//*   attack() {
//*     console.log(`${this.name} attack with ${this.weapon}`);
//*   }
//* }

//* class Mag extends Hero {
//*   constructor(obj) {
//*     super({
//*       name: obj.name,
//*       xp: obj.xp,
//*     });
//*     this.spells = obj.spells;
//*   }
//*   cast() {
//*     console.log(`${this.name} is casting a spell`);
//*   }
//* }

// const arthas = new Warrior({ name: "Arthas", xp: 1000, weapon: "sword" });
// const khadgar = new Mag({ name: "Khadgar", xp: 500, spells: ["firebool"] });
// khadgar.gainXp(200);
// khadgar.cast();
// console.log(khadgar);
//?__________________________________________________________________

// class Warrior {
//   constructor(obj) {
//     this.name = obj.name;
//     this.xp = obj.xp;
//   }
// }

// class Mage {
//   constructor(obj) {
//     this.name = obj.name;
//     this.xp = obj.xp;
//   }
// }

// class Warlock {
//   constructor(obj) {
//     this.name = obj.name;
//     this.xp = obj.xp;
//   }
// }

// class Paladin {
//   constructor(obj) {
//     this.name = obj.name;
//     this.xp = obj.xp;
//   }
// }
//?___________________________________________________

//? class Bloger {
//?   constructor(obj) {
//?     this.email = obj.email;
//?     this.age = obj.age;
//?     this.numberOfPosts = obj.numberOfPosts;
//?     this.topics = obj.topics;
//?   }
//?   getInfo() {
//?     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts}`;
//?   }
//?   updatePostCount(value) {
//?     this.numberOfPosts += value;
//?   }
//? }

//* const alice = new Bloger({
//*   email: "alice@gmail.com",
//*   age: 28,
//*   numberOfPosts: 20,
//*   topics: ["sports", "gaming"],
//* });
//* alice.updatePostCount(7);
//* console.log(alice.getInfo());

//* const yaroslav = new Bloger({
//*   email: "yaroslav@gmail.com",
//*   age: 37,
//*   numberOfPosts: 33,
//*   topics: ["programming", "JavaScript"],
//* });
//* yaroslav.updatePostCount(8);
//* console.log(yaroslav.getInfo());
//?___________________________________________________

//* class User {
//*   #login;
//*   #email;
//*   constructor(myLogin, myEmail) {
//*     this.#login = myLogin;
//*     this.#email = myEmail;
//*   }
//*   get login() {
//*     return this.#login;
//*   }
//*   set login(newLogin) {
//*     this.#login = newLogin;
//*   }
//*   get email() {
//*     return this.#email;
//*   }
//*   set email(newEmail) {
//*     this.#email = newEmail;
//*   }
//* }
//* const yaroslav = new User("Yarik", "yaroslav@gmail.com");
//* yaroslav.email = "syperYaroslav@gmail.con";
//* yaroslav.login = "syperYarik";
//* console.log(yaroslav);
//?___________________________________________________

//TODO  Прототипи (це резервне сховище властивостей і методів об'єкта)
//TODO   Метод create()
//? Завдання:
//? Зміни код таким чином, щоб об'єкт parent став прототипом
//? для об'єкта у змінній сhild.

//* const parent = {
//*   name: "Stacey",
//*   surname: "Moore",
//*   age: 54,
//*   heritage: "Irish",
//* };
//? const child = Object.create(parent);
//* child.name = "Jason";
//* child.age = 27;
//?___________________________________________________

//TODO   Перевірка прототипу  isPrototypeOf()
// const customer = {
// 	username: "Jacob"
// };
// const animal = {
// 	legs: 4
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
//? console.log(animal.isPrototypeOf(dog)); // true
//? console.log(dog.isPrototypeOf(animal)); // false
//? console.log(customer.isPrototypeOf(dog)); // false

//TODO   метод obj.hasOwnProperty(key)

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4
//? console.log(dog.hasOwnProperty("name")); // true
//? console.log(dog.hasOwnProperty("legs")); // false

//?___________________________________________________________________

// TODO     Статичні властивості

// class Car {
//   #price;
//?   static maxPrice = 50000;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//?     if (newPrice <= Car.maxPrice) {
//?       this.#price = newPrice;
//?     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//?___________________________________________________________________

// TODO     Статичні методи
// class Car {
//   static #maxPrice = 50000;
//?   static checkPrice(price) {

//?     return price > Car.#maxPrice
//?       ? "Error! Price exceeds the maximum"
//?       : "Success! Price is within acceptable limits";
//?   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//?___________________________________________________________________

// TODO     Наслідування класів - extends
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
//? class Admin extends User {
//   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }
//?___________________________________________________________________

// TODO     Конструктор дочірнього класу - super

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//?   constructor(params) {
//?     super(params.email);
//?     this.access = params.access;
//?   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email);
// console.log(mango.access);

//?___________________________________________________________________

// TODO              Методи дочірнього класу

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//?     this.blacklistedEmails = [];
//   }

//?   blacklist(email) {
//?     this.blacklistedEmails.push(email);
//?   }
//?   isBlacklisted(email) {
//?     return this.blacklistedEmails.includes(email);
//?   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com" b ]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
//!===============================================================================

//!         Урок 1. Mодуль 7. DOM. Події
//todo             querySelector

// const idTitle = document.querySelector("#title-1");
// console.log(idTitle);
// const tegTitle = document.querySelector("h1");
// console.log(tegTitle);
// const classTitle = document.querySelector(".title");
// console.log(classTitle);
// const allUl = document.querySelectorAll(".list-item");
// console.log(allUl);

// const navUl = document.querySelector(".list-item");
// console.log(navUl.firstElementChild);
// console.log(navUl.lastElementChild);
// console.log(navUl.children);

// const portfolioEL = navUl.children[2];
// console.log(portfolioEL);
// console.log(portfolioEL.nextElementSibling);
// console.log(portfolioEL.previousElementSibling);
// console.log(portfolioEL.parentNode);

//!         Модуль 10. Асинхронний JavaScript і проміси

//todo              Метод setTimeout()

// console.log("before");
// setTimeout(() => {
//   console.log("timer-2");
// }, 2000);
// setTimeout(() => {
//   console.log("timer-1");
// }, 2000);
// onsole.log("after");

//todo              Метод clearTimeout()

// const logger = () => {
//   console.log("logger");
// };
//  setTimeout(logger, 2000);
// const timerId = setTimeout(logger, 2000);
// clearTimeout(timerId);

// const logger = ({ time }) => {
//   console.log(`logger. ${time}`);
// };
// setTimeout(logger, 2000);
// const timerId = setTimeout(logger, 2000, { time: "2000ms" });

// setTimeout(
//   ({ time }) => {
//     console.log(`logger.${time}`);
//   },
//   2000,
//   { time: "2000ms" }
// );

// for (let i = 3; i > 0; i--) {
//   const delay = i * 1000;
//   setTimeout(() => {
//     console.log(i);
//   }, delay);
// }

//todo              Метод setInterval()

// const timerId = setInterval(
//   (timer) => {
//     console.log("timer:", timer);
//   },
//   2000,
//   "2s"
// );

// setTimeout(() => {
//   clearInterval(timerId);
// }, 5000);

//todo          class Data    Метод ()

// const currentData = new Date();
// const day = currentData.getDay();
// const date = currentData.getDateh();
// const month = currentData.getMonth();
// const year = currentData.getFullYear();

// console.log(day);
// console.log(date);
// console.log(month);
// console.log(year);

// currentData.setFullYear(2007);
// console.log(Date.now());
// console.log(currentData);

// const startTime = Date.now();

//todo           ===   Проміси  ===

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve("ok");
//     } else {
//       reject("Ooops");
//     }
//   }, 2000);
// });
// promise
//   .then((result) => {
//     console.log("then - ", result);
//   })
//   .catch((error) => {
//     console.log("catch - ", error);
//   });

// const promise = new Promise((resolve, reject) => {
//   const random = Math.round(Math.random() * 100);
//   resolve(random);
// });
// promise
//   .then((res) => {
//     console.log(res);
//     return res * 2;
//   })
//   .then((value) => {
//     console.log(value);
//     return value * 4;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("The end");
//   });

// console.log("step 1"); //! Синхронний код ( 1 )
// setTimeout(() => {
//   console.log("step 2"); //! мАкрозадача ( 3 )
// }, 0);
// new Promise((resolv) => {
//   resolv("step 3"); //! мІкрозадача ( 2 )
// }).then((data) => console.log(data));
// setTimeout(() => console.log("step 4")); //! мАкрозадача ( 4 )

//todo           ===   Промісифікація  ===

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.5) {
//       onSuccess(`Ваше замовлення ${dish}`);
//     } else {
//       onError("Закінчилися продукти");
//     }
//   }, 1000);
// };

// makeOrder(
//   "Cacke",
//   (str) => {
//     console.log("onSucces", str);
//   },
//   (error) => {
//     console.log("onError", error);
//   }
// );

// const makeOrder = (dish) => {
//   return new Promise((resolv, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) {
//         resolv(`Ваше замовлення ${dish}`);
//       } else {
//         reject("Закінчилися продукти");
//       }
//     }, 1000);
//   });
// };

// makeOrder("Cacke")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//todo           ===   promise.all   promise.race  ===

// const startTime = Date.now();

// const res1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;

//       resolve({ title: "first", time: deltaTime });
//     }, 3000);
//   });
// };

// const res2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;

//       resolve({ title: "second", time: deltaTime });
//     }, 1000);
//   });
// };

// const res3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;

//       resolve({ title: "third", time: deltaTime });
//     }, 5000);
//   });
// };

// const container = document.querySelector(".container");
// container.textContent = "Loading...";

// Promise.all([res1(), res2(), res3()])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     container.textContent = "";
//   });

// Promise.race([res1(), res2(), res3()])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container-game");
const result = document.querySelector(".result");
startBtn.addEventListener("click", handleStart);

function handleStart() {
  result.textContent = "";
  startBtn.disabled = true;

  const promises = [...container.children].map(() => {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random > 0.5) {
        resolve("🥳");
      } else {
        reject("👿");
      }
    });
  });
  Promise.allSettled(promises).then((items) => {
    const isWinner =
      items.every((item) => item.status === "fulfilled") ||
      items.every((item) => item.status === "rejected");

    items.forEach((item, i) => {
      container.children[i].textContent = "";
      setTimeout(() => {
        container.children[i].textContent = item.value || item.reason;
        if (i === items.length - 1) {
          result.textContent = isWinner ? "Winner" : "Looser";
          startBtn.disabled = false;
        }
      }, 1000 * (i + 1));
    });
  });
}

// "" + 1 + 0;
// "" - 1 + 0;
// true + false;
// 6 / "3";
// "2" * "3";
// 4 + 5 + "px";
// "$" + 4 + 5;
// "4" - 2;
// "4px" - 2;
// "  -9  " + 5;
// "  -9  " - 5;
// null + 1;
// undefined + 1;
// " \t \n" - 2;

// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); //-1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); //9px
// console.log("$" + 4 + 5); //$45
// console.log("4" - 2); // 2
// console.log("4px" - 2); // NaN
// console.log("  -9  " + 5); // -9 5
// console.log("  -9  " - 5); // -14

//todo ===============================================================

// function foo(name) {
//   name = prompt("Яка офіційна назва JavaScript?");

//   if (name === "ECMAScript") {
//     alert("Правельно");
//   } else {
//     alert("Ви не знаєте");
//   }
// }
// foo();

// const number = Number(prompt());
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   prompt(-1);
// } else if (number === 0) {
//   prompt(0);
// } else {
//   prompt("NaN");
// }

// let message;
// let login = prompt("Введіть логін");
// message =
//   login == "Працівник"
//     ? "Привіт"
//     : login == "Директор"
//     ? "Вітаю"
//     : login === ""
//     ? "Немає логіну"
//     : "";

// alert(message);

// let message;
// let login = prompt("Працівник,Директор");
// message =
//   login == "Працівник"
//     ? "Привіт"
//     : login == "Директор"
//     ? "Вітаю"
//     : login == ""
//     ? "Немає логіну"
//     : "";
// alert(message);

// ===============================================================

// let numbers = prompt();
// if (numbers > 10 && numbers < 20) {
//   alert("Входить у діапазон");
// } else {
//   alert("Не входить");
// }

// let user = prompt("Ви студент чи працівник");
// if (user === "студент" || user === "працівник") {
//   alert("Доступ дозволено");
// } else {
//   alert("Відмова");
// }

// let age = prompt("Вам є 18? (yes/no)");
// if (age !== "yes") {
//   alert("Доступ заборонено");
// }

// function admin(name, password) {
//   if (
//     (name === "admin" && password === "12345") ||
//     (name === "moderator" && password === "qwerty")
//   ) {
//     alert("доступ дозволено");
//   } else {
//     alert("Доступ заборонено");
//   }
// }
// admin("admin", "12345");
// admin("moderator", "qwerty");
// admin("userr", "NNNN");

// let promtt = prompt("Введіть імя");
// promtt === "" ? alert(`Привіт Гість`) : alert(`Привіт ${promtt}`);

//! ==============================================================================

// let age = prompt("Введіть число");
// if (age > 14 && age <= 90) {
//   alert("Все ок");
// } else {
//   alert("Oooops");
// }

// let name = prompt("Введіть логін");
// let password = prompt("Введіть пароль");
// if (name === "admin") {
//   prompt("Введіть пароль");
// } else if (name === "" || name === "null") {
//   alert("Скасовано");
// } else if (password === "12345") {
//   alert("Ласкаво просимо");
// } else if (password === "null" || "undefaind") {
//   alert("Я вас не знаю");
// }

//! ==============================================================================

// let i = 0;

// while (i < 10) {
//   console.log(i + 1);
//   ++i;
// }

// for (let j = 10; j >= 1; j--) {
//   console.log(j);
// }

// let num = Number(prompt("Введіть число 1 - 10"));

// for (let i = 1; i < num; i++) {
//   console.log(`result ${num * i}`);
// }
//! ==============================================================================

// let number = Number(prompt("Enter a number"));

// for (let i = 0; i < number; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;

// for (let n = 1; n <= 100; n++) {
//   sum += n;
// }
// console.log(sum);

// let N = 100;
// let sumN = (N * (N + 1)) / 2;
// console.log(sumN);

// let stars = "";
// for (let i = 5; i > 0; i--) {
//   // console.log("*".repeat(i));
//   stars += "*";
//   console.log(stars);
// }

// let stars = "";

// for (let i = 1; i < 10; i++) {
//   console.log("*".repeat(i));
// }

//! ==============================================================================

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Edge" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Ми підтримуємо і ці браузери");
// } else {
//   alert("Маємо надію, що ця сторінка виглядає добре!");
// }

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Ми підтримуємо і ці браузери");
//     break;

//   default:
//     alert("Маємо надію, що ця сторінка виглядає добре!");
// }

// let a = +prompt("a?", "");

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert("2,3");
// }

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert(2.3);
//     break;
// }

// console.log(Array.isArray(["34"]));

// function checkAge(age) {
//                 1
//  if (age > 18) {
//    return true;
//  } else {
//    return confirm("Батьки дозволили?");
//  }
//                 2
// return age >= 18 ? true : confirm("Батьки дозволили?");
//                 3
// return age >= 18 || confirm("Батьки дозволили?");
// }
// checkAge(18);

//! ==============================================================================

// function min(a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
// }

// console.log(min(2, 5));
// console.log(min(8, 9));
// console.log(min(8, 3));

// function pow(x, n) {
//   let result = 0;
//   if (n >= 1) {
//     for (let i = 0; i < n; i++) {
//       result = x ** n;
//     }
//   } else {
//     alert(`The number ${n} is not correct.`);
//   }
//   return result;
// }

// console.log(pow(4, 5));

//! ==============================================================================

// function ask(questions, yes, no) {
//   if (confirm(questions)) yes();
//   else no();
// }

// function yes() {
//   alert("Hello");
// }
// function no() {
//   alert("Error");
// }

// ask("You are redy", yes, no);

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );

//! ==============================================================================

// let user = {};
// user.name = "Ivan";
// user.username = "Сміт";
// user.name = "Петро";
// delete user.name;

const workers = [
  {
    name: "sahsa",
    age: 2,
  },
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
  {
    name: "Doe",
    age: 35,
  },
  {
    name: "Alice",
    age: 28,
  },
  {
    name: "Bob",
    age: 32,
  },
  {
    name: "Charlie",
    age: 45,
  },
  {
    name: "David",
    age: 50,
  },
  {
    name: "Eve",
    age: 29,
  },
  {
    name: "Frank",
    age: 38,
  },
];

const ageWorcs = [];
workers.forEach((el) => ageWorcs.push(el.age));
ageWorcs.sort((a, b) => a - b);
let arr = ageWorcs.slice(7, 10);
console.log(ageWorcs);

// const sorted = workers.sort((a, b) => a.age - b.age);
// const top3 = sorted.slice(7, 10);
// console.log(top3);

// const top = [];
// workers.forEach((el) => {
//   if (el.age > 18 && el.age < 30) {
//     top.push(el.name);
//   }
// });
// console.log(top);

// !===============================================================================

// const userr = {
//   name: "Yaroslav",
//   age: 25,
//   isAdmin: true,
// };

// // 2. Об’єкт товару
// const product = {
//   id: 101,
//   title: "Ноутбук",
//   price: 35000,
//   inStock: true,
// };

// // 3. Об’єкт автомобіля
// const car = {
//   brand: "Tesla",
//   model: "Model 3",
//   year: 2024,
//   colors: ["black", "white", "red"],
// };

// // 4. Об’єкт функцій
// const calculator = {
//   add: (a, b) => a + b,
//   sub: (a, b) => a - b,
// };

// // 5. Вкладений об’єкт
// const company = {
//   name: "TechCorp",
//   employees: {
//     frontend: 5,
//     backend: 3,
//     qa: 2,
//   },
//   location: "Kyiv",
// };

// let codes = {
//   49: "Німеччина",
//   41: "Швейцарія",
//   44: "Великобританія",
//   1: "США",
// };

// for (let code in codes) {
//   console.log(code);
// }

// let user = {};
// user.name = "Ivan";
// user.username = "Smit";
// user.name = "Petro";
// delete user.name;
// console.log(user);

// let schedule = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "Вставай";
// alert(isEmpty(schedule)); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню",
// };
// console.log(menu);
// multiplyNumeric(menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// console.log(menu);
