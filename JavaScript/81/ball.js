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

    const BALL_RADIUS = 20;
    context.fillStyle = 'blue';

    let x = BALL_RADIUS;
    let y = BALL_RADIUS;
    let deltax = 10;
    let deltay = 10;
    let oldTimestamp;

    function drawBall(timestamp) {
        if (!oldTimestamp) {
            oldTimestamp = timestamp;
        }

        const timeDelta = timestamp - oldTimestamp;
        console.log(performance.now(), timestamp, timeDelta);
        oldTimestamp = timestamp;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(x, y, BALL_RADIUS, 0, 2 * Math.PI);
        context.fill();

        x += deltax * (timeDelta * 0.1);
        y += deltay * (timeDelta * 0.1);

        if (y < BALL_RADIUS || y > canvas.height - BALL_RADIUS) {
            deltay = -deltay;
        }
        if (x < BALL_RADIUS || x > canvas.width - BALL_RADIUS) {
            deltax = -deltax;
        }
        requestAnimationFrame(drawBall);

    }

    // setInterval(drawBall, 16.6666);
    requestAnimationFrame(drawBall);


    setInterval(() => context.fillStyle =
        getRandomColor(), 1000);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}());