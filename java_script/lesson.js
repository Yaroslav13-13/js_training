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

const a = { x: 1, y: 2 };
const b = a;

a.X = 100;

console.log(a);
console.log(b);

//TODO_______________________________________________________________________
