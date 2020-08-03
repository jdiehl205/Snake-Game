import  { body,input, apple } from './draw.js';
import { screen, div, span } from './app.js'

export function gameEnd(part){
    if(body[0].x === 22 || body[0].x === 0 || body[0].y === 22 || body[0].y === 0){
        body[0].x = 11;
        body[0].y = 11;
        input.x = 0;
        input.y = 0;
        body.length = 1;
        apple.width = 13;
        apple.height = 15;
        screen.style.display = 'block';
        div.style.display = 'none';
        span.textContent = `${part}`;
    }
   
       snakeIntersection(body[0], {ignoreHead: true})
   }
   
   function snakeIntersection(position, {ignoreHead = false} = {}){
       body.some((part, index) => {
           if(ignoreHead && index === 0) return false;
           equalPositions(part, position);
       });
   
   }
   
   function equalPositions(pos1, pos2){
       if(pos1.x === pos2.x && pos1.y === pos2.y){
           body[0].x = 11;
           body[0].y = 11;
           input.x = 0;
           input.y = 0;
           body.length = 1;
           apple.width = 13;
           apple.height = 15;
           screen.style.display = 'block';
            div.style.display = 'none';
           return true;
       }
   }