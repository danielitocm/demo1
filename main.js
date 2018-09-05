var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d')

/*
var canvas2 = document.getElementsByTagName('canvas2')[0];
var ctx2 = canvas.getContext('2d')
*/



var coches = []
var interval;
var frames = 0;
//var x = canvas.width/2;
//var y = canvas.height -20;
var score = 0;

var images = {
    mb: "car1.png",
    stu: "stu.png",


}


class Board{
  constructor(){
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
      this.image = document.createElement('img')
      this.image.src = images.mb
      this.image.onload = () => {
      this.draw()
      }
      this.music = new Audio()
      this.music.src = 'We_Dance.mp3'
  }
draw(){
this.x-=.5
if(this.x < -this.width ) this.x = 0
ctx.drawImage(this.image,this.x,this.y,this.width,this.height)      
ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)      

ctx.font = "50px Avenir"
ctx.fillStyle = "green"
ctx.fillText(Math.floor(frames / 100),50,50)
}

} //clase Board


class Coche {
  constructor(x,y,width,height,src){
      this.x = canvas.width - 50
      this.y = y ? y : 0
      this.width = 10
      this.height = height || 20
      this.image = new Image()
      this.image.src = src;
      this.image.onload = () => {
      this.draw()
      } 
  }

  draw(){
      this.x-=2
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
}


var board = new Board()
//var coche = new Coche()
//funciones principales
function update(){
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    board.draw()
   // cuadrito.draw()
  
    generateCoches()
   // drawCoches()
   // checkCollitions()
}

function start(){
    if(interval) return
    coches = []
    frames = 0
    interval = setInterval(update, 1000/60)
}


//funciones auxiliares



//los observadores

addEventListener('keydown', function(e){
   if(e.keyCode === 32 && coche.y > 50){
       coche.y -= 60
   } 

   if(e.keyCode === 27){
    start()
   }

   if(e.key = "Enter"){
       start()
       board.music.play()
   }

})


class Jugador {
  constructor(x,y,w,h,color){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.color=color
    this.right=true
    this.down=false
    
    
  }
  draw(){
         
    ctx.fillStyle=this.color
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }
  goRight(){
    if(this.x>canvas.width-this.w*2)return
    this.x+=this.w   
  }
  goLeft(){
    if(this.x==0)return
    this.x-=this.w
  }
  goDown(){
    if(this.y>canvas.height-this.h*2)return alert("game over") || document.location.reload();
    this.y+=this.h
  }
  goUp(){
    if(this.y==0)
    return console.log("RESOUESTA"+  prompt("¿Todas las cosas en un video juego son un objeto que viene de una:?")) 
       if (prompt=="clase"){
         console.log("ganaste")
         score++;
       }
       else{
         console.log("perdiste") 
         
       }
    
    this.y-=this.h
    
    
  }


}

function drawScore() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.fillText("Score: "+score, 8, 20);
}



var jugador1 = new Jugador (200,600,30,30,'blue')

var interval = setInterval(function(){
  ctx.clearRect(0,0,780, 720)
  
  jugador1.draw()
  jugador2.draw()
  jugador3.draw()
  jugador4.draw()
  drawScore()

}, 1000/60)

//Jugador2  


var jugador2 = new Jugador (300,600,30,30,'yellow')
var jugador3 = new Jugador (400,600,30,30,'green')
var jugador4 = new Jugador (500,600,30,30,'peru')

document.onkeydown=function(e){
  switch(e.keyCode){
    case 87: jugador2.goUp()
       break;
    case 83: jugador2.goDown()
      break;
    case 65: jugador2.goLeft()
      break;
    case 68: jugador2.goRight()
      break;

      //player1
    case 38: jugador1.goUp()
       break;
    case 40: jugador1.goDown()
      break;
    case 37: jugador1.goLeft()
      break;
    case 39: jugador1.goRight()
      break;

      //player3

      case 73: jugador3.goUp()
      break;
   case 75: jugador3.goDown()
     break;
   case 74: jugador3.goLeft()
     break;
   case 76: jugador3.goRight()
     break;


         }
}



//Dibujar camion

var x = canvas.width-900;
var y = canvas.height-320;
var dx = 2;
var busW = 200;


function drawM() {
    ctx.beginPath();
    ctx.rect(x, y,busW,80);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawM2() {
  ctx.beginPath();
  ctx.rect(x, y-200,busW,80);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}


function borrar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawM();
    drawM2()
   
  
    x += dx;
    
}

//drawM2();
setInterval(borrar, 30);


// hardcodeo para los camiones
/*
class Camiones{
  constructor(){
      this.Camiones1 = []           //era balls
      this.x = 0
      this.y = 0
      this.width = 50
      this.height=60
      this.image1 = new Image()
      this.image1.src = "camion22.png"
      this.theImage = this.image1
      this.howManyTimesMarioHasBeenTouched = 0
  }

*/


class Pregunta{
  constructor(pregunta,respuesta){
    this.pregunta= pregunta;
    this.respuesta= respuesta;
  }
}