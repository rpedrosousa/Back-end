const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening att http://%s:%s", host,port);
})