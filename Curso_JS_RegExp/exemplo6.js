var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(44) 9876-1234";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));//true