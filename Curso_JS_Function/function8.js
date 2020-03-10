var helloWorld = function () {
    var message = "Hello World!";
    return function () {
        return message;
    };
};

console.log(helloWorld());
console.log(helloWorld()());

var fnHelloWorld = helloWorld();
console.log(fnHelloWorld());