// TODO Fix this function.

function sayHello(name) {
    return this.sayHi(name);
}

var obj = {
    sayHi: function (name) {
        return 'Hi ' + name;
    }
}


console.log(sayHello.bind(obj)('Dany'));