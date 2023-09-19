/*
function soma(num_1 = 0, num_2 = 0){
    return console.log(`${num_1} + ${num_2} = ${num_1 + num_2}`);
}

function subtração(num_1 = 0, num_2 = 0){
    return console.log(`${num_1} - ${num_2} = ${num_1 - num_2}`);
}

function multiplicação(num_1 = 0, num_2 = 0){
    return console.log(`${num_1} * ${num_2} = ${num_1 * num_2}`);
}

function divisão(num_1 = 0, num_2 = 0){
    return console.log(`${num_1} / ${num_2} = ${(num_1 / num_2).toFixed(2)}`);
}

soma(7, 4);
subtração(5, 8);
multiplicação(9, 19);
divisão(17,15);

*/

/*
function verificaPariedade(num = 0){
    if (num === 0){
        console.log(`${num}, é um valor nulo!`);
    }else if(num % 2 === 0){
        console.log(`${num} é PAR`);
    }else{
        console.log(`${num} é IMPAR`);

    }
}

verificaPariedade(9);

*/

/*
function potencia(base = 0, expoente = 0){  
    return console.log(`${base} ** ${expoente} = ${base ** expoente}`);
}

potencia(49, 89);
*/


/*

function stringInvertida(str = ''){
    return str.split('').reverse().join('');
}

console.log(stringInvertida('Abacaxi com limão'));

*/


/*
function numsArray(array,y){
    for(let i = 0; i < array.length; i++){
    if (array[i] == y){
        return true;
        }
    }
    return false;
}

var arrayNum = [69, 62, 92, 43, 76]
let sum = 0;

for (let i = 0; i < arrayNum.length; i++){
    sum += arrayNum[i];
}

const average = sum / arrayNum.length;

console.log(`A media dos números é ${average.toFixed(0)}`);

let bigger = Math.max.apply(null, arrayNum);

console.log(`O maior valor do array é ${bigger}`);
*/

function calculationTravel(tempTravel = 0, averageSpeed = 0){
    literNecessary =((tempTravel * averageSpeed) / 12).toFixed(3)
    return console.log(`A quantidad de litros necessário para a viagem é de ${literNecessary}`)
}

calculationTravel(10, 85)