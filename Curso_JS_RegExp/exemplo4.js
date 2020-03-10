var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));//true