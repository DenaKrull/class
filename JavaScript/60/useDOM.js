'use strict';


var theButton = document.getElementById('theButton');
var numClicksElement = document.getElementById('numClicks');

var clicks = 0;

// function handleClick() {
//     numClicksElement.innerText = ++clicks;
// }

// theButton.addEventListener('click', handleClick);

// theButton.addEventListener('click', function handleClick() {
//     numClicksElement.innerText = ++clicks;
// });

theButton.addEventListener('click', () => {
    numClicksElement.innerText = ++clicks;
    console.log(event);
});