var fs = require('fs'),
    http = require('http');

function writedata(data) {
	fs.writeFile("/data/balance", data, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("The data was saved!");
		}
	}); 
}

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(80);