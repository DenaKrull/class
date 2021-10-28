let thedata;

function doSomething(data) {
    console.log(typeof data, data);
    thedata = data;
}

(function() {
    'use strict';

    // const script = document.createElement('script');
    // script.src = "someData";
    // document.head.appendChild(script);


    // setTimeout(() => {
    //     console.log('theData is ', thedata);
    // }, 5000);

    // $.getScript('someData')
    //     .then(x => console.log('getScript', x));

    $.ajax({
        // url: 'someData?callback?'
        url: 'https://api.openweathermap.org/data/2.5/weather?zip=10952&appid=79f211f07776dd32c7db070614df9b06&units=imperial&callback=?',
        dataType: 'jsonp',
        // jsonpCallback: 'doSomething'
    }).then(x => console.log('ajax got', x));
}());