const express = require('express');
const server = express();
const fs = require('fs');
const bodyParser=require('body-parser');
const uuidv1 = require('uuid/v1');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

function readFile(fileName){
    var ler =fs.readFileSync(fileName,'utf-8');
    return ler;
}

server.get('/listvideo',function(request,response){
    var video = readFile("./videos.json");
    response.send(video);
});

server.post('/addvideo',function(request,response){
    var file = readFile("./videos.json");
    var jsonData= JSON.parse(file);
    var size=Object.keys(jsonData).length;
    var id=uuidv1();
    var p = request.body;
    p.id=uuidv1();
    jsonData["video"+id]=p;
    response.send(jsonData);
});


server.listen(3000, () => console.log('Processing...'));