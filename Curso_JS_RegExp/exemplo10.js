var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;
// var telefone = "(44) 9876-1234";

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 998978877</td><td>(70) 987679999</td></tr></table>";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));//true