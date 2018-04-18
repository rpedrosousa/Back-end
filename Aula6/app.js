const express = require('express');
const app = express();


var fs= require('fs');//fs = fyle system

function readFile(fileName){
    var ficha = fs.readFileSync(fileName,'utf-8');
    return ficha;
}

fs.appendFile('mensagem.txt',' Herro People!',(err)=>{
    if (err) throw err;
    console.log('Save!');
});
//Ex b)
// var html=fs.readFileSync("./mensagem.txt",'utf.8');

// app.get('/',function(request,response){
//     response.send("root");
// });

//Ex c)
// app.get('/',function(request,response){
//     const body= 'Adeus';
//     response.writeHead(200,{
//         'Content-Length':Buffer.byteLength(body),
//         'Content-Type': 'text/plain'
//     });
//     response.end(body);
// });

//Ex d e f)
// app.get('/',function(request,response){
//     var data=new Date();
//     var html=fs.readFileSync("./index.html",'utf-8');//abre o ficheiro
//     var htmlf=html.replace("{Template}",data);
//     const body= htmlf;//mete a constante do ficheiro html no valor do body
//     response.writeHead(200,{//prepara o cabeçalho
//         'Content-Length':Buffer.byteLength(body),
//         'Content-Type': 'text/html'//text/plain -> se for pra mandar texto. text/html se for pra enviar um ficheiro html
//     });
//     response.end(body);//envia a constante body
// });

//Ex g h)
app.get('/user/:name', function(request, response) {
    var html = fs.readFileSync('./index.html', 'utf-8');
    const name = request.params.name;
    htmlF = html.replace("{ Template }", name);
    response.writeHead(200,{
        'Content-Length':Buffer.byteLength(htmlF),
        'Content-Type': 'text/html'
    });
    response.end(htmlF);
});

//Ex i j k)


app.listen(3000, () =>{
    fs.writeFileSync("./mensagem.txt");
    console.log('Example app listening on port 3000!');
});