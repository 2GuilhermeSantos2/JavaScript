

const hora = -8;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if(hora >= 12 && hora <= 18){
    console.log('Boa Tarde')
} else if(hora >= 19 && hora <= 23){
    console.log('Boa Noite')
} else if (hora > 24 || hora < 0){
    console.log('Hora Inválida')
}