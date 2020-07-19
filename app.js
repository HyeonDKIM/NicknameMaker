const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
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

mongoose.connect('mongodb://localhost/letters');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection err'));
db.once('open', function callback(){
    console.log("mongodb on");
});


//https://www.geeksforgeeks.org/signup-form-using-nodejs-and-mongodb/

app.post('/submit', function(req, res){
    var GetLetter = req.body.GetLetter;
    var LetterData = {
        "res": GetLetter
    }
    db.collection('letter').insertOne(LetterData, function(err, col){
        if (err) throw err;
        console.log("Record inserted");
    });
    return res.redirect('submit_success.html');
})


app.listen(3100, function(){
    console.log('3100 port open for test server')
});
