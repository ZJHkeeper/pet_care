const fs = require("fs");
const http = require("http");
const path = require("path");

const host = "127.0.0.1";
const port = Number(process.env.PORT || 8000);
const root = __dirname;

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const filePath = path.normalize(path.join(root, relativePath));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Pet care page running at http://${host}:${port}/`);
});
