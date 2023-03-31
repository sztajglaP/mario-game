

export class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 25;
        this.height = 47;

        this.images = [];

        for(let i = 1; i <= 8; i++) {
            this.images[i] = new Image();
            this.images[i].src = `./images/${i}.png`;
        }

        this.actualImage = 1;

        this.position = {
            x: 100,
            y: canvas.height - this.height - 200
        }

        this.velocity = {
            x: 5,
            y: 1
        }

        this.keys = {
            left: false,
            right: false
        }

        this.gravitySpeed = 0.7;
    }

    addImages() {
        
    }

    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.drawImage(this.images[this.actualImage], this.position.x, this.position.y, this.width, this.height);
    }

    move() {
        this.draw();

        if(this.keys.left) {
            this.position.x -= this.velocity.x;

            if(this.actualImage >= 8) {
                this.actualImage = 5;
            }

            this.actualImage++;
        } else if(this.keys.right) {
            this.position.x += this.velocity.x;

            if(this.actualImage >= 4) {
                this.actualImage = 1;
            }

            this.actualImage++;
        }
    }
}