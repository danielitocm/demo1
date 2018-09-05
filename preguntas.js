
var pregunta=new Array
for (var i=1; i<=5; i++){
pregunta[i]=new Object
pregunta[i].asked=false
}

pregunta[1].texto="¿Que es semántica el programación?"
pregunta[1].solucion1="a) "
pregunta[1].solucion2="b) "
pregunta[1].solucion3="c) "
pregunta[1].solucion4="d) "
pregunta[1].respuesta=3

pregunta[2].texto="¿Todas las cosas en un video juego son un objeto que viene de una:?"
pregunta[2].solucion1="a)Libreria"
pregunta[2].solucion2="b) instancia "
pregunta[2].solucion3="c)Clase "
pregunta[2].solucion4="d) Variable "
pregunta[2].respuesta=3

pregunta[3].texto="Que es aquello de lo que Diego no quieres hablar?"
pregunta[3].solucion1="su trabajo"
pregunta[3].solucion2="su familia"
pregunta[3].solucion3="su novia"
pregunta[3].solucion4=" todas las anteriores"
pregunta[3].respuesta=3

pregunta[4].texto="¿A cuál de tus compañeros le deben gatopulpos?"
pregunta[4].solucion1="NO LE"
pregunta[4].solucion2="DEBEN"
pregunta[4].solucion3="A NADIE"
pregunta[4].solucion4="CREO"
pregunta[4].respuesta=3



function pregunta(){
  var opcion= prompt("responda la pregunta")
  var pregunta=[i]

  if(pregunta[i]==="3"){

  
  console.log("respuesta correcta")
  }
}