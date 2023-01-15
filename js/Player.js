export class Player {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.width = 20;
        this.height = 20;

        this.position = {
            x: 10,
            y: 300
        }

        this.velocity = {
            x: 5,
            y: 1
        }

        this.keys = {
            left: false,
            right: false
        }

        this.gravity = 1;

        addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 65:
                    // left
                    this.keys.left = true;
                    break;
                case 68:
                    // right
                    this.keys.right = true;
                    break;
                case 87:
                    // up
                    break;
            }
        });

        addEventListener('keyup', (e) => {
            switch(e.keyCode) {
                case 65:
                    // left
                    this.keys.left = false;
                    break;
                case 68:
                    // right
                    this.keys.right = false;
                    break;
                case 87:
                    // up
                    this.velocity.y -= 15;
                    break;
            }
        });
    }

    draw = () => {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    movePlayer = () => {
        if(this.keys.left == true) {
            this.position.x -= this.velocity.x;
        } else if(this.keys.right == true) {
            this.position.x += this.velocity.x; 
        }
    }

    update = () => {
        this.draw();
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
        this.movePlayer();
    }
}