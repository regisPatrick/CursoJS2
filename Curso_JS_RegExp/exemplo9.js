var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
// var telefone = "(44) 9876-1234";

var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 998978877</td><td>(70) 987679999</td></tr></table>";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));//true