const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });

  if (req.url === "/users") {
    return res.end(
      JSON.stringify({
        name: "Searhey",
        age: 27,
      })
    );
  }
  if (req.url === "/posts") {
    return res.end("POSTS");
  }
  res.end("fghjk");
});

server.listen(PORT, () => {
  console.log(PORT);
});
