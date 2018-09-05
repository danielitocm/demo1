var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d')




var coches = []
var interval;
var frames = 0;
var x = canvas.width/2;
var y = canvas.height -20;

var images = {
    mb: "car1.png",
// coche: "http://nackapc.se/aim/carsport01.png",

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
      this.music.src = ''
  }
draw(){
this.x-=.5
if(this.x < -this.width ) this.x = 0
ctx.drawImage(this.image,this.x,this.y,this.width,this.height)      
ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)      

ctx.font = "50px Avenir"
ctx.fillStyle = "green"
ctx.fillText(Math.floor(frames / 60),50,50)
}

} //clase Board


class Coche {
  constructor(y, height, coche="coche2"){
      this.x = canvas.width - 50
      this.y = y ? y : 0
      this.width = 10
      this.height = height || 20
      this.image = new Image()
     // this.image.src = images[coche]
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
    //pipes
    generateCoches()
    drawCoches()
    checkCollitions()
}

function start(){
    if(interval) return
    coches = []
    frames = 0
    interval = setInterval(update, 1000/60)
}

function gameOver(){
    clearInterval(interval)
    ctx.font = "80px Avenir"
    ctx.fillText("Game Over", 50,250)
    ctx.font = "50px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Press 'esc' to restart", 50,300)
    interval = null
    board.music.pause()
}

//funciones auxiliares
function generateCoches(){
    if(frames % 200 === 0){

    //new Pipe(y, alto, "pipe1")
    //1.- generar el tubo de arriba
    var y = 0;
    var alto = Math.floor(Math.random() * 100) + 20
    var topCoche = new Coche(y,alto, "coche2")
    //2.- establecer el espacio donde pasa flappy
    var window = 50
    var alto2 = canvas.height - (window + alto)
    //3.- generar el tubo de abajo
    //var bottomPipe = new Pipe(canvas.height - alto2, alto2, "pipe1")
    //4.- donde jodidos pongo los tubos  ?????
    coches.push(topCoche)
    coches.push(bottomCoche)

    } //if

}


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

/*

class Cuadro{
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
    if(this.y>canvas.height-this.h*2)return
    this.y+=this.h
  }
  goUp(){
    if(this.y==0)return
    this.y-=this.h
  }

}



var cuadrito1 = new Cuadro(300,600,30,30,'blue')

var interval = setInterval(function(){
  ctx.clearRect(0,0,780, 720)
  cuadrito1.draw()

}, 1000/60)


document.onkeydown=function(e){
  switch(e.keyCode){
    case 38: cuadrito1.goUp()
       break;
    case 40: cuadrito1.goDown()
      break;
    case 37: cuadrito1.goLeft()
      break;
    case 39: cuadrito1.goRight()
      break;
         }
}

*/