var homem = {
    sexo: "masculino"
};

var joao = {
    nome: "João",
    idade: 20,
    _proto_: homem
};

var pedro = {
    nome: "Pedro",
    idade: 18,
    _proto_: homem
};

console.log(joao);
console.log(joao._proto_.sexo);
console.log(pedro);
console.log(pedro.sexo);