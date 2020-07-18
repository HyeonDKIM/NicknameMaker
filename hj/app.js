const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hello, world!')
});

app.listen(3100, function(){
    console.log('3000 port open for test server')
});