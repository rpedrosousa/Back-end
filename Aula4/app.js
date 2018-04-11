//exercicio 2
//a)
var obj= {
    name:"Palito",
    age:6,
    gender:"M"
};
var nome=JSON.stringify(obj);

console.log(nome);
//-----------------------------------------------------------------------------------------------------------
//b)
var str='{"name":"Palito","age":6,"gender":"M"}';
var demo= JSON.parse(str);

console.log(demo);

//-----------------------------------------------------------------------------------------------------------
//exercicio 5
var Emitter = require("./emitter");
//exercicio 6
var eventConstants = require("./constants");

var emtr=new Emitter();

emtr.on(eventConstants.GREET, function(){
    console.log("Somewhere, someone said hello");
});

emtr.on(eventConstants.GREET, function(){
    console.log("A greeting ocurred");
});


//Invocar todas as funcoes que forem adicionada com tipo greet
emtr.emit(eventConstants.GREET);
emtr.emit(eventConstants.FILESAVED);