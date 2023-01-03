function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Ruannino', 'Farias', 31);
const pessoa3 = criaPessoa('Maria', 'Silva', 44);
console.log(pessoa1, pessoa2, pessoa3);

const pessoa4 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} a minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();