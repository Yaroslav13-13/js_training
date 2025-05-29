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
