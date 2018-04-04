function Person(x,y){
    this.firstName=x;
    this.lastName=y;
}

Person.prototype.age= undefined;

Person.prototype.greet=function(){
    console.log("Hello "+this.firstName+" "+this.lastName+" "+"is "+this.age+" old");
}

var john = new Person("John","Deep");
john.age= 10;
john.greet();

var palito = new Person("José","Malhoa");
palito.age= 6;
palito.greet();

var orisa = new Person("Feed","Brinhette");
orisa.age=18;
orisa.greet();

console.log(john.__proto__);
console.log(palito.__proto__);
console.log(orisa.__proto__);
console.log(orisa.__proto__ == palito.__proto__);
console.log(__proto__);


//obj.age=12; ==  obj["age"]=12;
//var a = "age"     obj[a]=12;  => It is not an array.