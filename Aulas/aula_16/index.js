/*const pessoa_1 = {  //Quando crio um objeto utilizo as chaves
    nome: 'Guilherme',
    sobrenome = 'Santos',
    idade = 21
};


console.log(pessoa_1.nome);*/

/*
function criaPessoa(nome, sobrenome, idade){ //Criando uma função e faço essa função ser um objeto para "criar" pessoas
    return{
        nome, sobrenome, idade
    };
}


let pessoa_1 = criaPessoa('Guilherme','Santos',21);
let pessoa_2 = criaPessoa('Luiz', 'Otávio', 24);

console.log(`Dados: ${pessoa_1}, ${pessoa_2}`); 
*/

const pessoa1 = { //Aqui eu criei um objeto e dentro desse objeto criei uma function/metedo, assim posso trabalhar melhor com meu objeto
    nome: 'Guilherme',
    sobrenome: 'Santos',
    idade: 21,

    fala () {
        console.log(`${this.nome} ${this.sobrenome}, está falando... e ele tem ${this.idade} anos`); 
    },

    incrementaIdade(){
        ++this.idade;
    }

};

pessoa1.fala(); 
pessoa1.incrementaIdade();
pessoa1.fala();