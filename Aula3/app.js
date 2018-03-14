function log() {
    
}

var greetMe= function(){
    console.log("olá george");
}

var adeus= function(){
    console.log("cya");
}
greetMe();
adeus();
log(greetMe);
log(adeus);

var myLogModule =require('./log.js');
myLogModule.info('Node.js started');
myLogModule.warning('Node.js started');
myLogModule.error('Node.js started');

myLogModule.update('Node.js started');