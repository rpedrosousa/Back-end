const express = require('express');
const server = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

//-----------------------FUNÇÃO QUE LÊ FICHEIROS-----------------------//
function readFile(fileName) {
    var ler = fs.readFileSync(fileName, 'utf-8');
    return ler;
}

//-----------------------LISTAR TODOS OS VIDEOS QUE ESTAO NO VIDEOS.JSON-----------------------//
server.get('/listvideo', function (request, response) {
    var video = readFile("./videos.json");
    response.send(video);
});

//-----------------------ADICIONAR VIDEOS AO VIDEOS.JSON A PARTIR DO BODY DO POSTMAN-----------------------//

server.post('/addvideo', function (request, response) {
    var file = readFile("./videos.json");
    var jsonData = JSON.parse(file);
    var size = Object.keys(jsonData).length;
    var id = ++size;
    var p = request.body;
    p.id = uuidv1();
    jsonData["video" + p.id] = p;
    var jsonStringify = JSON.stringify(jsonData, null, 2);
    fs.writeFile("./videos.json", jsonStringify, finished);
    function finished(err) {
        response.send("Sucesso video adicionado!");
    }
});

//-----------------------APAGAR VIDEOS DO VIDEOS.JSON A PARTIR DO ID E SE ERRAR DEVOLVE ERRO-----------------------//
server.delete('/delvideo/:id', function (request, response) {
    var constante = false;
    var del = readFile("./videos.json");
    var jsonData = JSON.parse(del);
    id = request.params.id;
    if (jsonData['video' + id]) {
        delete jsonData['video' + id];
        var jsonStringify = JSON.stringify(jsonData, null, 2);
        fs.writeFileSync('./videos.json', jsonStringify);
        response.send("Sucesso video removido!");
    }
    else {
        response.send("ERRO!");
    }
});

//-----------------------SELECIONAR VIDEO DO VIDEOS.JSON A PARTIR DO ID-----------------------//
server.get('/selvideo/:id', function (request, response) {
    var select = readFile("./videos.json");
    var jsonData = JSON.parse(select);
    var video = jsonData['video' + request.params.id];
    response.send(video);
});

//-----------------------SELECIONAR TODOS OS VIDEOS DO VIDEOS.JSON A PARTIR DO UPLOADER (POR EXEMPLO)-----------------------//
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

//-----------------------ADICIONAR COMENTARIOS AO VIDEOS.JSON ATRAVES DO ID (POR EXEMPLO)-----------------------//
server.post('/addcomment/', function (request, response) {
    var add = readFile("./videos.json");
    var jsonData = JSON.parse(add);
    var comment = request.body;
    var size = Object.keys(jsonData).length;
    for (var x in jsonData) {
        if (x == 'video' + comment.id) {
            jsonData[x].comments.push(comment.comments);
        }
    }
    var jsonStringify = JSON.stringify(jsonData);
    fs.writeFile("./videos.json", jsonStringify);
    response.send("Foi adicionado comentário com sucesso" + " " + jsonData['video' + comment.id].comments);
});

//-----------------------MOSTRAR O NUMERO DE VISUALIZAÇÕES DOS VIDEOS DO VIDEOS.JSON ATRAVEZ DO ID E ACTUALIZA-SE-----------------------//
server.get('/numerviz/:id', function (request, response) {
    var file = readFile("./videos.json");
    var jsonData = JSON.parse(file);
    var numero = request.params.id;
    var visao = request.body;
    var size = Object.keys(jsonData).length;
    for (var x in jsonData) {
        if (x == 'video' + numero) {
            jsonData[x].views++;
        }
    }
    var numerototal = ['Foi adicionado uma visualização para o video: ' + ' ' + numero + ' ' + ', Numero total de visualizações é: ' + jsonData['video' + numero].views];
    var jsonStringify = JSON.stringify(jsonData);
    fs.writeFile("./videos.json", jsonStringify);
    response.send(numerototal);
});

//-----------------------MOSTRAR A LISTA ORDENADA DE VIDEOS DO VIDEOS.JSON A PARTIR DO NUMERO DE VISUALIZAÇÕES (POR EXEMPLO)-----------------------//
server.get('/listordenada', function (request, response) {
    var ficheiro = readFile("./videos.json");
    var jsonData = JSON.parse(ficheiro);
    var size = Object.keys(jsonData).length;
    var receber = request.params.views;
    var final = [];
    for (var video in jsonData) {
        if (jsonData.hasOwnProperty(video)) {
            if (jsonData.video == receber) {
                final.push(jsonData[video]);
            }
        }
    }
    final.sort(function (a, b) {
        return a.comments.length - b.comments.length;
    });
    response.send(final);
});

// var final = [];
// var minimo;
// var resto;
// //Atravez de um SelectSort
// for (var video in jsonData) {
//     final.push(video);
// }
// for (var i = 0; i < final.length; i++) {
//     minimo = i;
//     for (var j = i + 1; j < final.length; j++) {
//         if (jsonData[final[j]].views < jsonData[final[minimo]].views) {
//             minimo = j;
//         }
//     }
//     resto = jsonData[final[i]];
//     jsonData[final[i]] = jsonData[final[minimo]];
//     jsonData[final[minimo]] = resto;
// }
// response.send(jsonData);

server.listen(3000, () => console.log('Processing...'));