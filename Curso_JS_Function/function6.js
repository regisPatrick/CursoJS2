var getIdade = function (extra) {
    console.log(arguments);//Com a variável implicita arguments conseguimos acessar os parâmetros passados a mais no call e no apply
    return this.idade + extra;
};

var pessoa =  {
    nome: "Joao",
    idade: 20,
    getIdade: getIdade
};

console.log(pessoa.getIdade(2));
console.log(getIdade.call(pessoa, 2, 1, 3));//call eu passo os parâmetros todos abertos
console.log(getIdade.apply(pessoa, [2, 1, 3]));//apply é obrigatóriamente um array
// Acima estou passando parâmtros a mais, e esses parâmetros são ignorados