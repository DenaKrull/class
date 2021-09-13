'use strict';

let a = 5;
let b = '4';

console.log(a, typeof a, b, typeof b);

console.log(a === b);
console.log(a !== b);

//no conversions
console.log(a === b);
console.log(a != b);

console.log(a === Number(b));
console.log(a === parseInt(b));

console.log(a - b);
console.log(a + b);
console.log(a + Number(b));

let nonsense = 'joe' - 5;
console.log(nonsense);

let moreNonsense = 'kamala' - 1;
console.log(moreNonsense);


console.log(nonsense == moreNonsense);
console.log(nonsense == NaN);
console.log(isNaN(moreNonsense));

let undefinedVariable;
let nullVariable = null;
console.log(undefinedVariable, nullVariable);
console.log(undefinedVariable == nullVariable);