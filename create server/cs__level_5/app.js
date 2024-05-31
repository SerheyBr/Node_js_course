const http = require("http");
const fs = require("fs");

const PORT = 3500;

http
  .createServer((req, res) => {
    const url = req.url;

    switch (url) {
      case "/": {
        const data = fs.readFileSync("./public/index.html");
        res.write(data);
        res.end();
        break;
      }
      case "/contacts": {
        const data = fs.readFileSync("./public/contacts.html");
        res.write(data);
        res.end();
        break;
      }
      default: {
        if (url.includes("/images")) {
          fs.readFile("./public" + url, (err, data) => {
            if (err) {
              res.end();
            } else {
              console.log("sdsd");
              res.end(data);
            }
          });
        } else {
          res.end();
        }
      }
    }
  })
  .listen(PORT);
