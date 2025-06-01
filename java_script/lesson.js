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

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(dog[key]);
//   }
// }

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
const salaries = {
  Yaroslav: 160,
  Maria: 120,
  Viktoria: 90,
};

function summa(obj) {
  let sum = 0;
}
summa(salaries);
