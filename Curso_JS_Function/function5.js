var getIdade = function () {
    return this.idade;
};

var pessoa =  {
    nome: "Joao",
    idade: 20,
    getIdade: getIdade
};

console.log(getIdade());
console.log(pessoa.getIdade());