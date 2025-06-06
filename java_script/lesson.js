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

const Transaction = {
  DEPOSIT: "deposide",
  WITHDRAW: " withdraw",
};
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
