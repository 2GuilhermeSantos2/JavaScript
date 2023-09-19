/*

Operadores Lógicos 

&& -> AND -> E (Quando uso o AND, se alguma parte da expressão retornar false a expressão inteira vai ser falsa. Todas precisam ser verdadeiras)
|| -> OR -> OU (Ao menos uma parte da expressão teem que retornar verdadeiro para retorar true, se tudo for falso vai ser false)
! -> NOT -> NÃO (Nega uma expressão)

*/
/*
const expressão_AND = true && true;
const expressão_OR = true || false;

console.log(expressão_OR);
*/

const usuario = 'DeadMaul';
const senha = 123;
const aprovacao = usuario === 'DeadMaul' && senha === 123;

console.log(aprovacao);