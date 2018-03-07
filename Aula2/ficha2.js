function calculo(peso, altura){
    return peso/(altura*altura);

}

function imc(){
var peso = 70;
var altura = 1.50;
var imc1 = calculo(peso,altura);
    if(imc1<18.5){
        console.log("o seu imc é "+ imc1 +": Abaixo do peso ");
    }
    else if(imc1>=18.5 && imc1<25){
        console.log("o seu imc é "+ imc1 +": normal ");
    }
    else if(imc1>=25 && imc1<30){
        console.log("o seu imc é "+ imc1 +": acima do peso ");
    }
    else{
        console.log("o seu imc é "+ imc1 +": de um obeso");
    }
}

imc();