export class Mushroom {
    constructor(canvas, {position}) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 30;
        this.height = 30;

        this.image = new Image();
        this.image.src = './images/mushroom.png';

        this.position = position;

        this.velocity = {
            x: 0.7,
            y: 1
        }

        this.gravitySpeed = 0.5;
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    move() {
        this.draw();
        this.position.x -= this.velocity.x;
    }
}