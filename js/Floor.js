export class Floor {
    constructor(canvas, {position}, width, image) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = width;
        this.height = 34;

        this.image = new Image();
        this.image.src = image;

        this.position = position;

        this.velocityX = 0;
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}