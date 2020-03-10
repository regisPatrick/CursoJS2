var counter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};

console.log(itens.add('A'));
console.log(itens.add('B'));
console.log(itens.add('C'));

console.log(counter.add());

counter.value = undefined;
console.log(counter.add());//NaN