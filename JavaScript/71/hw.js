(function() {
    'use strict';

    // $('#theForm').submit(() => {
    //     console.log('form submitted');
    // });

    // $('#theForm').on('submit', () => {
    //     console.log('form submitted');
    // });
    const theNameInput = $('#name');
    const theAddressInput = $('#address');
    const theNameResult = $('#NameResult');
    const theAddressResult = $('#AddressResult');
    $('#theForm').submit(e => {
        e.preventDefault();
        theNameResult.text(theNameInput.val());
        theAddressResult.text(theAddressInput.val());
    });
    const theAgreeCheckbox = $('#agree');
    theAgreeCheckbox.change(() => {
        $('#theForm button').prop('disabled', false);
    });
}());