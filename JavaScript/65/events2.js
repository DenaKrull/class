(function() {
    'use strict';

    let liscenseAccepted = false;
    const theLiscenceButton = document.getElementById('license');

    theLiscenceButton.addEventListener('click', () => {
        console.log('button was clicked');
        liscenseAccepted = true;

        theLiscenceButton.disabled = true;

    });

    const theLink = document.getElementById('theLink');

    theLink.addEventListener('click', event => {
        console.log('link was clicked');

        if (!liscenseAccepted) {
            event.preventDefault();
        }

    });

})();