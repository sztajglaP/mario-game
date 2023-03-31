import { Player } from "./Player.js";
import { Floor } from "./Floor.js";
import { Platform } from "./Platform.js";
import { SpecialBlock } from "./SpecialBlock.js";
import { Pipe } from "./Pipe.js";
import { Turtle } from "./Turtle.js";
import { Stair } from "./Stair.js";
import { Cloud } from "./Cloud.js";
import { Castle } from "./Castle.js";
import { Hill } from "./Hill.js";
import { Mushroom } from "./Mushroom.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const playAgain = document.querySelector('.play-again');

canvas.width = 1000;
canvas.height = 500;

let gameOver = false;

// OBJECTS
const player = new Player(canvas, ctx);

const floor = [
    new Floor(canvas, {position: {x: 0, y: canvas.height - 34}}, 1200, './images/floor1.png'),
    new Floor(canvas, {position: {x: 1250, y: canvas.height - 34}}, 500, './images/floor2.png'),
    new Floor(canvas, {position: {x: 1820, y: canvas.height - 34}}, 500, './images/floor2.png'),
    new Floor(canvas, {position: {x: 2400, y: canvas.height - 34}}, 1200, './images/floor1.png')
];

const platforms = [
    // 1st platform
    new Platform(canvas, {position: {x: 350, y: 340}}),
    new Platform(canvas, {position: {x: 380, y: 340}}),
    new Platform(canvas, {position: {x: 410, y: 340}}),
    new Platform(canvas, {position: {x: 440, y: 340}}),
    // 2th platform
    new Platform(canvas, {position: {x: 750, y: 300}}),
    new Platform(canvas, {position: {x: 780, y: 300}}),
    new Platform(canvas, {position: {x: 810, y: 300}}),
    new Platform(canvas, {position: {x: 830, y: 300}}),
    new Platform(canvas, {position: {x: 860, y: 300}}),
    new Platform(canvas, {position: {x: 890, y: 300}}),
    // 3th platform
    new Platform(canvas, {position: {x: 1300, y: 370}}),
    new Platform(canvas, {position: {x: 1330, y: 370}}),
    new Platform(canvas, {position: {x: 1390, y: 370}}),
    // 4th platform
    new Platform(canvas, {position: {x: 1470, y: 250}}),
    new Platform(canvas, {position: {x: 1500, y: 250}}),
    new Platform(canvas, {position: {x: 1530, y: 250}}),
    new Platform(canvas, {position: {x: 1560, y: 250}}),
    new Platform(canvas, {position: {x: 1590, y: 250}}),
    new Platform(canvas, {position: {x: 1620, y: 250}}),
    // 5th platform
    new Platform(canvas, {position: {x: 1620, y: 370}}),
    new Platform(canvas, {position: {x: 1650, y: 370}}),
    new Platform(canvas, {position: {x: 1680, y: 370}}),
    // 6th platform
    new Platform(canvas, {position: {x: 1850, y: 370}}),
    new Platform(canvas, {position: {x: 1910, y: 370}}),
    // 7th platform
    new Platform(canvas, {position: {x: 1970, y: 250}}),
    new Platform(canvas, {position: {x: 2000, y: 250}}),
    new Platform(canvas, {position: {x: 2030, y: 250}}),
    new Platform(canvas, {position: {x: 2060, y: 250}}),
    // 8th platform
    new Platform(canvas, {position: {x: 2600, y: 330}}),
    new Platform(canvas, {position: {x: 2630, y: 330}}),
    new Platform(canvas, {position: {x: 2690, y: 330}}),
    // 9th platform
    new Platform(canvas, {position: {x: 2800, y: 230}}),
    new Platform(canvas, {position: {x: 2830, y: 230}}),
    new Platform(canvas, {position: {x: 2860, y: 230}}),
    new Platform(canvas, {position: {x: 2890, y: 230}}),
    new Platform(canvas, {position: {x: 2920, y: 230}}),
    // 10th platform
    new Platform(canvas, {position: {x: 3000, y: 330}}),
    new Platform(canvas, {position: {x: 3030, y: 330}}),
    new Platform(canvas, {position: {x: 3060, y: 330}}),
    new Platform(canvas, {position: {x: 3090, y: 330}})
];

const specialBlocks = [
    new SpecialBlock(canvas, {position: {x: 230, y: 340}}),
    new SpecialBlock(canvas, {position: {x: 320, y: 340}}),
    new SpecialBlock(canvas, {position: {x: 380, y: 230}}),
    new SpecialBlock(canvas, {position: {x: 1360, y: 370}}),
    new SpecialBlock(canvas, {position: {x: 1620, y: 250}}),
    new SpecialBlock(canvas, {position: {x: 1880, y: 370}}),
    new SpecialBlock(canvas, {position: {x: 2660, y: 330}}),
    new SpecialBlock(canvas, {position: {x: 2860, y: 120}})
];

const pipes = [
    // 1st
    new Pipe(canvas, {position: {x: 600, y: canvas.height - 105 - 34}}),
    // 2nd
    new Pipe(canvas, {position: {x: 1000, y: canvas.height - 105 - 34}})
];

const enemyTurtle = new Turtle(canvas, {position: {x: 900, y: canvas.height - 41 - 34}});

const stairs = [
    // ====================================================================
    new Stair(canvas, {position: {x: 2290, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2260, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2230, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2200, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2230, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2290, y: canvas.height - 60 - 34}}),
    new Stair(canvas, {position: {x: 2260, y: canvas.height - 60 - 34}}),
    new Stair(canvas, {position: {x: 2230, y: canvas.height - 60 - 34}}),
    new Stair(canvas, {position: {x: 2290, y: canvas.height - 90 - 34}}),
    new Stair(canvas, {position: {x: 2260, y: canvas.height - 90 - 34}}),
    // ====================================================================
    new Stair(canvas, {position: {x: 2400, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2430, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2460, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2490, y: canvas.height - 30 - 34}}),
    new Stair(canvas, {position: {x: 2400, y: canvas.height - 60 - 34}}),
    new Stair(canvas, {position: {x: 2430, y: canvas.height - 60 - 34}}),
    new Stair(canvas, {position: {x: 2460, y: canvas.height - 60 - 34}}),
    new Stair(canvas, {position: {x: 2400, y: canvas.height - 90 - 34}}),
    new Stair(canvas, {position: {x: 2430, y: canvas.height - 90 - 34}})
];

const clouds = [
    new Cloud(canvas, 91, 72, {position: {x: 100, y: 180}}, './images/cloud-small.png'),
    new Cloud(canvas, 158, 60, {position: {x: 450, y: 80}}, './images/cloud-big.png'),
    new Cloud(canvas, 158, 60, {position: {x: 1000, y: 160}}, './images/cloud-big.png'),
    new Cloud(canvas, 91, 72, {position: {x: 1400, y: 100}}, './images/cloud-small.png'),
    new Cloud(canvas, 91, 72, {position: {x: 1700, y: 130}}, './images/cloud-small.png'),
    new Cloud(canvas, 158, 60, {position: {x: 2200, y: 200}}, './images/cloud-big.png'),
    new Cloud(canvas, 91, 72, {position: {x: 2500, y: 100}}, './images/cloud-small.png'),
    new Cloud(canvas, 91, 72, {position: {x: 2900, y: 150}}, './images/cloud-small.png'),
    new Cloud(canvas, 158, 60, {position: {x: 3200, y: 100}}, './images/cloud-big.png')
];

const castle = new Castle(canvas);

const hills = [
    new Hill(canvas, 160, 73, {position: {x: 0, y: canvas.height - 73 - 34}}, './images/hill-big.png'),
    new Hill(canvas, 100, 39, {position: {x: 100, y: canvas.height - 39 - 34}}, './images/hill-small.png'),
    new Hill(canvas, 160, 73, {position: {x: 800, y: canvas.height - 73 - 34}}, './images/hill-big.png'),
    new Hill(canvas, 160, 73, {position: {x: 1400, y: canvas.height - 73 - 34}}, './images/hill-big.png'),
    new Hill(canvas, 100, 39, {position: {x: 1500, y: canvas.height - 39 - 34}}, './images/hill-small.png'),
    new Hill(canvas, 100, 39, {position: {x: 1900, y: canvas.height - 39 - 34}}, './images/hill-small.png'),
    new Hill(canvas, 160, 73, {position: {x: 2700, y: canvas.height - 73 - 34}}, './images/hill-big.png'),
    new Hill(canvas, 100, 39, {position: {x: 2800, y: canvas.height - 39 - 34}}, './images/hill-small.png'),
];

const enemyMushrooms = [
    new Mushroom(canvas, {position: {x: 500, y: 300}}),
    new Mushroom(canvas, {position: {x: 1700, y: 300}}),
    new Mushroom(canvas, {position: {x: 1750, y: 300}})
];

// FUNCTIONS
function clearCanvas() {
    ctx.fillStyle = '#5c94fc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function checkPlayerFloorTouch() {
    player.position.y += player.velocity.y;
    player.velocity.y += player.gravitySpeed;

    floor.forEach(floor => {
        if(player.position.y + player.height + player.velocity.y >= floor.position.y && player.position.y + player.height <= floor.position.y && player.position.x + player.width >= floor.position.x && player.position.x <= floor.position.x + floor.width) {
            player.velocity.y = 0;
        }
    });
}

function checkEnemyFloorTouch() {
    enemyMushrooms.forEach(enemy => {
        enemy.position.y += enemy.velocity.y;
        enemy.velocity.y += enemy.gravitySpeed;

        floor.forEach(floor => {
            if(enemy.position.y + enemy.height + enemy.velocity.y >= floor.position.y && enemy.position.y + enemy.height <= floor.position.y && enemy.position.x + enemy.width >= floor.position.x && enemy.position.x <= floor.position.x + floor.width) {
                enemy.velocity.y = 0;
            }
        });
    });
}

function checkPlatformCollision() {
    platforms.forEach(platform => {
        if(player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.y + player.height <= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0;
        }
    });
}

function checkSpecialBlockCollision() {
    specialBlocks.forEach(block => {
        if(player.position.y + player.height + player.velocity.y >= block.position.y && player.position.y + player.height <= block.position.y && player.position.x + player.width >= block.position.x && player.position.x <= block.position.x + block.width) {
            player.velocity.y = 0;
        }
    });
}

function checkPipeCollision() {
    pipes.forEach(pipe => {
        if(player.position.y + player.height + player.velocity.y >= pipe.position.y && player.position.y + player.height <= pipe.position.y && player.position.x + player.width >= pipe.position.x && player.position.x <= pipe.position.x + pipe.width) {
            player.velocity.y = 0;
        }
    });

    pipes.forEach(pipe => {
        if(player.position.x + player.width >= pipe.position.x && player.position.x <= pipe.position.x + pipe.width && player.position.y >= pipe.position.y) {
            if(player.position.x + player.width >= pipe.position.x && player.position.x <= pipe.position.x) {
                player.keys.right = false;
            } else if(player.position.x <= pipe.position.x + pipe.width) {
                player.keys.left = false;
            }
        }
    });
}

function cameraMove() {
if(player.position.x + player.width >= 400 && player.keys.right == true && floor[3].position.x + floor[3].width > canvas.width) {
        player.velocity.x = 0;

        floor.forEach(el => {
            el.position.x -= 3;
        });

        hills.forEach(hill => {
            hill.position.x -= 3;
        });

        clouds.forEach(cloud => {
            cloud.position.x -= 3;
        });

        castle.position.x -= 3;

        specialBlocks.forEach(block => {
            block.position.x -= 3;
        });

        platforms.forEach(platform => {
            platform.position.x -= 3;
        });

        pipes.forEach(pipe => {
            pipe.position.x -= 3;
        });

        enemyTurtle.position.x -= 3;

        enemyMushrooms.forEach(enemy => {
            enemy.position.x -= 3;
        });

        stairs.forEach(stair => {
            stair.position.x -= 3;
        });
    } else if(player.position.x <= 200 && player.keys.left == true && floor[0].position.x != 0) {
        player.velocity.x = 0;

        floor.forEach(el => {
            el.position.x += 3;
        });

        hills.forEach(hill => {
            hill.position.x += 3;
        });

        clouds.forEach(cloud => {
            cloud.position.x += 3;
        });

        castle.position.x += 3;

        specialBlocks.forEach(block => {
            block.position.x += 3;
        });

        platforms.forEach(platform => {
            platform.position.x += 3;
        });

        pipes.forEach(pipe => {
            pipe.position.x += 3;
        });

        enemyTurtle.position.x += 3;

        enemyMushrooms.forEach(enemy => {
            enemy.position.x += 3;
        });

        stairs.forEach(stair => {
            stair.position.x += 3;
        });
    } else {
        player.velocity.x = 5;
    }
}

function checkEnemyTurtlesPipesCollision() {
    if(enemyTurtle.position.x <= pipes[0].position.x + pipes[0].width) {
        enemyTurtle.velocity.x = -1;
    }

    if(enemyTurtle.position.x + enemyTurtle.width >= pipes[1].position.x) {
        enemyTurtle.velocity.x = 1;
    }
}

function checkStairCollision() {
    stairs.forEach(stair => {
        if(player.position.y + player.height + player.velocity.y >= stair.position.y && player.position.y + player.height <= stair.position.y && player.position.x + player.width >= stair.position.x && player.position.x <= stair.position.x + stair.width) {
            player.velocity.y = 0;
        }

        if(player.position.x + player.width >= stair.position.x && player.position.y + player.height >= stair.position.y && player.position.x + player.width < stair.position.x + stair.width) {
            player.keys.right = 0;
        } else if(player.position.x <= stair.position.x + stair.width && player.position.y + player.height >= stair.position.y && player.position.x > stair.position.x) {
            player.keys.left = 0;
        }
    });
}

function checkGameOver() {
    if(player.position.y + player.height >= canvas.height) {
        gameOver = true;
        playAgain.style.display = 'block';
    }

    enemyMushrooms.forEach(enemy => {
        if(player.position.x + player.width >= enemy.position.x && player.position.y + player.height >= enemy.position.y && player.position.x <= enemy.position.x + enemy.width) {
            gameOver = true;
            playAgain.style.display = 'block';
        }
    });

    if(player.position.x + player.width >= enemyTurtle.position.x && player.position.y + player.height >= enemyTurtle.position.y && player.position.x <= enemyTurtle.position.x + enemyTurtle.width) {
        gameOver = true;
        playAgain.style.display = 'block';
    }
}

function clickPlayAgainButton() {
    location.reload()
}

// main function
function update() {
    if(!gameOver) {
        requestAnimationFrame(update);
    }

    clearCanvas();
    checkPlayerFloorTouch();
    checkEnemyFloorTouch();
    checkPlatformCollision();
    checkSpecialBlockCollision();
    checkPipeCollision();
    cameraMove();
    checkEnemyTurtlesPipesCollision();
    checkStairCollision();
    checkGameOver();
    
    clouds.forEach(cloud => {
        cloud.draw();
    });

    hills.forEach(hill => {
        hill.draw();
    });

    castle.draw();

    player.move();
    
    floor.forEach(el => {
        el.draw();
    });

    platforms.forEach(platform => {
        platform.draw();
    });

    specialBlocks.forEach(block => {
        block.draw();
    });

    pipes.forEach(pipe => {
        pipe.draw();
    });

    stairs.forEach(stair => {
        stair.draw();
    });

    enemyMushrooms.forEach(enemy => {
        enemy.move();
    });

    enemyTurtle.move();
}

window.onload = () => {
    update();

    addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'a':
                player.keys.left = true;
                break;
            case 'd':
                player.keys.right = true;
                break;
            case 'w':
                if(player.velocity.y == 0) {
                    player.velocity.y -= 13;
                }
                break;
        }
    });

    addEventListener('keyup', (e) => {
        switch(e.key) {
            case 'a':
                player.keys.left = false;
                player.actualImage = 5;
                break;
            case 'd':
                player.keys.right = false;
                player.actualImage = 1;
                break;
        }
    });

    playAgain.addEventListener('click', clickPlayAgainButton);
}