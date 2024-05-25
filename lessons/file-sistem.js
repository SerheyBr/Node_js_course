const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");

const pathtest = path.resolve(__dirname, "dir");

// fs.mkdir(pathtest, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.rmdir(pathtest, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

const writeFileAsync = async (path, data) => {
  return new Promise((res, rej) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return rej(err);
      }
      res();
    });
  });
};

const appendFileAsync = async (path, data) => {
  return new Promise((res, rej) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return rej(err.message);
      }
      res();
    });
  });
};

const readFileAsync = async (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        return rej(err.message);
      }
      res(data);
    });
  });
};

const remoeFileAsync = async (path) => {
  return new Promise((res, rej) => {
    fs.rm(path, (err) => {
      if (err) {
        return rej(err.message);
      }

      res();
    });
  });
};

// writeFileAsync(path.resolve(__dirname, "test.txt"), "test")
//   .then(() => {
//     return appendFileAsync(path.resolve(__dirname, "test.txt"), " -->text#1");
//   })
//   .then(() => {
//     return appendFileAsync(path.resolve(__dirname, "test.txt"), " -->text#2");
//   })
//   .then(() => {
//     return appendFileAsync(path.resolve(__dirname, "test.txt"), " -->text#3");
//   })
//   .then(() => {
//     return appendFileAsync(path.resolve(__dirname, "test.txt"), " -->text#4");
//   })
//   .then(() => {
//     return appendFileAsync(path.resolve(__dirname, "test.txt"), " -->text#5");
//   })
//   .then(() => {
//     return readFileAsync(path.resolve(__dirname, "test.txt"));
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err, "error");
//   });

remoeFileAsync(path.resolve(__dirname, "test.txt"));
