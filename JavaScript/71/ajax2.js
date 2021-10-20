(async function() {
    'use strict';

    fetch('hw.js')
        .then(t => t.text())
        .then(r => {
            console.log(typeof r, r);
            r.forEach(peep => {
                console.log('then is done', peep);
            });
        });

    console.log('done');
    const response = await fetch('people.json');
    const people = await response.json();
    console.log('await is done', people);

    console.log('done2');

}());