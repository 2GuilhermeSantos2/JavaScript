const nome = 'Guilherme';
const sobrenome = 'Santos';
const idade = 21;
const peso = 90;
const altura = 1.64;
let imc = peso / (altura * altura);
let ano_atual = 2023
let ano_nascimento = ano_atual - idade

console.log(`Olá ${nome} ${sobrenome}, você tem ${idade} anos e nasceu no ano de ${ano_nascimento}`);
console.log(`Sua altura é de ${altura}m e seu peso é de ${peso}Kg. Seu IMC é de ${imc}`);