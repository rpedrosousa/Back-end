const express = require('express');
const app = express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var fs= require('fs');

function readFile(fileName){
    var file = fs.readFileSync(fileName,'utf-8');
    return file;
}

app.get('/listPerson', function(request,response){
    var f = readFile("./person.json");
    response.send(f);
});

app.post('/addPerson', function(request,response){
    var file= readFile("./person.json");
    var jsonData= JSON.parse(file);
    var size= Object.keys(jsonData).length;
    var id = size++;
    var p = request.body;
    console.log(p);

    p.id=id;
    jsonData["person" + id] = p;
    response.send(jsonData);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
