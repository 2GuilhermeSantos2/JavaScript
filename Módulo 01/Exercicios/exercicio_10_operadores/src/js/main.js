/*

const AMOUNT = 6;

function oddNumbers(value = 0){
    let count = 0;
    let newValue = value
    
    while(count < AMOUNT){
        if (newValue % 2 !== 0){
            console.log(newValue);
            count++;
        }

        newValue++;
    }
}


oddNumbers(5)

*/



function multipleOf13(value1 = 0, value2 = 0){
    let value_1 = value1;
    let sum = 0;
    while(value_1 <= value2){
        if(value_1 % 13 !== 0){
            sum += value_1;
        }
    value_1++;
    }-
    return console.log(sum);
}

multipleOf13(100, 200);

