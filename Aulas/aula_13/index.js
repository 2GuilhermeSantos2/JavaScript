    let num_1 = 3.1415926;
    let num_2 = Math.floor(num_1); // Arredonda um númro flutuante para baixo
    let num_3 = Math.ceil(num_1); // Arredonda um númro flutuante para cima
    let alto = 3.50;
    let baixo = 3.49;
    let num_4 = Math.round(alto); //Arredonda o número para o valor mais próximo (da metade para cima (.50) ele vai arredondar para cima da metade para baixo ele vai arredondar para baixo (.49))
    let num_5 = Math.round(baixo);
    let num_6 = Math.random(); //Gera um número aleatorio entree 0 e 1 (o 1 não é incluido)
    let num_7 = Math.round(Math.random() * (10 - 5) + 5); //Gera entre 10 e 5
    let num_8 = Math.pow(2, 10) //Faz a potênciação
    let num_9 = 25;


    console.log(num_2);
    console.log(num_3);
    console.log(num_4);
    console.log(num_5);
    console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));//Pega o maior número de uma sequência
    console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));//Pega o menor número de uma sequência
    console.log(num_6)
    console.log(num_6.toFixed(1)) //Caso eu queira posso usar o .toFixed, para eliminar as casas decimais
    console.log(num_7);
    console.log(Math.PI); //Gera o Pi
    console.log(num_8);
    console.log(num_9 ** 0.5); //Uma forma de pegar raiz quadrada de um número