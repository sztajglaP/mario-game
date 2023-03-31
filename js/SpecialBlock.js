export class SpecialBlock {
    constructor(canvas, {position}) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 30;
        this.height = 30;

        this.image = new Image();
        this.image.src = './images/special-block.png';

        this.position = position;
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}