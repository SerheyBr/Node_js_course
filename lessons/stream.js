const path = require("path");
const fs = require("fs");

// fs.readFile(path.resolve(__dirname, "text.txt"), (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"));

stream.on("data", (chunk) => {
  console.log(chunk);
});
