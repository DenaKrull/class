(async function() {
    'use strict';

    // function get(url, successCallback, failureCallback) {


    //     const request = new XMLHttpRequest();

    //     request.open('GET', url);
    //     request.send();

    //     request.onload = () => {
    //         if (request.status < 400) {
    //             successCallback(request.responseText);
    //         } else {
    //             failureCallback(new Error(`${request.status} ${request.statusText}`));
    //         }
    //     };

    //     request.onerror = () => {
    //         failureCallback(new Error(`${request.status} ${request.statusText}`));
    //     };
    //     console.log('file end');
    // }

    function get2(url) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.open('GET', url);
            request.send();
            request.onload = () => {
                if (request.status < 400) {
                    resolve(request.responseText);
                } else {
                    reject(new Error(`${request.status} ${request.statusText}`));
                }
            };

            request.onerror = () => {
                reject(new Error(`${request.status} ${request.statusText}`));
            };
            console.log('file end');
        });




    }

    // get('recipes.json', result => console.log('success', result), e => console.error('oops', e));
    get2('recipes.json')
        .then((recipes => console.log('success', recipes)))
        .catch(e => console.error('failure', e));

    try {
        const recipes = await get2('recipes.json');
        console.log('succeeded', recipes);
    } catch (e) {
        console.error('failure', e);

    }

    /////
    function doSomethingOne(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(n + 1), 2000);
        });

    }

    function doSomethingTwo(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(n + 2), 2000);
        });
    }

    function doSomethingThree(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(n + 3), 2000);
        });
    }

    doSomethingOne(2)
        .then(r => doSomethingTwo(r))
        .then(r => doSomethingThree(r))
        .then(r => console.log('as promise success', r))
        .catch(e => console.error('as promise error', e));

    const p1 = doSomethingOne(2);
    const p2 = doSomethingTwo(2);
    const p3 = doSomethingThree(2);

    // Promise.all([p1, p2, p3])
    //     .then(results => console.log(results))
    //     .catch(e => console.error(e));

    try {
        const results = await Promise.all([p1, p2, p3]);
        console.log(results);
    } catch (e) {
        console.error(e);

    }
}());