//canvas y variables globales
//classes
//instancias
//funciones principales
//funciones aux
//controles y eventos


var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d')




var camiones = []
var interval;
var frames = 0;
//var x = canvas.width/2;
//var y = canvas.height -20;
var score=0;
var llegadas=0;

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
   // this.image.src = images.mb
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



//funciones auxiliares



//los observadores

addEventListener('keydown', function(e){
   if(e.keyCode === 32 && coche.y > 50){
       coche.y -= 60
   } 

   if(e.keyCode === 13){
    start()
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
         
       }
       else{
         console.log("perdiste") 
         
       }
    
    this.y-=this.h
    
    
  }


}

function drawScore() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: "+score, 8, 20);
}


//Jugador2  

var jugador1 = new Jugador (200,600,30,30,'blue')
var jugador2 = new Jugador (300,600,30,30,'yellow')
var jugador3 = new Jugador (400,600,30,30,'green')
var jugador4 = new Jugador (500,600,30,30,'peru')



function update(){
  frames++   
   
  board.draw()
  // cuadrito.draw()
  ctx.clearRect(0,0,780, 720)
  jugador1.draw()
  jugador2.draw()
  jugador3.draw()
  jugador4.draw()
  score++
  drawScore()
  generateCamiones()
  drawCamiones()
  checkCamionCollisions()
 // borrar()


 // checkCollitions()
}

function start(){
  if(interval) return
  camiones = []
  frames = 0
  interval = setInterval(update, 1000/60)
  board.music.play()
  
}

function gameOver(){
  clearInterval(interval)
  prompt("¿Cuál es tu mensaje postumo?")
  
}

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




////////////////////////////////////////Clase camion
  
class Camion {
  constructor(x,y,w,h,color, vel){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.color=color
    this.right=true
    this.down=false
    this.vel = vel
    
    
  }
  draw(){
    this.x+=this.vel
    ctx.fillStyle=this.color
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }
  checkCollision(item){
    return  (this.x < item.x + item.w) &&
            (this.x + this.w > item.x) &&
            (this.y < item.y + item.h) &&
            (this.y + this.h > item.y);
}
}


function generateCamiones(){
  var w = 200
  var h = 50
  var y = Math.floor(Math.random()*400)
  var x = 0-w
  var vel = Math.floor(Math.random()*2)
  if(frames%50===0)camiones.push(new Camion(x, y, w, h, 'red', vel))
}


function drawCamiones(){
  camiones.forEach(function(c){
    c.draw()
  })
}

function checkCamionCollisions(){
  camiones.forEach((camion)=>{
    if(camion.checkCollision(jugador1) ||
    camion.checkCollision(jugador2) ||
    camion.checkCollision(jugador3) ||
    camion.checkCollision(jugador4) ){
      gameOver()
    }
  })
}











////////////////////////////////////////
//Dibujar camion A MANO, antes de cambiarlo a clase


/*
var x = canvas.width-900;
var y = canvas.height-320;
var dx = 20;
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
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawM();
    drawM2()
   
  
    x += dx;
    
}

//drawM2();
//setInterval(borrar, 100);


*/


/*
class Pregunta{
  constructor(pregunta,respuesta){
    this.pregunta= pregunta;
    this.respuesta= respuesta;
  }
}

*/
