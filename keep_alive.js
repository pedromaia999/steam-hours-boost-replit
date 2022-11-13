var http = require('http');

http.createServer(function (req, res) {
  res.write("Estou Online");
  res.end();
}).listen(8080);