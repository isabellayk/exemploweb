// // Declarações e variaveis
// // var, let const

// var nome = "Fiap";
// console.log(nome);

// var nome = "Teste";
// console.log(nome);

// if (true){
//     let apelido = "Fiapinho"
//     console.log(apelido);
// }

// const taxaJuros = 0.05;
// console.log(taxaJuros);
// // taxaJuros = 1.5;

// var exemplo = "ola-dev-var";
// console.log(typeof exemplo) ;

// let exemplo1 = "ola-dev-let";
// console.log(exemplo1);

// const exemplo2 = "ola-dev-const";
// console.log(exemplo2);

// let exemplo3 = 10;
// console.log(typeof exemplo3);

// let exemplo4= true;
// console.log(exemplo4);

// let exemplo5={nome1:"teste"};
// console.log(exemplo5);

// let exemplo6 = ["java", "C#", "PHP"];
//     console.log(exemplo6);

// //valor undefined
// let exemplo7;
// console.log(exemplo7);

// //valor vazio
// let exemplo8 = null;
// console.log(exemplo8);

// //Operadores Aritméticos

// const valor1= 10;
// const valor2=20;

// console.log(valor1 + valor2)
// console.log(valor1 - valor2)
// console.log(valor1 * valor2)
// console.log(valor1 / valor2)

// //Operadores lógicos

// console.log(valor1 < valor2);
// console.log(valor1 > 10 && valor2 < 10);
// console.log(valor1 > 100 || valor2 > 10); 
// // && = and || = or
// console.log(valor1 == valor2); //valor
// console.log(valor2 === valor1) //valor e tipo
// //******************************************************************** */

// //1) Utilizando as variáveis p (preço do produto) e  v(valor do desconto), 
// // crie uma nova variável 
// //chamada precoFinal que subtraia o desconto do preço e exiba o resultado.

// const p = 20;
// const v = 0.5;
// const precoFinal = p - v;
// console.log("O preço final com desconto é", precoFinal);

// //2) Crie uma condição que verifique se o valor de 
// //a é estritamente igual a 20 e se b é maior ou igual a 10.
// //O console deve retornar true

// const a = 20
// const b = 13
//  let comparar = (a ==20 && b>=10)
// console.log("O resultado é:", comparar)
// console.log(a==+20 && b>=10)

// //3)Verificação de Segurança (Login e Token)
// //No banco, para autorizar uma transação, precisamos que o usuário 
// // esteja logado e que o token de segurança seja válido.

// var user_login = true;
// var user_password = true;
// if (user_login ==  true){
//     console.log("Transação Realizada")
// }


// const usuarioLogado = 20;
// const tempoToken = 10;

// const transacao = (usuarioLogado === 20 && tempoToken >=10);
// console.log("Transação Autorizada ", transacao)


// Estrutura condicional

// if 

if (true){
    console.log ("verdadeiro")
}

let nome = "fiap";

if (nome == "fiap"){
    console.log("Nome correto")
}

//if / else
if (nome == "fiap"){
    console.log("Usuario Correto")
}else{
    console.log("Usuario Errado")
}

// if encadeado / aninhado

let idade = 55;

if(idade <= 13){
    console.log("é uma criança")
} else if(idade > 13 && idade < 18){
    console.log("é um adolescente")
} else if(idade>=18 && idade<=59){
    console.log("é um adulto")
}else{
    console.log("é um idoso")
}

// Switch case

let pratos = "lasanha";

switch(pratos){
    case "macarrao":
        console.log("a melhor massa")
        break;
    case "salada":
        console.log("salada saudavel")
        break;
    case "lasanha":
        console.log("o melhor prato")
        break;
    default:
        console.log("nenhuma das opcoes")

}

// ternario
/*

? = if
: = else

*/

let valor = 100

let resultado = valor == 100 ? "Valor certo": "Valor errado";
console.log(resultado)

let usuario = "dev";
let logado = usuario == "fiap" ? "usuario logado":"usuario invalido";
console.log(logado)



// estrutura de repetição


// o laço de repetição é utiliado quando 
// sabemos quantas vezes vai ser executado

// declaração, opperação e incremento
// i = 1       | i<=5       | i++
for (let i =1; i <= 13; i++){

console.log("valor", i)

}


const linguagens = ["java", "phyton", "C#", "php"];

for (let i =0; i < linguagens.length; i++){
    console.log("Linguagem", i, ":", linguagens[i])
}

const tecnologias = ["JS", "HTML", "CSS"];


for (let tec of tecnologias){

    console.log("Estudando:", tec)

}

// for com objeto
const carros = {marca: "Volks", modelo: "Fusca", ano: 1980};
for (dados in carros){
    console.log(dados, ":", carros[dados])
}


//while - usamos quando não sabemos a quantidade

let numero = 1;

while(numero <= 10){
    console.log("Contagem", numero)
    numero++
}

// declarando uma variavel indefinida
let num;
while(num !== "0"){
    num = prompt("Digite o número ou 0 para sair:")
    console.log("Voce digitou", num)
}

