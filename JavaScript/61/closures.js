'use strict'

function greet() {
    console.log('Hello');
}

greet();

function getGreeter() {
    // return function() {
    //     console.log('Hello');
    // };
    return greet; // no ();
}

let theGreeter = getGreeter();
theGreeter();

//////


function getbetterGreeter() {
    return function(name) {
        console.log(`Hello ${name} `);
    };
}

let betterGreeter = getbetterGreeter();
betterGreeter('Joe');

function getBestGreeter(name) {
    return function() {
        console.log(`Hello ${name} `);
    };
}
let bestGreeter = getBestGreeter('Joe');
bestGreeter();

////////////