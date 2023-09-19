/*
Tipos Primitivos (são imutáveis)

String, Number, Boolean, null, bigint, symbol

Referência (mutável) - array, object, function

*/

/*
let a = [1, 2, 3];
let b = a
console.log(a,b)

a = ('Outra coisa')
console.log(a)
*/

//Como os tipos primitivos são imutáveis quando faço um atribuir o valor de outro faço uma cópia, então se mais para frente modificar o valor original a copia não sera afetada

let a = [1, 2, 3];
//let b = a;
let b = [...a]; //Aqui o b se torna um cópia msm de a ou seja ele é um valor indepedente, não sera afetado caso o a ser alterado 
console.log(a, b);

a.push(4);
console.log(a, b);

//Já arrays, object e function, eles são mutáveis então quado faço um atribulir o valor do outro eu faço um "link", ou seja ele busca/referência na memória junto com o valor original se eu mudar mais para frente o valor orignial onde eu atribuir
//Tbm será afetado