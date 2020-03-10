var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(44) 9876-1234";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));//true