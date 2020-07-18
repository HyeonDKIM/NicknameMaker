const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs')

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    fs.readFile("main.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

app.listen(3100, function(){
    console.log('3100 port open for test server')
});