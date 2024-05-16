const path = require("path");

// console.log("склеить участки пути", path.join(__dirname, "$$$", "qwe"));
// console.log("получить абсолютный путь", path.resolve("123", "asd"));

const fullPath = path.resolve("papka", "test.js");

console.log("парсинг пути", path.parse(fullPath));
console.log("разделитель в ОС", path.sep);
console.log("проверка на абсолютный путь", path.isAbsolute("/lessons/path.js"));
console.log("название файла", path.basename(fullPath));
console.log("расширение файла", path.extname(fullPath));

//-------------------------------------
const siteUrl = "http://localhost:8080/uses?id=5123";

const url = new URL(siteUrl);

console.log(url);
