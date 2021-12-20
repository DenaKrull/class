import './css/index.css';
import $ from 'jquery';
import snakehead from '../images/snakehead.png';
import redapple from '../images/redapple.png';

let clickCount = 0;

$('#theButton').click(() => {
    $('#result').text(`I was reallyt clicked ${++clickCount} times`);

    const snake = new Image();
    // snake.src = 'images/snakehead.png';

    snake.src = snakehead;
    document.body.appendChild(snake);

    const apple = new Image();
    apple.src = redapple;
    document.body.appendChild(apple);
});


import joe from '../potus.json';
console.log(typeof joe, joe.first, joe.last, joe.email);

import joewithcomments from '../potus.json5';
console.log(typeof joewithcomments, joewithcomments.first, joewithcomments.last, joewithcomments.email, joewithcomments);
import spreadsheetdata from '../data.csv';
console.log(spreadsheetdata);

import sayHello, {
    sayGoodbye,
    foo
}
from './sayHello';
sayHello('Joe');
sayGoodbye('Joe');