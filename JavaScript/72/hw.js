/*global pcs*/

/*global pcs*/

console.log('js loaded');
(function() {
    'use strict';

    const fileNameInput = $('#file');
    const resultElem = $('#result');
    const htmlResultElem = $('#htmlResult');
    const spinner = $('#spinner');

    $('#load').click(() => {
        spinner.show();
        fetch(fileNameInput.val())
            .then(r => {
                // spinner.hide();
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.text();
            })
            .then(t => {
                // console.log(t);
                resultElem.text(t);
                htmlResultElem.html(t);
            })
            .catch(err => {
                // spinner.hide();
                // console.log(err));
                pcs.messagebox.show(err, true);
                throw new Error('OOOOPS!!!');
            })
            .finally(() => {
                spinner.hide();
            });


    });
}());