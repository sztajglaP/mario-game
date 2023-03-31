export class Cloud {
    constructor(canvas, width, height, {position}, image) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = image;

        this.position = position;

        this.veloctiy = {
            x: 0,
            y: 0
        }
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }   
}