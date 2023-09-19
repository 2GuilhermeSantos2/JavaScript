/*function saudacao(nome) { //Criando e Declarando uma função
    return `Olá, ${nome}`;
} 

//saudacao('Guilherme'); //Aqui eu chamo a função e ela executa oque ta dentro dela, printando "Ola". Tenho sempre que colocar os (), quando chamo uma função

let variavel = saudacao('Guilherme');

console.log(variavel);*/

/*

function soma(x = 0, y = 0){ //Se eu não passar nenhum valor quando chamar a função soma ela, os parâmetros ja vão estar pré estabelecido com o valor 0

    let resultado = x + y;
    return resultado;

}

let resultado = soma(2,4);

console.log(resultado);

*/
/*
let raiz = function (n = 0) { //Aqui eu criei um função anonimia é uma função dentro de uma variável

    return n ** 0.5;

};
*/

let raiz = n => n ** 0.5; //Arrow function

console.log(raiz(9))