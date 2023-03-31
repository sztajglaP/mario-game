export class Stair {
    constructor(canvas, {position}) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 30;
        this.height = 30;

        this.image = new Image();
        this.image.src = './images/stair.png';

        this.position = position;

        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw() {
        // this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}