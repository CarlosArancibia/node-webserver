const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Disposition", "attachment; filename=list.csv");
  res.writeHead(200, { "Content-Type": "application/csv" });

  res.write("id, name\n");
  res.write("1, Carlos\n");
  res.write("2, Mara\n");
  res.write("3, Luz\n");
  res.write("4, Jose\n");
  res.end();
});

server.listen(8080);

console.log("listen port", 8080);
