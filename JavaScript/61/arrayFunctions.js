'use strict';
let people = ['Joe', 'Kamala'];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
people.forEach(function(person) {
    console.log(person);
});

people.forEach(console.log);

function printAValue(value) {
    console.log(value);
}

people.forEach(printAValue);

function myForEach(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        callback(theArray[i], i, theArray);
    }
}

myForEach(people, function(p) { console.log(p); });

myForEach(people, printAValue);
myForEach(people, console.log);

myForEach(people, p => console.log(p));
myForEach(people, () => console.log(''));
myForEach(people, (p, i, a) => console.log(p, i, a));

let get5 = function() {
    return 5;
};
console.log(get5());
let get5two = () => 5;
console.log(get5two());

let get5three = () => {
    console.log('line 1');
    return 5;
};

console.log(get5three());

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evens = numbers.filter(number => number % 2 === 0);
console.log(evens);

function myFilter(theArray, test) {
    let result = [];

    // for (let i = 0; i < theArray.length; i++) {
    //     if (test(theArray[i])) {
    //         result.push(theArray[i]);
    //     }
    // }

    theArray.forEach(v => {
        if (test(v)) {
            result.push(v);
        }
    });
    return result;
}

console.log(myFilter(numbers, n => n % 2 === 0));

function isEven(n) {
    return n % 2 === 0;
}

console.log(myFilter(numbers, isEven));

// console.log(myFilter(numbers, !isEven));
console.log(myFilter(numbers, v => !isEven(v)));

let sum = 0;
numbers.forEach(n => sum += n);
console.log(sum);