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
