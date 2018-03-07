
//função para ver nota final
function notaFinal(nota1,nota2,nota3){
    return nota1 * 0.3 + nota2* 0.3 + nota3 * 0.4 ;
}

function main(){
    var nota1=13;
    var nota2=14;
    var nota3=11;
    var notaF =notaFinal(nota1,nota2,nota3);
    console.log("Nota Final--> "+ notaF);
    if(notaF < 9.5){
        console.log("Reprovado");
    }
    else{
        console.log("Aprovado");
    }



}
//numero do mes e retorna o nome do mes
function main(){
    var mes=3;
    switch(mes){
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
    }
}

// função de calculadora
function main(){
    var numN1= 21;
    var numN2= 96;
    var conta= "elevado";
    switch(conta){
        case "mais":
            console.log("Soma deste numeros é --> ", numN1+numN2);
            break;
        case "menos":
            console.log("Subtração deste numeros é --> ", numN1-numN2);
            break;
        case "vezes":
            console.log("Multiplicação deste numeros é --> ", numN1*numN2);
            break;
        case "divisao":
            console.log("Divisão deste numeros é --> ", numN1/numN2);
            break;
        case "elevado":
            console.log("Potência deste numeros é --> ", Math.pow(numN1,numN2));
            break;
        
    }

}
//multiplos de 5 menores q 20
function main(){
    for(i=1;i<20;i++){
        if(i%5==0){
            console.log(i);
        }
    }
}

//soma de todos os numeros de 1 a 100

function main(){
    var soma=0;
    for(i=1;i<101;i++){
        soma+=i;
    }
    console.log(soma);
}

//funçao factorial de um numero

function factorial(n){
    if (n==0 || n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
    
}
//console.log(factorial(5));

//funçao que calcula o máximo, mínimo e a média de uma sequência de números

function max(numG1,numG2,numG3){
    if(numG1 > numG2 && numG1 > numG3){
        return numG1;
    }
    else if(numG2 > numG1 && numG2 > numG3){
        return numG2;
    }
    else{
        return numG3;
    }
}

function min(numG1,numG2,numG3){
    if(numG1 < numG2 && numG1 < numG3){
        return numG1;
    }
    else if(numG2 < numG1 && numG2 < numG3){
        return numG2;
    }
    else{
        return numG3;
    }
}

function media(numG1,numG2,numG3){    
    return (numG1+numG2+numG3)/3;
}

function seq(){
    var numG1=2;
    var numG2=4;
    var numG3=6;
    var v_min=min(numG1,numG2,numG3);
    var v_max=max(numG1,numG2,numG3);
    var v_media=media(numG1,numG2,numG3);
    return ("O Maior valor é: "+v_max+"\n"+"O Menor valor é: "+v_min+"\n"+"A Média dos valores é: "+v_media);
}

console.log(seq());