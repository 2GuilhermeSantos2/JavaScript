let umaString = "Um  \"Texto\""; //Quando eu uso a \ \ Posso usar "" Msm abrindo a String com ""
let frase = "O rato roeu a roupa do rei de roma"


//Se eu pedir para pear um elemento da String através das chaves [] e for um valor maior que minha string ou um valor negativo, vai retornar "undefined" (não apontta para nenhum lugar na memória)


console.log(frase.slice(1));

console.log(umaString);
console.log(umaString.charAt(5)); //Ele passa o valor correspondente a posição dele na string (se eu não passar nada ele retorna o primeiro valor que aqui é "U")
console.log(umaString.indexOf('Texto'));
console.log(frase.replace(/r/, '#')); //Substitui algo na string por outra coisa. Nesse caso foi o r, mas só substituiu o primeiro r
console.log(frase.replace(/r/g, '#')); //Colocando um g dps ele substitui na string inteira
console.log(frase.length); //Mostra o tamanho da string
console.log(frase.slice(2,6)); //Faz o fatiamento da string, ou seja mostra só oque pedi para selecionar, (ele exclui o último valor então para mostrar tenho que colocar 1 a mais)
console.log(frase.slice(2,));  //Se eu não colocar nada ele vai até o final
console.log(frase.slice(-4));  //Se colocar valores negativos ele começa do final, e faz o caminho inverso
