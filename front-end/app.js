import { Snake, draw as drawSnake, update as updateSnake } from './draw.js'

let snake = new Snake();
let lastRenderTime = 0;
export let div = document.getElementById("game-board");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
export let span = document.querySelector("span");
export let screen = document.querySelector("#end-screen");
btn2.addEventListener("click", () => {
    screen.style.display = "none";
    div.style.display = "grid";
});

btn.addEventListener("click", () => {
    let screen = document.querySelector("#start-screen");
    screen.style.display = "none";
    div.style.display = "grid";
});

function frames(currentTime){
    window.requestAnimationFrame(frames);
    const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000;

    if(secondsSinceLastRenderTime < 1 / snake.speed) return;

    console.log("Render");
    lastRenderTime = currentTime;

    update();
    draw();
};

window.requestAnimationFrame(frames);

function update(){
    updateSnake();
}

function draw(){
    div.innerHTML = '';
    drawSnake(div)
}