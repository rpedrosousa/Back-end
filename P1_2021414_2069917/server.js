const express = require('express');
const server = express();
const fs = require('fs');
const bodyParser = require('body-parser');
var arraySort = require('array-sort');
var sortBy = require('sort-by');
const uuidv1 = require('uuid/v1');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

function readFile(fileName) {
    var ler = fs.readFileSync(fileName, 'utf-8');
    return ler;
}

server.get('/listvideo', function (request, response) {
    var video = readFile("./videos.json");
    response.send(video);
});

server.post('/addvideo', function (request, response) {
    var file = readFile("./videos.json");
    var jsonData = JSON.parse(file);
    var size = Object.keys(jsonData).length;
    var id = ++size;
    var p = request.body;
    p.id = uuidv1();
    jsonData["video" + id] = p;
    var jsonStringify = JSON.stringify(jsonData, null, 2);
    fs.writeFile("./videos.json", jsonStringify, finished);
    function finished(err) {
        response.send("Sucesso video adicionado!");
    }
});

server.delete('/delvideo', function (request, response) {
    var constante = false;
    var del = readFile("./videos.json");
    var jsonData = JSON.parse(del);
    if (jsonData['video' + request.body.id]) {
        delete jsonData['video' + request.body.id];
        var jsonStringify = JSON.stringify(jsonData, null, 2);
        fs.writeFileSync('./videos.json', jsonStringify);
        response.send("Sucesso video removido!");
    }
    else {
        response.send("Erro!");
    }
});

server.get('/selvideo/:id', function (request, response) {
    var select = readFile("./videos.json");
    var jsonData = JSON.parse(select);
    var video = jsonData['video' + request.params.id];
    response.send(video);
});


server.get('/selallvideo/:uploader', function (request, response) {
    var constante = false;
    var f = readFile("./videos.json");
    var jsonData = JSON.parse(f);
    var uploader = request.params.uploader;
    var vid = [];
    for (var x in jsonData) {
        if (uploader == jsonData[x].uploader) {
            constante = true;
            vid = vid + JSON.stringify(jsonData[x], null, 4);
        };
    }
    if (constante == true) {
        fs.readFile("./videos.json", "utf8", function (err) {
            response.send(vid);
        });
    } else {
        response.send("não existe uploader");
    }
});

server.post('/addcomment/:id', function (request, response) {
    var add = readFile("./videos.json");
    var jsonData = JSON.parse(add);
    var comment = request.params.id;
    var comentar = request.body.comments;
    var size = Object.keys(jsonData).length;
    for (var i = 1; i <= size; i++) {
        if (jsonData["video" + i].id == comment) {
            jsonData["video" + i].comments.push(comentar);
        }
    }
    var jsonStringify = JSON.stringify(jsonData, null, 2);
    fs.writeFile("./videos.json", jsonStringify);
    response.send("Foi adicionado comentário com sucesso : " + jsonData["video" + comment].comments);
});

server.get('/numerviz/:id', function (request, response) {
    var file = readFile("./videos.json");
    var jsonData = JSON.parse(file);
    var numero = request.params.id;
    var visao = request.body.views;
    var size = Object.keys(jsonData).length;
    for (var i = 1; i <= size; i++) {
        if (jsonData["video" + i].id == numero) {
            jsonData["video" + i].views++;
        }
    }
    var numerototal = ['Foi adicionado uma visualização para o video: ' + numero + ', Numero total de visualizações é: ' + jsonData["video" + numero].views];
    var jsonStringify = JSON.stringify(jsonData, null, 2);
    fs.writeFile("./videos.json", jsonStringify);
    response.send(numerototal);
});

server.get('/listordenada', function (request, response) {
    var ficheiro = readFile("./videos.json");
    var jsonData = JSON.parse(ficheiro);
    var size = Object.keys(jsonData).length;
    var final = [];
    var minimo;
    var resto;
    //Atravez de um SelectSort
    for (var video in jsonData) {
        final.push(video);
    }
    for (var i = 0; i < final.length; i++) {
        minimo = i;
        for (var j = i + 1; j < final.length; j++) {
            if (jsonData[final[j]].views < jsonData[final[minimo]].views) {
                minimo = j;
            }
        }
        resto = jsonData[final[i]];
        jsonData[final[i]] = jsonData[final[minimo]];
        jsonData[final[minimo]] = resto;
    }
    response.send(jsonData);
});

server.listen(3000, () => console.log('Processing...'));