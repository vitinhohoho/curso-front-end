// var numero = prompt('Informe um numero entre 1 e 3.')

// if (numero == 1){
//     console.log('numero 1')
// }else if (numero == 2) {
//     console.log('numero 2')
// }else if (numero == 3){
//     console.log('numero 3')
// }else {console.log('numero inválido')
//     }

// *******************************************************************

// var numero = prompt('Informe um numero.')

// if (numero >= 11){
//     console.log('maior que 10')
// }else if (numero <=9) {
//     console.log('menor que 10')
// }if (numero == 10){
//     console.log('neutro')
// }

// *******************************************************************

// var numero = prompt('Informe um numero da semana.')

// if (numero == 1){
//     console.log('domingo')
// }if (numero == 2) {
//     console.log('segunda')
// }if (numero == 3) {
//     console.log('terça')
// }if (numero == 4) {
//     console.log('quarta')
// }if (numero == 5) {
//     console.log('quinta')
// }if (numero == 6) {
//     console.log('sexta')
// }if (numero == 7){
//     console.log('sabado')
// }

// **********************************************************************

// var cor = prompt('Escolha entre verde, vermelho e azul.')

// if (cor === 'verde'){
//     console.log('você escolheu verde!')
// }if (cor === 'vermelho') {
//     console.log('você escolheu vermelho!')
// }if (cor === 'azul') {
//     console.log('você escolheu azul!')}

// ***********************************************************************

// let numero1 = parseInt(prompt("Digite o primeiro número:"));
// let numero2 = parseInt(prompt("Digite o segundo número:"));

// if (numero1 % 2 === 0 && numero2 % 2 === 0) {
//     console.log("Ambos os números são pares.");
// } else {
//     console.log("Um ou ambos os números são ímpares.");
// }

// ***********************************************************************

// let operacao = prompt("Digite a operação desejada (+, -, *, /):");

// let numero1 = parseFloat(prompt("Digite o primeiro número:"));
// let numero2 = parseFloat(prompt("Digite o segundo número:"));

// let resultado;

// if (operacao === "+") {
//     resultado = numero1 + numero2;
// } else if (operacao === "-") {
//     resultado = numero1 - numero2;
// } else if (operacao === "*") {
//     resultado = numero1 * numero2;
// } else if (operacao === "/") {
 
//     if (numero2 !== 0) {
//         resultado = numero1 / numero2;
//     } else {
//         resultado = "Divisão por zero não é permitida!";
//     }
// } else {
//     resultado = "Operação inválida!";
// }

// console.log("Resultado:", resultado);

// ************************************************************************

// let nota = parseFloat(prompt("Digite uma nota entre 0 e 10:"));

// if (nota >= 0 && nota <= 10) {
//     if (nota <= 4.9) {
//         console.log("Classificação: Baixa");
//     } else if (nota <= 6.9) {
//         console.log("Classificação: Média");
//     } else {
//         console.log("Classificação: Alta");
//     }
// } else {
//     console.log("Nota inválida! Digite um valor entre 0 e 10.");
// }

// ************************************************************************

// var estado = prompt('Informe seu estado civil: solteiro, casado, divorciado ou viuvo.')

// if (estado == 'solteiro'){
//     console.log('você é solteiro')
// }if (estado == 'casado') {
//     console.log('você é casado')
// }if (estado == 'divorciado') {
//     console.log('você é divorciado')
// }if (estado == 'viuvo') {
//     console.log('você é viuvo')
// }

// ***********************************************************************

// let numero = parseInt(prompt("Digite um número:"));

// if (numero % 2 === 0) {
//     console.log("O número é par.");
// } else {
//     console.log("O número é ímpar.");
// }

// // ***********************************************************************

// let idade = parseInt(prompt("Digite sua idade:"));

// if (idade >= 18) {
//     console.log("Você é maior de idade.");
// } else {
//     console.log("Você é menor de idade.");
// }

// ***********************************************************************

function verificaParImpar(){
    const numero1 = parseInt(prompt('Informe o numero:'))

    if (numero1 % 2 ==1){
        console.log('seu numero é impar')
    }else {
        console.log('seu numero é par')
    }
}

function numeroUmTres(){
    var numero = prompt('Informe um numero entre 1 e 3.')

    if (numero == 1){
        console.log('numero 1')
    }else if (numero == 2) {
        console.log('numero 2')
    }else if (numero == 3){
        console.log('numero 3')
    }else {console.log('numero inválido')
        }
}

const questao = parseInt(prompt('Informe a questao desejada:'))

if (questao === 1){
    numeroUmTres()
}else if (questao === 9){
    verificaParImpar()
}else{
    console.log('Questão inválida')
}