var data = new Date();
console.log(data);

var hoje = new Date();
hoje.getTime();//Tempo em milissegundos até hoje
console.log(hoje.getTime());

var natal2014 = new Date(1419465600000);
console.log(natal2014);

console.log(Date.parse("2020/02/15"));

console.log(new Date(1581732000000));

console.log(new Date("02/15/2020"));

console.log(new Date("15/02/2020"));//Invalid Date, formato não aceito

//Passando como parâmetro uma string RFC2822

console.log(new Date("Thu Dec 25 2014"));

console.log(new Date("Thu Dec 25 2014 10:30:00"));

//Passando como parâmetro uma string ISO8601

console.log(new Date("2020-02-15"));

console.log(new Date("2020-02-15T10:30:00"));

console.log(new Date("2020-02-15T10:30:00Z"));

console.log(new Date("2020-02-15T10:30:00-02:00"));

//Passando como parâmetro a data própria

console.log(new Date(2020, 11, 25));

console.log(new Date(2020, 11, 25, 10, 30, 0));

var natal = new Date(2020, 11, 25, 10, 30, 0);
console.log(natal);
console.log(natal.getYear());//120
console.log(natal.getFullYear());//2020
console.log(natal.getMonth());//11, pois começa em 0, 11 equivale a Dezembro
console.log(natal.getDay());
console.log(natal.getDate());