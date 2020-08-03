import { gameEnd } from './gameover.js'

let inputDirection = { x: 0, y: 0 };
export let input = getInputDirection();
let i = 1;
function getInputDirection(){
    return inputDirection;
}
let num = 21;

class Snake {
    constructor (){
        this.speed = 3;
    }
};

export let body = [
    {x: 11, y: 11}
]

export class Apple {
    constructor(){
        this.width = 13;
        this.height = 15;
    }
}

export let apple = new Apple();

function draw(gameBoard){
    // Snake
    body.forEach(part => {
        let bodyPart = document.createElement("div");
        bodyPart.classList.add("snake");
        bodyPart.style.gridColumnStart = part.x;
        bodyPart.style.gridRowStart = part.y;
        gameBoard.appendChild(bodyPart);
    });
    // Apple
    let food = document.createElement("div");
    food.classList.add("apple");
    food.style.gridColumnStart = apple.width;
    food.style.gridRowStart = apple.height;
    gameBoard.appendChild(food);
}

window.addEventListener('keydown', e => {
    switch (e.key){
        case 'ArrowUp':
            if(inputDirection.y !== 0) break
            input.x = 0;
            input.y = -1;
        break
        case 'ArrowDown':
            if(inputDirection.y !== 0) break
            input.x = 0;
            input.y = 1;
        break
        case 'ArrowRight':
            if(inputDirection.x !== 0) break
            input.x = 1;
            input.y = 0;
        break
        case 'ArrowLeft':
            if(inputDirection.x !== 0) break
            input.x = -1;
            input.y = 0;
        break
    }
});

function update(){
    for(let i = body.length - 2; i >= 0; i--){
        body[i + 1] = { ...body[i] };
    }

    body[0].x += input.x;
    body[0].y += input.y;
    // Change Apple Position & Add Part To Snake
    if(body[0].x === apple.width && body[0].y === apple.height){
        let ran = Math.floor(Math.random() * num + 1);
        apple.width = ran;
        apple.height = ran;
        // Snake
        body.length += i;
    }
    gameEnd(body.length);
}

export { Snake, draw, update};