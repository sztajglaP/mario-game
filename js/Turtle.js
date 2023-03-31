export class Turtle {
    constructor(canvas, {position}) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 30;
        this.height = 41;

        this.images = [];

        for(let i = 1; i <= 4; i++) {
            this.images[i] = new Image();
            this.images[i].src = `./images/turtle-${i}.png`;
        }

        this.actualImage = 1;
        
        this.position = position;

        this.velocity = {
            x: 1,
            y: 0
        }
    }

    draw() {
        this.ctx.drawImage(this.images[this.actualImage], this.position.x, this.position.y, this.width, this.height);
    }

    moveAnimation() {
        if(this.velocity.x == 1) {
            this.actualImage = 1;
        } else {
            this.actualImage = 3;
        }
    }

    move() {
        this.moveAnimation();
        this.draw();
        this.position.x -= this.velocity.x;
    }
}