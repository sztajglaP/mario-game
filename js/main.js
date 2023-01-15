import { Player } from "./Player.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

let player;

const startGame = () => {
    player = new Player(canvas, ctx);
    update();
}

const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const checkPlayerCollision = () => {
    if(player.position.y + player.height >= canvas.height) {
        player.velocity.y = 0;
        player.position.y = canvas.height - player.height;
    }
}

const update = () => {
    requestAnimationFrame(update);
    clearCanvas();
    player.update();
    checkPlayerCollision();
}

window.onload = () => {
    startGame();
}