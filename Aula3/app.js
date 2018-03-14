//var greetMe= function(){
//    console.log("olá george");
//}

//var adeus= function(){
//    console.log("cya");
//}
//greetMe();
//adeus();
//log(greetMe);
//log(adeus);

//var myLogModule =require('./log.js');
//myLogModule.info('Node.js started');
//myLogModule.warning('Node.js started');
//myLogModule.error('Node.js started');
//myLogModule.log.update('Node.js started');

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Exercico 3 da Ficha 3:

/*function download(started,update,completed){
    started();
    for(i=0;i<=100;i++){
        update(i);
    }
    completed();
}
   

var started=function(){
    console.log("Started Download");
}

var update= function(i){
    console.log("Updating..... " + i+"%");
}

var completed= function(){
    console.log("Completed Download");
}

//download(started,update,completed);*/

//Exercicio 4 da Ficha 3
var arrayutils =require('./ArrayUtils.js');
var a=[1,2,3,4,5,6];
//----a)
var max=arrayutils.max(a);
//----b)
var min=arrayutils.min(a);
//----c)
var soma=arrayutils.media(a);
//----d)
var elem=2;
//----e)

console.log(arrayutils.isEmpty(a));
console.log(arrayutils.max(a));
console.log(arrayutils.min(a));
console.log(arrayutils.media(a));
console.log(arrayutils.idx(a,elem));