/*
let num_1 = 14.144223;
let num_2 = 2;
let temp = num_1 * 'teste'
*/

let num_1 = 0.7;
let num_2 = 0.1;

num_1 += num_2;
num_1 += num_2;
num_1 += num_2;
num_1 += num_2;

//console.log(num_1)

//Corringindo esse "bug"

//1 Forma - aqui eu multiplico os valores para sairem do decimal e logo após divido por 100 para entrar no decimal dnv

/*
num_1 = ((num_1 * 100) + (num_2 * 100)) / 100;
num_1 = ((num_1 * 100) + (num_2 * 100)) / 100;
num_1 = ((num_1 * 100) + (num_2 * 100)) / 100;
num_1 = ((num_1 * 100) + (num_2 * 100)) / 100;
console.log(num_1);
*/

//2 Forma (mais fácil)

num_1 = Number(num_1.toFixed(2));

console.log(num_1)

/*

console.log(num_1.toString() + num_2); //Usando o .toString(), eu converto um valor aqui para string
console.log(typeof(num_1));
console.log(num_1.toString(2)); //Exibo o número como binário0
console.log(num_1.toFixed(0)); //Decido qnts casas decimais quero mostrar no meu número (se colocar zero n mostra nenhuma)
console.log(Number.isInteger(num_2)); // Verifica se um número é inteiro
console.log(Number.isNaN(temp)); //Verifica se o valor é NaN

*/



