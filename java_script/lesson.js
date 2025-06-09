//!        Урок Модуль 4. Об'єкти:
//TODO     Доступ до вкладеностей

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["tracks - 1, tracks - 2, tracks - 3"],
//   isFavorite: true,
// };

// playlist.name = "New playlist";
// playlist.newName = "Super playlist";

// // console.log(playlist.tracks);
// console.log(playlist["newName"]);

// const obj = {
//   userName: "Yaroslav",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   numbers: [33, 44, 55, 66, 77],
// };

// const newObj = obj.skills;
// console.log(newObj);

// // console.log(obj.skills.html); //true
// obj.skills.js = true;
// console.log(obj.skills.js);
// obj.numbers[3] = 99;
// console.log(obj.numbers[3]);
//TODO_______________________________________________________________________

// TODO      Об'єкти: типи даних за посиланням, масиви іфункції - це обєкти!

//* const a = { x: 1, y: 2 };
//* const b = a;

//* a.x = 100;
//* b.x = 101;
//* a.y = 10;
//* a.f = 66;
//* b.f = 606;

//* console.log(a);
//* console.log(b);

//TODO_______________________________________________________________________

// TODO      Об'єкти: короткі властивості, обчислювальні властивості!

//?          короткі властивості

//* const userName = "Yaroslav";
//* const age = 25;
//* const obj = {
//*   userName,
//*   age,
//* };
//* console.log(obj);

//* function foo(name, age) {
//*   return {
//*     name,
//*     age,
//*   };
//* }
//* console.log(foo("Yaroslav", 37));

//?          обчислювальні властивості

//* const inputName = "color";
//* const obj = {
//*   [inputName]: "yellow",
//* };

//* console.log(obj);

//TODO_______________________________________________________________________

// TODO      Об'єкти: перебір об'єкта (цикл for...in; метод Object.keys; метод Object.value)

//?          цикл for...in

// const feedback = {
//   good: 3,
//   neutral: 5,
//   bad: 10,
// };

// let total = 0;
// for (const key in feedback) {
//   total += feedback[key];
// }

// console.log(total);

//?          метод Object.keys

// const feedback = {
//   good: 3,
//   neutral: 5,
//   bad: 10,
// };

// let total = 0;

//*   const keys = Object.keys(feedback); //метод Object.keys створив масив з ключами ['good', 'neutral', 'bad']
//*   for (const key of keys) {
//*     //   console.log(feedback[key]);
//*     total += feedback[key];
//*   }
//*   console.log(total);

//?          метод Object.values

//*  const values = Object.values(feedback); //метод Object.values створив масив зі значення ключів [3, 34, 10]

//*  for (const item of values) {
//*    total += item;
//*  }
//*  console.log(total);

//*  const animal = {
//*    legt: 4,
//*  };
//*  const dog = Object.create(animal);
//*  dog.name = "Patron";

//   for (const key in dog) {
//     if (dog.hasOwnProperty(key)) {
//       console.log(dog[key]);
//     }
//   }

//*   const keys = Object.keys(dog);
//*   for (const key of keys) {
//*     console.log(dog[key]);
//*   }

//TODO   Завдання

//*  const user = {
//*    name: "Yaroslav",
//*    age: 37,
//*    hobby: "html",
//*    premium: true,
//*  };
//*  const user1 = {
//*    name: "Maria",
//*    age: 36,
//*    hobby: "css",
//*    premium: true,
//*  };

// user.mood = "happy";
// user.hobby = `skydiving`;
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key + " : " + user[key]);
// }

//* function foo(obj) {
//*   obj.mood = "happy";
//*   obj.hobby = `skydiving`;
//*   obj.premium = false;

//*   const keys = Object.keys(obj);
//*   for (const key of keys) {
//*     console.log(key + " : " + user[key]);
//*   }
//* }

//* foo(user);
//* foo(user1);

// //TODO   Завдання
//*  const salaries = {
//*    Yaroslav: 160,
//*    Maria: 120,
//*    Viktoria: 90,
//*  };

//*  function summa(obj) {
//*    let sum = 0;
//*    const values = Object.values(salaries);
//*    for (const value of values) {
//*      sum += value;
//*    }
//*    return sum;
//*  }
//*  console.log(summa(salaries));

// //TODO   Завдання
//?  Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
//?  Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника,
//?  та значення - його відповідна зарплатня.
//?  Доповни код функції countTotalSalary(salaries) так,
//?  щоб вона повертала загальну суму зарплат всіх співробітників.

//* function countTotalSalary(salaries) {
//*   let totalSalary = 0;
//*   const values = Object.values(salaries);
//*   for (const value of values) {
//*     totalSalary += value;
//*   }
//*   return totalSalary;
//* }

//* console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//!_________________________________________________________________________________________

//!        Урок 2. Модуль 4. Об'єкти:

// TODO    Масив об'єктів: перебір масивів, пошук об'єкта за значенням властивості, колекція значень властивості
// ?       Перебір масивів

//*   const friends = [
//*     { name: "Ross", online: false },
//*     { name: "Rachel", online: true },
//*     { name: "Joey", online: false },
//*     { name: "Monica", online: true },
//*     { name: "Phoebe", online: true },
//*     { name: "Chandler", online: false },
//*   ];

//? пошук друга за іменем:

//*   function findByName(arr, userName) {
//*     for (const item of arr) {
//*       if (item.name.toLowerCase() === userName.toLowerCase()) {
//*         console.log(item.name);
//*         return item;
//*       }
//*     }
//*     return "Not found";
//*   }
//*   console.log(findByName(friends, "RosS"));

//? отримаємо імена всіх друзів:

//*   function getAllNames(arr) {
//*     const names = [];
//*     for (const item of arr) {
//*       console.log(item.name);
//*       names.push(item.name);
//*     }
//*     return names;
//*   }
//*   console.log(getAllNames(friends));

//? отримаємо імена тих друзів які зараз online і тих хто offlain  :

//*   function getOnlineandOffline(arr) {
//*     const online = [];
//*     const offline = [];
//*     for (const item of arr) {
//*       if (item.online) {
//*         online.push(item);
//*       } else {
//*         offline.push(item);
//*       }
//*     }
//*     return { online, offline };
//*   }

//*   const result = getOnlineandOffline(friends);
//*   console.log("Онлайн друзі:", result.online);
//*   console.log("Офлайн друзі:", result.offline);

//?_________________________________________________________________

//* const stones = [
//*   { name: "Смарагд", price: 1300, quantity: 4 },
//*   { name: "Рубін", price: 900, quantity: 2 },
//*   { name: "Сапфір", price: 1200, quantity: 5 },
//*   { name: "Діамант", price: 2500, quantity: 1 },
//* ];

//* function calcTotalPrice(stones, stoneName) {
//*   let sum = 0;
//*   for (const item of stones) {
//*     if (item.name === stoneName) {
//*       return item.quantity * item.price;
//*     }
//*   }
//* }
//* console.log(calcTotalPrice(stones, "Сапфір"));

//?_________________________________________________________________

//? Доступ до властивостей об'єкта:  ключове слово this

//* const playlist = {
//*   name: "My playlist",
//*   rating: 5,
//*   tracks: ["track-1", "track-2", "track-3"],
//*   changeName(newName) {
//*     console.log(this);
//*     playlist.name = newName;
//*   },
//*   addTrack(newTrack) {
//*     this.tracks.push(newTrack);
//*   },
//*   updateRating(newRaiting) {
//*     this.rating = newRaiting;
//*   },
//*   getName() {
//*     return this.name;
//*   },
//* };

//* playlist.changeName("Playlist NICE");
//* playlist.addTrack("track-4");
//* playlist.updateRating(9);
//* console.log(playlist.getName());

// TODO    Синтаксис spread i rest:
//?           spread

//* function foo(a, b, ...arrey) {
//*   console.log(a, b);
//* }
//* foo(1, 2, 3);
//* foo(10, 20, 3, 4, 5);

//* function foo(...rets) {
//*   console.log(rets);
//* }

//?           rest:

//* const numbers = [1000, ...[1, 2, 3], 2000, ...[4, 5, 6], 3000];
//*  console.log(numbers);

// TODO   Завдання
//?  Пошук найменшої або найбільшої температури (числа)

//* const temps = [18, 14, 12, 21, 17, 29, 24];

//* console.log(Math.min(...temps));
//* console.log(Math.max(...temps));
//?____________________________________________________

// const a = [{ x: 1 }, { y: 2 }];
// const b = [...a];
// a[0].x = 100;
// console.log("a", a);
// console.log("b", b);

//?  Поєднюєм кілька масивів в один через spread
//* const arrey1 = [1, 2, 3];
//* const arrey2 = [4, 5, 6, 7];
//* const arrey3 = [8, 9, 10];

//* const allArrey = [...arrey1, ...arrey2, ...arrey3]; //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//* console.log(allArrey);
//?____________________________________________________

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, q: 3 };

// const objC = {
//   ...objA, //!x: 1, y: 2
//   x: 10, //!x: 10, y: 2
//   ...objB, //!x: 0, y: 20, q:3
//   y: 20, //!x: 0, y: 20, q:3
// };

// console.log(objC);

// const Transaction = {
//   DEPOSIT: "deposide",
//   WITHDRAW: " withdraw",
// };
//!_______________________________________________________________________

//!        Урок 1. Модуль 5. Перебираючі методи масивів:

//TODO     Колбек - функції

// function fnA(num) {
//   console.log(num * 2);
// }
// function foo(a, b, callback) {
//   console.log(callback);
//   callback(2);
//   return a + b;
// }
// console.log(foo(1, 2, fnA));

// function calc1(a, b, callback) {
//   console.log("hello");
//   console.log("tototo");
//   const result = callback(a, b);
//   console.log(result);
// }
// function calc2(a, b) {
//   console.log("hello");
//   console.log("tototo");
//   const result = a - b;
//   console.log(result);
// }
// calc1(10, 4, function (x, y) {
//   return x + y;
// });
// calc1(5, 3, function (x, y) {
//   return x - y;
// });

// function each(arrey, callback) {
//   const newArr = [];
//   for (const num of arrey) {
//     newArr.push(callback(num));
//   }
//   return newArr;
// }
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

//TODO     Стрілочні функції (=>)

// add(10, 20);

// function add() {
//   console.log(arguments);
// }

//?_____________________________________
// const addArrow = (a) => {
//   return a + 20;
// };
//* const addArrow = (a) => a + 20;

// console.log(addArrow(10));
//?_____________________________________

// function foo(a) {
//   return a;
// }
//? або:

//* const foo = (a) => ({ a });

//* console.log(foo(10));

//?_____________________________________

//TODO     Метод forEach
//? масив.forEach(function(елемент, індекс, масив) {
//?    Тіло функції
//? });

//? Рефакторинг коду (оптимізація)
//*  const logItems = (arr) => {
//?    arr.forEach((item, i) => {
//*      console.log(`${i + 1} : ${item}`);
//*    });
//*  };
//*  logItems(["яблуко", "банан", "апельсин", "груша", "вишня"]);
//*  logItems(["🍎", "🍌", "🍇", "🍉", "🍓", "🍍"]);

//? Рефакторинг коду з forEach:
//*   const printContactInfo = (obj) => {
//*     const namesArr = obj.name.split(",");
//*     const phonesArr = obj.phone.split(",");

//*     namesArr.forEach((item, index) => {
//*       console.log(`${item} - ${phonesArr[index]}`);
//*     });
//*   };

//*   printContactInfo({
//*     name: "Оля,Максим,Андрій,Софія",
//*     phone: "+380931112233,+380501234567,+380671234567,+380991112233",
//*   });

//? Рефакторинг коду

//*   const calculateTotalPrice = (...rest) => {
//*     let total = 0;
//*     rest.forEach((num) => {
//*       total += num;
//*     });
//*     return total / rest.length;
//*   };

//*   console.log(calculateTotalPrice(12, 85, 37, 4));
//*   console.log(calculateTotalPrice(164, 48, 291));
//*   console.log(calculateTotalPrice(412, 371, 94, 63, 176));

//TODO     Метод map:

//? Нехай функція getModels повертає масив моделей.

// const allCars = [
//   { make: "Honda", model: "CR-V", amount: 14, prise: 22045 },
//   { make: "Toyota", model: "RAV4", amount: 10, prise: 24000 },
//   { make: "Ford", model: "Escape", amount: 8, prise: 21000 },
//   { make: "Mazda", model: "CX-5", amount: 12, prise: 23000 },
//   { make: "Nissan", model: "Rogue", amount: 15, prise: 22500 },
//   { make: "Chevrolet", model: "Equinox", amount: 9, prise: 21500 },
//   { make: "Hyundai", model: "Tucson", amount: 11, prise: 21800 },
//   { make: "Kia", model: "Sportage", amount: 13, prise: 21950 },
//   { make: "Volkswagen", model: "Tiguan", amount: 7, prise: 25000 },
//   { make: "Subaru", model: "Forester", amount: 10, prise: 23500 },
// ];

// const getModels = (cars) => {
//   const arr = [];
//   cars.forEach((item) => {
//     arr.push(item.model);
//   });
//   return arr;
// };
// console.log(getModels(arr));

//* const getModels = (cars) => {
//*   return cars.map((item) => item.model);
//* };
//* console.log(getModels(allCars));

//?______________________________________________________________________

// const makeCarsWithDiscount = (card, discount) => {
//   return card.map((item) => {
//     console.log(item);
//     return {
//       ...item,
//       prise: item.prise * (1 - discount),
//     };
//   });
// };

// console.table(makeCarsWithDiscount(allCars, 0.2));
//?______________________________________________________________________

//? Збільшуємо кількість годин грапвця за id:

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
//   { id: "player-3", name: "Ajax", timePlayed: 180, points: 48, online: true },
//   { id: "player-4", name: "Kiwi", timePlayed: 250, points: 61, online: false },
//   { id: "player-5", name: "Luna", timePlayed: 375, points: 80, online: true },
// ];

// const playerid = "player-3";

// const update = (arr, id) => {
//   return arr.map((item) => {
//      if (item.id === id) {
//        return { ...item, timePlayed: item.timePlayed + 100 };
//      }
//      return item;

//     return item.id === id
//       ? { ...item, timePlayed: item.timePlayed + 100 }
//       : item; //тернарним оператором
//   });
// };

// console.table(update(players, playerid));
//TODO_________________________________________________________________

// //TODO     Метод flatMap:

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 12, tags: ["html", "css"] },
//   { id: "002", likes: 7, tags: ["react", "frontend"] },
//   { id: "003", likes: 20, tags: ["js", "express"] },
//   { id: "004", likes: 3, tags: ["nodejs", "mongodb"] },
// ];

// const tags = tweets.flatMap((item) => item.tags);
// console.log(tags);

//!        Урок 1. Модуль 5. Перебираючі методи масивів:

//TODO     Метод filter

// const numbers = [5, 10, 15, 20, 25];
// const filteredNum = numbers.filter((number) => {
//   console.log(number);
// });

const fruits = [
  { name: "Яблуко", emoji: "🍎" },
  { name: "Банан", emoji: "🍌" },
  { name: "Апельсин", emoji: "🍊" },
  { name: "Кавун", emoji: "🍉" },
  { name: "Полуниця", emoji: "🍓" },
  { name: "Ананас", emoji: "🍍" },
  { name: "Виноград", emoji: "🍇" },
  { name: "Лимон", emoji: "🍋" },
  { name: "Черешня", emoji: "🍒" },
  { name: "Манго", emoji: "🥭" },
];

const numbers = [1, 5, 7, 9, 90, 65, 32];

//! forEach:
//? fruits.forEach((item, index) => {
//   console.log(`${index + 1} - ${item.name} ${item.emoji}`);
// });

//! map:
//? const doublednumbers = numbers.map((num) => num * 2);
// console.log(doublednumbers); //[2, 10, 14, 18, 180, 130, 64]

//! filter:
//? const filtered = numbers.filter((num) => num < 33);
// console.log(filtered); // [1, 5, 7, 9, 32]

//! find:
//? const result = numbers.find((num) => num > 10);
// console.log(result); // 90

//! some, every:
//? console.log(numbers.some((num) => num < 5));// true (num=1, 1<5)
//? console.log(numbers.every((num) => num < 91)); //true(num=90, 90<91)

//! reduce:
//? const total = numbers.reduce((acc, num) => acc + num, 0);
// console.log(total); //209 (1+5+7+9+90+65+32)

//! toSorted створює копію):
//? const sorted = numbers.toSorted();
// console.log(sorted); // [1, 32, 5, 65, 7, 9, 90]
// console.log(numbers); //[1, 5, 7, 9, 90, 65, 32]
