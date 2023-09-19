let num = 100;
/*
for(i = 0; i <= 10; i++){
    console.log(`${num} X ${i} = ${num * i}`);
}*/

for(i = 0; i <= 100; i++){
    if(i === 0){
        console.log(`${i} é um valor nulo`);
    }else if(i % 2 == 0){
        console.log(`O número ${i} é PAR`);
    }else{
        console.log(`O número é ÍMPAR ${i}`);
    }
}

