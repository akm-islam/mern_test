var express = require('express')
    , bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://akm:Ma%40142566@3.140.216.86:27017/cool_db';
var app = express();
app.use(bodyParser.json());
app.get('/', function (req, res) {
    console.log(req)
    res.send('Hello World');
})
app.post('/home', function (req, res) {
    console.log(req.body.a);
    res.json({ answer: 42 });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})