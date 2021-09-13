let age = 212;
console.log(age, typeof age);
age = 'age';
console.log(age, typeof age);


////////////////

let x = 5;
console.log(x);
console.log(add(2, 3));

function add(a, b) {
    let localX = 5;
    return a + b;
}

// console.log(localX);

let add2 = function(a, b) {
    return a + b;
};
for (let i = 0; i < 10; i++) {
    let notlocalX = 7;
    console.log(i);
}

// console.log(notlocalX);