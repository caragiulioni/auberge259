<<<<<<< HEAD
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req,response){
	res.sendfile(__dirname + "/dist/index.html");
});

app.listen(port);

=======
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req,response){
	res.sendfile(__dirname + "/dist/index.html");
});

app.listen(port);

>>>>>>> 90d2f7706c8e48c37a63afa6c06532f608cb5282
console.log("Server started....")