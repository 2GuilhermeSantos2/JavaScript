/*

&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"


FALSY
false
0
'',"", ``
null / undefined
NaN

*/

//console.log(0 || false || null || 'Guilherme' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'pardo';

console.log(corPadrao);

