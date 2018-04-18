const express = require('express');
const app = express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var fs= require('fs');//fs = fyle system

function readFile(fileName){
    var ficha = fs.readFileSync(fileName,'utf-8');
    return ficha;
}

app.get('/listPerson', function(request,response){
    var f = readFile("./person.json");
    response.send(f);
});

app.post('/addPerson', function(request,response){
    var file= readFile("./person.json");
    var jsonData= JSON.parse(file);
    var size= Object.keys(jsonData).length;
    var id = ++size;
    var p = request.body;
    p.id=id;
    jsonData["person" + id] = p;
    response.send(jsonData);
});

app.delete('/deletePerson', function(request,response){
    var del=readFile("./person.json");
    var jsonData= JSON.parse(del);
    delete jsonData[ 'person' + request.body.id];
    response.send(jsonData);
});

app.get('/selPerson/:id',function(request,response){
    var sel=readFile("./person.json");
    var jsonData=JSON.parse(sel);
    var person= jsonData['person' + request.params.id];
    response.send(person);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
