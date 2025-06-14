//!==================== Оператор typeof ====================!\\

//* const quantity = 17;
//* console.log(typeof quantity); // виведе "number"
//* const message = "JavaScript is awesome!";
//* console.log(typeof message); // виведе "string"
//* const isSidebarOpen = false;
//* console.log(typeof isSidebarOpen); // виведе "boolean"
//* let username;
//* console.log(typeof username); // виведе "undefined"
//* let status = null;
//* console.log(typeof status); // виведе "object"
//!____________________________________________________________!\\

//!================== Комбіновані оператори ==================!\\

//* Додавання: +=. Приклад: x += y еквівалентно x = x + y
//* Віднімання: -=. Приклад: x -= y еквівалентно x = x - y
//* Множення: *=. Приклад: x *= y еквівалентно x = x * y
//* Ділення: /=. Приклад: x /= y еквівалентно x = x / y
//* Остача від ділення: %=. Приклад: x %= y еквівалентно x = x % y
//!____________________________________________________________!\\

//!===================== Перетворення типів ===================!\\

//TODO     Явне перетворення (Explicit Conversion):

//?   До числа (Number):
//*     Number("123") + // 123
//*     +"123"; // 123 (унарний плюс)
//*     parseInt("123px"); // 123
//*     parseFloat("123.45"); // 123.45
//*     Number("abc") → NaN

//?   До рядка (String):
//*     String(123)    // "123"
//*     123 + ""       // "123"
//*     true.toString() // "true"

//?   До булевого (Boolean):
//*    Boolean(0)       // false
//*    Boolean("hello") // true
//*    Boolean("")      // false
//*    Boolean(null)    // false

//?   Falsy" значення:
//*    false
//*    0
//*    "" (порожній рядок)
//*    null
//*    undefined
//*    NaN

//TODO    Неявне перетворення (Implicit Coercion):

//?    "5" + 1; // "51" (1 перетворюється в рядок)
//?    "5" - 1; // 4   ("5" перетворюється в число)
//?    true + 1; // 2   (true → 1)
//?    false + "1"; // "false1" (false → "false")
//?    null + 1; // 1
//?    undefined + 1; // NaN

//TODO    Неявне перетворення (Implicit Coercion):

//!================== Перетворення рядків у числа ================!\\

//TODO         Метод Number.parseInt():

//*    console.log(Number.parseInt("5")); // 5
//*    console.log(Number.parseInt("5.5")); // 5
//*    console.log(Number.parseInt("5cm")); // 5
//*    console.log(Number.parseInt("12qwe74")); // 12
//*    console.log(Number.parseInt("12.46qwe79")); // 12
//*    console.log(Number.parseInt("cm5")); // NaN
//*    console.log(Number.parseInt("")); // NaN
//*    console.log(Number.parseInt("qweqwe")); // NaN

//TODO         Метод Number.parseFloat():

//*    console.log(Number.parseFloat("5")); // 5
//*    console.log(Number.parseFloat("5.5")); // 5.5
//*    console.log(Number.parseFloat("3.14")); // 3.14
//*    console.log(Number.parseFloat("5cm")); // 5
//*    console.log(Number.parseFloat("5.5cm")); // 5.5
//*    console.log(Number.parseFloat("12qwe74")); // 12
//*    console.log(Number.parseFloat("12.46qwe79")); // 12.46
//*    console.log(Number.parseFloat("cm5")); // NaN
//*    console.log(Number.parseFloat("")); // NaN
//*    console.log(Number.parseFloat("qweqwe")); // NaN

//!____________________________________________________________!\\

//!==================== Арифметичні функції ===================!\\

//TODO         Math.floor(num):
//* console.log(Math.floor(1.3)); // 1
//* console.log(Math.floor(1.7)); // 1

//TODO         Math.ceil(num):
//* console.log(Math.ceil(1.3)); // 2
//* console.log(Math.ceil(1.7)); // 2

//TODO         Math.round(num):
//* console.log(Math.round(1.3)); // 1
//* console.log(Math.round(1.7)); // 2

//TODO  Math.max(num1, num2, ...)
//TODO  повертає найбільше число з набору переданих чисел:
//* console.log(Math.max(20, 10, 50, 40)); // 50

//TODO  Math.min(num1, num2, ...)
//TODO  повертає найменше число з набору переданих чисел:
//*console.log(Math.min(20, 10, 50, 40)); // 10

//TODO  Math.random()
//TODO  повертає випадкове число в діапазоні від 0 (включно) до 1 (за винятком):
//*console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294
//!____________________________________________________________!\\

//!======================= РОЗГАЛУЖЕННЯ =======================!\\

//TODO      Інструкції if...else
//*    if (grade >= 90) {
//*      console.log("Perfectly");
//*    } else if (grade >= 80) {
//*      console.log("Good");
//*    } else if (grade >= 70) {
//*      console.log("Satisfactorily");
//*    } else {
//*      console.log("Unsatisfactorily");
//*    }

//TODO      Тернарний оператор
//*   const age = 20;
//*   const type = age >= 18 ? 'Дорослий' : 'Дитина';
//*   console.log(type); // 'Дорослий'

//*   const a = 5;
//*   const b = 10;
//?   const biggerNumber = a > b ? a : b;
//*   console.log(biggerNumber); // 10

//TODO      Оператор switch
const fruit = "apple";
//*     switch (fruit) {
//*     case "apple":
//*       console.log("Apple selected");
//*       break;
//*     case "banana":
//*       console.log("Banana selected");
//*       break;
//*     case "orange":
//*       console.log("Orange selected");
//*       break;
//*     default:
//*       console.log("The fruit is unknown");
//*     }

//TODO Пам’ятка під час використання розгалужень:

//?  Інструкція if є універсальною. Інструкції if…else і else…if
//?  використовуються, коли потрібно прописати декілька умов.
//?  Отже, ці інструкції зазвичай довші, ніж інші способи розгалужень.

//?  Тернарний оператор краще використовувати для присвоєння або повернення значення
//?  з тіла функції. В умові тернарного оператора може бути все що завгодно:
//?  перевірка рівності / нерівності, на більше / менше, просто перевірка на будь чого.
//?  Пам’ятай про обмеження: у нього має бути рівно 2 сценарії, не більше.

//?  Оператор switch перевіряє тільки на сувору рівність.
//?  Використовуючи оператор switch, завжди:
//?  — пам’ятай про оператор break;
//?  — використовуй тільки 1 default, він завжди має бути останнім.
//TODO__________________________________________________________
//!-------------------------------------------------------------!\\

//!=======================  МАСИВИ  =======================!\\

//TODO      Доступ до елементів

//*    const planets = ["Earth", "Mars", "Venus"];
//*    console.log(planets[0]); // 'Earth'

//*    const planets = ['Earth', 'Mars', 'Venus'];
//*    const firstElement = planets[0];
//*    console.log(firstElement); // 'Earth'

//TODO      Перевизначення значення елемента

//*    const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
//*    planets[0] = 'Jupiter';
//*    planets[2] = 'Neptune';
//*    console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

//TODO                 Довжина масиву

//*   const planets = ["Earth", "Mars", "Venus"];
//*   console.log(planets.length); // 3
//*   const planets = ["Earth", "Mars", "Venus"];

//*      if (planets.length >= 3) {
//*        console.log("3 or more elements");
//*      } else {
//*        console.log("3 or less elements");
//*      }

//TODO                 Індекс останнього елемента

//*     const planets = ["Earth", "Mars", "Venus"];
//*     const lastElementIndex = planets.length - 1;
//*     console.log(planets[lastElementIndex]); // "Venus"

//!===============  Методи масиву ================!\\

//TODO              Метод join() - об'єднює елементи масиву в рядок

//* const words = ["JavaScript", "is", "amazing"];
//* console.log(words.join("")); // 'JavaScriptisamazing'
//* console.log(words.join(" ")); // 'JavaScript is amazing'
//* console.log(words.join("-")); // 'JavaScript-is-amazing'

//?      Завдання:
//?      Функція getLength(array) очікує один параметр array - масив довільних значень.
//?      Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
//?       і повертала кількість символів в отриманому рядку.

//       unction getLength(array) {
//        let arreyLength = array.join("").length;
//        return arreyLength;
//
//       onsole.log(getLength(["Mango", "hurries", "to", "the", "train"]));
//       onsole.log(getLength(["M", "a", "n", "g", "o"]));
//       onsole.log(getLength(["top", "picks", "for", "you"]));

//TODO              Метод split() - перетворює рядок на масив
//? Приклад:
//* const name = "Mango";
//? const letters = name.split("");
//* console.log(letters); // ["M", "a", "n", "g", "o"]

//* const message = "JavaScript essentials";
//? const words = message.split(" ");
//* console.log(words); // ["JavaScript", "essentials"]

//* const slug = "amazing-french-recipes";
//? const slugParts = slug.split("-");
//* console.log(slugParts); // ["amazing", "french", "recipes"]

//?     Завдання:
//?     Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
//?      залежно від кількості слів і ціни за слово.
//?     Оголошена функція calculateEngravingPrice(message, pricePerWord).
//?     Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).
//?     Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ").length;
//   let totalPrice = words * pricePerWord;
//   return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));

//TODO              Метод slice() - повертає новий масив
//? Приклад:

//!======================== this ==================================!\\

//! ✅ Як запам’ятати!!!
//TODO Виклик через…:	        this буде…:
//?    obj.method()	            obj
//?    function()	            window або undefined
//?    new Func()	            новий об’єкт
//?    Стрілочна функція	    як у батьківському контексті
//?    DOM обробник (звичайна)	елемент, що спрацював

// const user = {
//   name: "Софія",
//   sayHi() {
//     console.log(`Hello i am ${this.name}`);
//   },
// };
// user.sayHi();
