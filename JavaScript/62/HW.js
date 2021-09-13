'use strict';

function ourEvery(anArray, callback) {
    anArray.forEach(element => {
        callback(element);
    });
}

const upper = ['A', 'B', 'C'];
const lower = ['a', 'b', 'c'];
const mixed = ['A', 'b', 'C'];

function isUpper(char) {
    return char === char.toUpperCase();
}

const result = ourEvery(upper, isUpper);
console.log('ourEvery(upper, isUpper)', result);
console.log('ourEvery(upper, isUpper)', result);