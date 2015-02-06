// arrow functions

var arr = [1, 2, 3, 4, 5, 6].map(x => x * 2)
                            .filter(x => x < 10);

console.log(arr);

// enhanced object literals

var greeter = {
    greet() {
        console.log('Hello, meatbag!');
    }
};

greeter.greet();
