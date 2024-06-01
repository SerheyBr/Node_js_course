const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3500;

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".txt": "text/plain",
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".woff": "application/font-woff",
  ".woff2": "application/font-woff2",
  ".ttf": "application/font-ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "application/font-otf",
  ".swf": "application/x-shockwave-flash",
  ".wasm": "application/wasm",
};

const staticFile = (res, path, ext) => {
  res.setHeader("Content-type", mimeTypes[ext]);
  fs.readFile("./public" + path, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end();
    } else {
      res.end(data);
    }
  });
};

http
  .createServer((req, res) => {
    const url = req.url;

    switch (url) {
      case "/": {
        staticFile(res, "/index.html", ".html");
        break;
      }
      case "/contacts": {
        staticFile(res, "/contacts.html", ".html");
        break;
      }
      default: {
        const extName = path.extname(url);
        console.log(url);
        if (extName in mimeTypes) {
          staticFile(res, url, extName);
        } else {
          res.statusCode = 404;
          res.end();
        }
      }
    }
  })
  .listen(PORT);
