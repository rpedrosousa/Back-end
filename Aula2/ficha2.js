//EX1 - Escreva uma função que calcule o índice de massa corporal de uma pessoa e imprima a sua condição física. A fórmula contém o peso em kg e a altura em metros


function calculo(peso, altura){
    return peso/(altura*altura);

}

function imc(){
var peso = 80;
var altura = 1.75;
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

//imc();  (TIRAR A // PARA FUNCIONAR)

//EX2 Escreva uma função que dada uma frase imprima a mesma frase por ordem inversa. 
function inverso(){
    var str="Hoje e Domingo";
    var tamanho=str.length;
    var res=str.chartAt(0);
    return res;
}

console.log(inverso());