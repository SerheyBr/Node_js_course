const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3500;

http
  .createServer((req, res) => {
    const url = req.url;
    res.setHeader("content-type", "text/html; charset=utf-8");
    switch (url) {
      case "/": {
        res.write(fs.readFileSync(path.resolve(__dirname, "index.html")));
        break;
      }
      case "/contacts": {
        res.write(fs.readFileSync(path.resolve(__dirname, "contacts.html")));
        break;
      }
      default: {
        res.write("404");
      }
    }

    res.end();
  })
  .listen(PORT);
