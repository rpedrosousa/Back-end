var Emitter=function(){
    this.events={};
}

//o "on" serve pra registar "eventos" e "listeners"
Emitter.prototype.on=function(type,listener){
    if(this.events[type]==undefined){
        this.events[type]=[];
    }
    this.event[type].push(listener);

}

emitr.on("greet",function(){
    console.log()
})