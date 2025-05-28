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

// function isAdult(age) {
//   return age >= 18;
// }
// console.log(isAdult(20));
// console.log(isAdult(15));

// function isEven(number) {
//   return number % 2 === 0 ? "парне" : "непарне";
// }
// console.log(isEven(4));
// console.log(isEven(7));
