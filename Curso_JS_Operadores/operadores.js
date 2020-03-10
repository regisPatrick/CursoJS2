var generateSerial = function (max) {
    if ( max === undefined || max === null || max === 0 ) {
        max = 1000;
    }
    return Math.floor(Math.random() * max);
};

console.log(generateSerial(1000));
console.log(generateSerial());