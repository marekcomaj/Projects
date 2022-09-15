let http = require('http');

let express = require('express');

let app = express();

app.get('/', function(req, res){
    res.send('this is the homepage');
})

app.get('/home', function(req, res){
    res.sendFile(__dirname + '/index.html');
})


app.listen(3000);
