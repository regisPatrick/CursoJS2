var homem = {
    sexo: "masculino"
};

var joao = {
    nome: "João",
    idade: 20,
    sexo: "feminino"
};

delete joao.sexo;

Object.setPrototypeOf(joao, homem);


console.log(joao);
console.log(joao.sexo);

console.log(Object.keys(joao));// Mostra as propriedades do objeto

for (var property in joao) {// O for in verifica em outros níveis, então ele vai acessar propriedades dos protótipos, por isso aparece a propredade sexo
    //if (!joao.hasOwnProperty(property)) continue;// Com essa lina ele mostra somente as propriedades de joao
    console.log(property);
}