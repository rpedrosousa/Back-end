var Emitter=function(){
    this.events={};
}

//o "on" serve pra registar "eventos" e "listeners"
Emitter.prototype.on=function(type,listener){
    if(this.events[type]==undefined){
        this.events[type]=[];
    }
    this.events[type].push(listener);

}

Emitter.prototype.emit= function(type){
    if(this.events[type] !=undefined){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;

//Listener e callback(funçao para indentificar o user)