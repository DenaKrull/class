// window.pcs = window.pcs || {};
window.pcsClock = function(parent) {
    'use strict';
    parent = parent || document.body;


    const clockElem = document.createElement('div');
    parent.appendChild(clockElem);


    clockElem.className = 'clock';

    function updateClock() {
        clockElem.innerText = new Date().toLocaleTimeString();
    }

    setInterval(() => updateClock(), 1000);
    updateClock();

};