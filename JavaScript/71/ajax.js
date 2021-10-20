(function() {
    'use strict';

    const request = new XMLHttpRequest();

    request.open('GET', 'hw.js');

    request.send();
    console.log('after send', request.readyState);
    console.log('after get', request.readyState);

    // setTimeout(() => {
    //     console.log(request.responseText);
    // }, 2000);

    // request.onreadystatechange = e => {
    //     console.log(' in onreadystatechange', request.readyState);
    //     if (request.readyState === 4) {
    //         if (request.status < 400) {
    //             console.log('request.responseText', request.responseText);
    //         } else {
    //             console.error('Failed', request.status, request.statusText)
    //         }

    //     }
    // };

    request.onload = () => {
        if (request.status < 400) {
            console.log('request.responseText', request.responseText);
        } else {
            console.error('Failed', request.status, request.statusText);
        }
    };

    request.onerror = () => {
        console.log('really bad error');
    };
    console.log('file end');
}());