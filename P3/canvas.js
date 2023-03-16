console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 800;
canvas.height = 800;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
ctx.beginPath();
  //-- Definir un rectángulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(50,50, 100, 50);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'blue';

  //-- Cambiar el tamaño de la línea del trazo
  ctx.lineWidth = 3;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
ctx.closePath();

ctx.beginPath();
    //-- Línea horizontal
    ctx.moveTo(100, 200);
    ctx.lineTo(10, 200);

    //-- Línea horizontal y vertical, unidas
    ctx.moveTo(200, 200);
    ctx.lineTo(200,300);
    ctx.lineTo(100,200);

    ctx.moveTo(200, 200);
    ctx.lineTo(390,200);

    ctx.strokeStyle = 'blue';
    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 4;

    //-- Dibujar el trazo
    ctx.stroke()
    
ctx.closePath()

ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(100, 140, 20, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.fillStyle = 'blue';

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()

//-- Texto solido
ctx.font = "25px Arial";
ctx.fillStyle = 'blue'
ctx.fillText("Texto sólido", 10, 340);

//-- Texto trazo
ctx.strokeStyle = 'blue';
ctx.font = "50px Arial";
ctx.strokeText("Texto trazo", 10, 380);

//-- Leer la imagen del documento html
//-- Esta deshabilitada
var logo = document.getElementById("urjc");

logo.onload = ()=> {
  //-- Insertar la imagen en el canvas, una vez que
  //-- ya esté cargada!
  ctx.drawImage(logo, 300,300);
};