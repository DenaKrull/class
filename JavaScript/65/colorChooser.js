(function() {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }
    const colorInput = get('color');
    const backgroundColorInput = get('bgcolor');

    function setCss(element, property, value) {
        // element.style.property = value;
        element.style[property] = value;


    }

    // document.getElementById('apply')
    //     .addEventListener('click', () => {
    //         // document.body.style.color = colorInput.value;
    //         // document.body.style.backgroundColor = backgroundColorInput.value;
    //         setCss(document.body, 'color', colorInput.value);
    //         setCss(document.body, 'backgroundColor', backgroundColorInput.value);

    //     });

    // colorInput.addEventListener('change', () => setCss(document.body, 'color', colorInput.value));
    // backgroundColorInput.addEventListener('input', () => setCss(document.body, 'bgcolor', backgroundColorInput.value));

    // const nameInput = document.getElementById('name');
    // nameInput.addEventListener('input', () => {
    //     console.log('input', nameInput.value);
    // });

    // nameInput.addEventListener('change', () => {
    //     console.log('change', nameInput.value);
    // });

    document.getElementById('theForm').addEventListener('submit', event => {
        setCss(document.body, 'color', colorInput.value);
        setCss(document.body, 'backgroundColor', backgroundColorInput.value);

        event.preventDefault();
    });

})();