//var log= {
//    info: function(info){
//        console.log('Info: ' + info);
//    },
//    warning: function(warning){
//        console.log('Warning: ' + warning);
//    },
//    error: function(error){
//        console.log('Error: ' + error);
//   }
//};

//var log2= {
//    update: function(update) {
//        console.log('Update: ' + update);
//    }
//};

//module.exports.log = log2;

var download={
    start: function(start){
        for(i=0;i<=100;i++){
            console.log(i+"% of Download");
        }
    }
};

module.exports=download