import './index.css';
import snakeHeadImg from './images/snakehead.png';
import redAppleImg from './images/redapple.png';

import crash from './media/crash.mp3';
import Snake from './snake.js';
import Apple from './apple.js';

import { THING_SIZE } from './constants.js';
const crashSound = new Audio(crash);

const canvas = document.getElementById('theCanvas');
const context = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % THING_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % THING_SIZE);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let gameOver = false;
let score = 0;
let speed = 500;
let snake;
let apple;

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ff0000';
    context.font = 'bold 30px Arial';
    context.fillText(`Score: ${score}`, canvas.width - 160, 40);

    if (apple) {
        apple.draw();
    }

    snake.move();

    if (!gameOver) {
        setTimeout(gameLoop, speed);
    } else {
        // context.fillStyle = '#0000ff';
        // context.font = 'bold 30px Arial';
        // context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
        // crashSound.currentTime = 0; // in case it was playing
        // crashSound.play();
    }
}

const snakeHead = new Image();
snakeHead.src = snakeHeadImg;


const appleImg = new Image();
appleImg.src = redAppleImg;

function gameOverCb() {
    gameOver = true;
    context.fillStyle = '#0000ff';
    context.font = 'bold 30px Arial';
    context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
    crashSound.currentTime = 0; // in case it was playing
    crashSound.play();
}

function ateAppleCb() {
    score++;
    speed = speed * 0.9;
}

function waitForImageToLoad(image) {
    return new Promise((resolve, reject) => {
        image.onload = () => resolve();
        image.onerrror = () => reject();
    });
}
Promise.all([
    waitForImageToLoad(snakeHead),
    waitForImageToLoad(appleImg)
]).then(() => {
    apple = new Apple(canvas, appleImg);
    snake = new Snake(canvas, snakeHead, apple, gameOverCb, ateAppleCb);
    gameLoop();

    // setTimeout(gameLoop, speed);
});