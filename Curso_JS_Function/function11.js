var createCounter = function () {
    var value = 0;
    return {                //tenho o retorno do que eu quero que seja público
        add: function () {
            return ++value;
        }
    }; 
};

var counter = createCounter();

console.log(counter.value);//undefined
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3