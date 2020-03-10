//Função Construtora

var Pessoa = function (nome, idade){
    this.nome = nome;
    this.idade = idade;
};

console.log(new Pessoa("Pedro", 20));
console.log(new Pessoa("Maria", 30));

//-------------------------------

var pedro = {};
Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, "Maria", 30);
console.log(maria);