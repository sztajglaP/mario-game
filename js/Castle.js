export class Castle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 182;
        this.height = 177;
        
        this.image = new Image();
        this.image.src = './images/castle.png';

        this.position = {
            x: 3400,
            y: this.canvas.height - 34 - this.height
        }

        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}