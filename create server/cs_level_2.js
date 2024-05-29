const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.setHeader("content-type", "text/html; charset=utf-8");

    res.write("<h1>Hello world</h1>");
    res.write("<p>Hello world</p>");

    res.end();
  })
  .listen(3500);
