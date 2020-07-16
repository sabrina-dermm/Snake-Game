const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let scal=10;
let total=0;
let tail = [];
let xSnake= 0, ySnake=0;

let xSpeed = scal;
let ySpeed = 0;
let xFood =(Math.floor(Math.random()* canvas.width/scal)+1)*scal;
let yFood=(Math.floor(Math.random()* canvas.height/scal)+1)*scal;

function draw(style, x, y , width, height){
      ctx.fillStyle = style;
      ctx.fillRect(x,y,width, height);
}

function drawSnake(){
      ctx.fillStyle='red';
      for(let i=0;i<tail.length;i++){
            ctx.fillRect(tail[i].x,tail[i].y,scal,scal);
      }
      ctx.fillRect(xSnake,ySnake,scal,scal);
}

function drawFood(){
      ctx.fillStyle='black';
      for(let i=0; i<tail.length;i++){
            if(xFood==tail[i].x && yFood==tail[i].y){
                  updateFood();
            }
      }
      ctx.fillRect(xFood,yFood,scal,scal);
}

function updateFood(){
      
      if(xSnake==xFood && ySnake==yFood){
            xFood = (Math.floor(Math.random()* canvas.width/scal)+1)*scal;
            yFood = (Math.floor(Math.random()* canvas.height/scal)+1)*scal;
            eat();
      }
     
}
function updateSnake(){
      for(let i=0;i<tail.length-1;i++){
            tail[i]=tail[i+1];
      }
      tail[total-1]= { x: xSnake, y: ySnake };
      xSnake= xSnake + xSpeed;
      ySnake = ySnake+ySpeed;
      loose();
      
}
function loose(){
      
      if(xSnake<0){
            xSnake=0;
            ySnake=0;
            tail=[];
            total=0;
           // alert("You lost !");
      }
      if(xSnake >canvas.width){
            xSnake=0;
            ySnake=0;
            tail=[];
            total=0;
            alert("You lost !");
      }
      if(ySnake<0){
            xSnake=0;
            ySnake=0;
            tail=[];
            total=0;
            //alert("You lost !");
      }
      if(ySnake >canvas.height){
            xSnake=0;
            ySnake=0;   
            tail=[];
            total=0;
            alert("You lost !");
      }
}
function eat(){
      total++;
}
function direction(direction){
      switch(direction){
            case 'ArrowLeft':
                  xSpeed= scal*(-1);
                  ySpeed = 0;
            break;
            case 'ArrowRight':
                  xSpeed= scal;
                  ySpeed=0;
            break;
            case 'ArrowUp':
                  xSpeed = 0;
                  ySpeed = scal *(-1);
            break;
            case 'ArrowDown':
                  xSpeed=0;
                  ySpeed=scal;
            break;
      }
}

      window.setInterval(()=>{
           
            draw('rgb(10, 128, 79)', 0,0,canvas.width, canvas.height);
            updateSnake();
            drawSnake();
            updateFood();
            drawFood();
                 },200);   
                 
window.addEventListener('keydown',((evt)=>{
    direction(evt.key);
      console.log((Math.floor(Math.random()* canvas.width/scal)+1)*scal);
}));

                


