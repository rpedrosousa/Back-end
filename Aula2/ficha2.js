function calculo(peso, altura){
    return peso/(altura*altura);

}

function imc(){
var peso = 70;
var altura = 150;
var imc1 = calculo(peso,altura);
    switch(imc1){
        case imc1<18.5:
            console.log("o seu imc é"+ imc1 +" Abaixo do peso -> ");
            break;
        case 18.5<=imc1<=25:
            console.log("o seu imc é"+ imc1 +" normal -> ");
            break;
        case 25<imc1<=30:
            console.log("o seu imc é"+ imc1 +" acima do peso -> ");
            break;
        case imc1>30:
            console.log("o seu imc é"+ imc1 +" de um obeso -> ");
            break;    
    }

}

console.log( imc());