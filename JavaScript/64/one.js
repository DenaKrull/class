// let foo = 1;
// // const x = foo ? foo : 5;
// const x = foo || 5;
// console.log(x);

window.app = (function(theModule) {
    'use strict';

    // return {
    //     a: () => console.log('a'),
    //     b: () => console.log('b')
    // };

    theModule.a = () => console.log('a');
    theModule.b = () => console.log('b');

    return theModule; //this is how first object gets called window.app

})(window.app || {});

window.app.a();
window.app.b();