(function() {
    'use strict';

    function doSomethingOne(n, callback, failureCallback) {
        setTimeout(() => callback(n + 1), 2000);
    }

    function doSomethingTwo(n, callback, failureCallback) {
        setTimeout(() => callback(n + 2), 2000);
    }

    function doSomethingThree(n, callback, failureCallback) {
        setTimeout(() => failureCallback(n + 3), 2000);
    }

    function onFailure(e) {
        console.error('OOPS', e);
    }
    doSomethingOne(2, r => {
        doSomethingTwo(r, r2 => {
            doSomethingThree(r2, r3 => {
                console.log(r3);
            }, onFailure);

        }, onFailure);

    }, onFailure);

    // doSomethingOne(2)
    //     .then(r => doSomethingTwo(r))
    //     .then(r => doSomethingThree(r))
    //     .then(r => console.log(r))
    //     .catch(e => console.error(e));

    function thirdPartyFunction(callback) {
        // callback('hello');
        setTimeout(() => callback('hello'), 1000);
    }
    //promises are alway asynchronous
    console.log('before calling 3rd party function');
    thirdPartyFunction((result) => console.log('back from 3rd party function', result));
    console.log('after calling 3rd party function');

    const promise = new Promise((resolve, reject) => {



        const succeeded = 1 + 1 === 3; //do some work

        if (succeeded) {
            resolve('succeeded');
        } else {
            reject('failed');
        }

    });

    console.log('before calling promise');
    promise
        .then(r => console.log('then got', r))
        .catch(e => console.error('catch got', e));
    console.log('after calling promise');
}());