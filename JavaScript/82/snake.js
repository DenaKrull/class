(function() {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();



    const snakeSize = 64;
    let snakeDirection = 'ArrowRight';
    let score = 27;
    // const img = document.getElementById('img');
    const snakeHead = new Image();
    snakeHead.src = 'images/snakehead.png';
    snakeHead.onload = () => {


        let x = 0;
        let y = 0;
        setInterval(() => {

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.font = ' 30px Arial ';
            context.fontColor = 'white';
            context.strokeText(`Score: ${score}`, canvas.width - 140, 40);
            switch (snakeDirection) {
                case 'ArrowRight':
                    x += snakeSize;
                    break;
                case 'ArrowLeft':
                    x -= snakeSize;
                    break;
                case 'ArrowUp':
                    y -= snakeSize;
                    break;
                case 'ArrowDown':
                    y += snakeSize;
                    break;
            }
            // x += snakeSize;
            // y += snakeSize;
            context.drawImage(snakeHead, x, y, snakeSize, snakeSize);
        }, 1000);
    };

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                snakeDirection = event.key;

        }
    });

}());