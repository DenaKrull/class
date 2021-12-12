(function() {
    'use strict';
    const parent = {
        first: 'Joe',
        last: 'Biden',
        print() {
            console.log(`${this.first} ${this.last}`);
        }
    };

    const child = Object.create(parent);
    child.age = 105;

    Object.defineProperty(child, 'email', {
        value: 'jbiden@whitehouse.gov',
        enumerable: true
    });

    console.log('parent');
    for (let prop in parent) {
        if (parent.hasOwnProperty(prop) && typeof parent[prop] !== 'function') {
            console.log(`${prop} is ${parent[prop]}`);
        }

    }

    console.log('child');
    for (let prop in child) {
        if (child.hasOwnProperty(prop)) {
            console.log(`${prop} is ${child[prop]}`);
        }
    }

    ///////////

    let keys = Object.keys(parent);
    keys.forEach(key => {
        console.log(`${key} is ${parent[key]}`);
    });
    keys = Object.keys(child);
    keys.forEach(key => {
        console.log(`${key} is ${child[key]}`);
    });

    const entries = Object.entries(child);
    entries.forEach(entry => {
        console.log(`${entry[0]} is ${entry[1]}`);
    });

    const copy = {};
    Object.assign(copy, child);


    //////////// destructuring
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [a, b, , , e] = numbers;
    console.log(a, b, e);

    // const first = parent.first;
    const { first, last } = parent;
    console.log(first, last);

    function print(a, b, c, d, e, f) {
        console.log(arguments);
        console.log(a, b, c, d, e, f);
    }
    ///spread operator
    print(...numbers);

    console.log(`Max number is ${Math.max(...numbers)}`);


    ///reset
    // function sum(a, b) {
    //     return a + b;
    // }
    function sum(...numbers) {

        // console.log(arguments);
        let total = 0;
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
    }
    console.log(sum(...numbers));

    const [one, two, ...rest] = numbers;
    console.log(one, two, rest);

    ({ first, ...rest } = parent);
    console.log(first, ...rest);
}());