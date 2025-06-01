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

//?          метод Object.keys

//?          метод Object.value
