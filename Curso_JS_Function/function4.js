var pessoa =  {
    nome: "Joao",
    idade: 20,
    getIdade: function () {
        return this.idade;
    }
};

console.log(pessoa);
console.log(pessoa.getIdade);
console.log(pessoa.getIdade());