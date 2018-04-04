var array = [];

array.push(function(){
    console.log("HW1");
});

array.push(function(){
    console.log("HW2");
});

for (var i = 0; i < array.length; i++) {
    array[i]();
}

array.forEach(function(item){
    item();
})