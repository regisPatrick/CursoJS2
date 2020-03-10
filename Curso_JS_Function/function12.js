var Counter = function () {
    var value = 0;
    this.add = function () {  //O que eu quero que seja público eu atribuo a add
        return ++value;
    };
};

var counter = new Counter();

console.log(counter.value);//undefined
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3