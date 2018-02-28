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
            console.log("Potência deste numeros é --> ", numN1^numN2);
            break;
        
    }

}

main();
