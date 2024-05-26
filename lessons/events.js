const Emitter = require("events");

const emitter = new Emitter();

emitter.once("message", (data, second, third) => {
  console.log("вы прислали сообщение " + data);
  console.log("второй аргумент " + second);
});

// const MESSAGE = process.env.MESSAGE || "";

// if (MESSAGE) {
//   emitter.emit("message", MESSAGE, 123);
// } else {
//   emitter.emit("message", "сообщение не найдено", 123);
// }

// console.log(MESSAGE);

emitter.emit("message", "43", "54");
emitter.emit("message", "44", "44");
