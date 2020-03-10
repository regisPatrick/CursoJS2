var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone = "(44) 9876-1234";
var telefone2 = "(44) 98761234";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));//true

console.log(regExp.exec(telefone2));
console.log(regExp.test(telefone2));//true