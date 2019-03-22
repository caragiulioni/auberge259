const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req,response){
	res.sendfile(__dirname + "/dist/index.html");
});

server.listen(process.env.PORT || port)

console.log("Server started....")