export class Pipe {
    constructor(canvas, {position}) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 70;
        this.height = 105;

        this.image = new Image();
        this.image.src = './images/pipe.png';

        this.position = position;
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}