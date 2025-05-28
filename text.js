//!        Оператор typeof

const quantity = 17;
console.log(typeof quantity); // виведе "number"
const message = "JavaScript is awesome!";
console.log(typeof message); // виведе "string"
const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // виведе "boolean"
let username;
console.log(typeof username); // виведе "undefined"
let status = null;
console.log(typeof status); // виведе "object"
// !____________________________________________________________

//!        Комбіновані оператори

//* Додавання: +=. Приклад: x += y еквівалентно x = x + y
//* Віднімання: -=. Приклад: x -= y еквівалентно x = x - y
//* Множення: *=. Приклад: x *= y еквівалентно x = x * y
//* Ділення: /=. Приклад: x /= y еквівалентно x = x / y
//* Остача від ділення: %=. Приклад: x %= y еквівалентно x = x % y
// !____________________________________________________________

//!        Перетворення типів:

//TODO     Явне перетворення (Explicit Conversion):

//? До числа (Number):
//* Number("123") + // 123
//* +"123"; // 123 (унарний плюс)
//* parseInt("123px"); // 123
//* parseFloat("123.45"); // 123.45
//* Number("abc") → NaN

//? До рядка (String):
//* String(123)    // "123"
//* 123 + ""       // "123"
//* true.toString() // "true"

//?  До булевого (Boolean):

//TODO    Неявне перетворення (Implicit Coercion):
