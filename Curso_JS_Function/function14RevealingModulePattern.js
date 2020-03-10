var counter = (function () {
    var _value = 0;
    var _add = function () {
        return ++ _value;
    };
    var _reset = function (){
        _value = 0;
    };
    return{
        add: _add,
        reset: _reset
    };
})();

console.log(counter.value);//undefined
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3
counter.reset();
console.log(counter.add());