const http = require("http");

const PORT = 3500;

http
  .createServer((req, res) => {
    const url = req.url;

    res.setHeader("content-type", "text/html; charset=utf-8");

    switch (url) {
      case "/": {
        res.write("<h1>hello world</h1>");
        break;
      }
      case "/users": {
        res.write("<h1>users</h1>");
        break;
      }
      case "/posts": {
        res.write("<h1>posts</h1>");
        break;
      }
      default: {
        res.write("<h1>404</h1>");
      }
    }

    res.end();
  })
  .listen(PORT);
