(function() {
    'use strict';

    fetch('people.json')
        .then(response => {
            if (!response.ok) {
                // console.error(`${response.status} ${response.statusText}`);
                throw new Error(`${response.status} ${response.statusText}`);
            } else {
                // return response.text();
                return response.json();
            }

        })
        // .then(text => {
        //     console.log(typeof text, text);
        //     const people = JSON.parse(text);
        //     console.log(typeof people, people);
        // })
        .then(people => {
            console.log(typeof people, people);
        })
        .catch(err => console.error('Oops Error', err));



    /////
    async function doTheFetch() {

        try {
            const response = await fetch('xpeople.json');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const people = await response.json();
            console.log(typeof people, people);
        } catch (e) {
            console.error('Oops', 'Error ', e);
        }
    }
    doTheFetch();
}());