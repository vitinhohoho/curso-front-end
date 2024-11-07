
// // tipos de dados

// // texto =string
// const texto = 'Eu sou um texto'

// // numerico = in /float /double
// const numero_inteiro = 30
// const numero_flutuante = 18.5

// // logica = boolean
//     const ligado = false

//     // nulo = null
//     const presidente = null

//     // Lista de dados = array
//     const frutas = ['maça', 'goiaba', 'uva']
    
//     // não é um numero = NaN (Not a number)
//     // indefinido = undefined

//     // console.log(typeof(texto))
//     // console.log(typeof(numero_inteiro))
//     // console.log(typeof(numero_flutuante))
//     // console.log(typeof(ligado))
//     // console.log(typeof(presidente))
//     // console.log(typeof(frutas))

//     // let idade = parseInt(prompt('informa a sua idade'))

//     // console.log(idade)
//     // console.log(typeof(idade))
        
//     // console.log(parseInt(idade))
//     // console.log(typeof(parseInt(idade)))

//     let numero1 = parseInt(prompt('primeiro numero')) 
//     let numero2 = parseInt(prompt('segundo numero')) 

//     let soma = numero1 + numero2
//     let subtracao = numero1 - numero2
//     let multiplicacao = numero1 * numero2
//     let divisao = numero1 / numero2

//     console.log(soma)
//     console.log(subtracao)
//     console.log(multiplicacao)
//     console.log(divisao)

// var idade = parseInt(prompt('digite a idade'))

// if (idade >= 150){
//     console.log('Idade inválida')
//     alert('Idade inválida')
// }
// else if(idade >= 18) {
//     console.log('Você é maior de idade')
// }
// else{
//     console.log('menor de idade')
// }

// var idade = parseInt(prompt('qual a sua idade?'))

// if (idade >= 18){
//     console.log('Pode assistir o filme')
// }
// else if (idade >=16){
//     var acompanhado = prompt('Está acompanhado? s / n ')

//     if(acompanhado == 's'){
//         console.log('Pode assistir')
//     }
//     else{
//         alert('Você não pode assistir desacompanhado')
//     }

// }else{
//     alert('Você é menor de idade')
// }

var atividade = 1
var nota_atividade = 8.2

if ((atividade == true) || (nota_atividade >=5)){
    console.log('Pode ir embora')
}
else{
    console.log('não pode ir embora')
}