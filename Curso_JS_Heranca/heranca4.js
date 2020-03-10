var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = "masculino";
};

var joao = new Homem("João", 20);
console.log(joao);

var pedro = {};
Homem.call(pedro, "Pedro", 18);
console.log(pedro);

var jose = {};
Homem.apply(jose, ["Jose", 22]);
console.log(jose);