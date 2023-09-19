let lista = ['Luiz', 'Maria', 'João',]; //No JavaScripit igual ao Python posso colocar diversos valores listas, e valores de tipos diferentes também
lista.push('Guilherme');


//console.log(`O aluno foi ${lista[0]}`); //Exibindo item da lista através do número do elemento da lista
console.log(lista);

//console.log(lista.slice(0, 3)); //Pegando do elemento 0 até o 2 (já q o último, no caso oque eu coloquei que  seria o 3 não é mostrado)


// lista[0] = 'Guilherme'; //Aqui eu substituo o elemento 0 da lista
// lista[7] = 3.14564; //Aqui eu crio um novo elemento na lista já que o elemento [7] não existee

// lista[lista.length] = 'Guilherme'; //Adicionando um elemento no final da lista
// lista[lista.length] = 'Fábio';


// lista.push('Guilherme'); //Outra forma de adicionar elementos no final da lista, de uma forma mais fácil
// lista.unshift('Guilherme'); //Adicionando no início da lista. (Ele adiciona no índice 0)


//lista.pop(); //Remove o último elemento da lista
//let removido = lista.pop(); //Salva numa variável o elemento que foi removido, assim eu posso trabalhar com isso
//console.log(removido); //Mostrando o elemento removido


//let removido = lista.shift(); //Remove o primeiro elemento (do índice 0)
//console.log(removido);

//let removendo = delete lista[1]; // Quando removo usando o delete, o indíce relacionado a ele fica vazio
