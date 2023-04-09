// Cronómetro

// CronoElements
    
const cronoElements = {
    display: document.getElementById("crono"),
}

//-- Clase cronómetro
class Crono {

    //-- Constructor. Hay que indicar el 
    //-- display donde mostrar el cronómetro
    constructor(display) {
        this.display = display;

        //-- Tiempo
        this.cent = 0, //-- Centésimas
        this.seg = 0,  //-- Segundos
        this.min = 0,  //-- Minutos
        this.timer = 0;  //-- Temporizador asociado
    }

    //-- Método que se ejecuta cada centésima
    tic() {
        //-- Incrementar en una centesima
        this.cent += 1;

        //-- 100 centésimas hacen 1 segundo
        if (this.cent == 100) {
        this.seg += 1;
        this.cent = 0;
        }

        //-- 60 segundos hacen un minuto
        if (this.seg == 60) {
        this.min = 1;
        this.seg = 0;
        }

        //-- Mostrar el valor actual
        this.display.innerHTML = this.min + ":" + this.seg + ":" + this.cent
    }

    //-- Arrancar el cronómetro
    start() {
    if (!this.timer) {
        //-- Lanzar el temporizador para que llame 
        //-- al método tic cada 10ms (una centésima)
        this.timer = setInterval( () => {
            this.tic();
        }, 10);
        }
    }

    //-- Parar el cronómetro
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    //-- Reset del cronómetro
    reset() {
        this.cent = 0;
        this.seg = 0;
        this.min = 0;

        this.display.innerHTML = "0:0:0";
    }
}

// Canvas y elementos

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var angulo = document.getElementById("ang"); // Range
var vel = document.getElementById("vel"); // Range
var vAngulo = document.getElementById("valorAngulo") // Display
var vVel = document.getElementById("valorVel") // Display

var shoot = document.getElementById("shoot"); // Button Shoot
var start = document.getElementById("start"); // Button Start New Game

let px = 5;
let py = canvas.height - 20;

// Funciones de juego

function calcularVectores(a, v) {
    radians = ((a*Math.PI)/180);

    vx = v * Math.cos(radians);
    vy = v * Math.sin(radians);

    return vx, vy;
}

function dibujarProyectil() {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(5, canvas.height - 20, 15, 15);
}

function dibujarCirculoAleatorio(x, y) {
    const r = 10; // radio de 10px
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
}

function actualizarVelRangeDisplay() {
    vel.addEventListener("input", () => {
        vVel.textContent = vel.value;
    });
}

function actualizarAnguloRangeDisplay() {
    angulo.addEventListener("input", () => {
        vAngulo.textContent = angulo.value;
    });
}

function reset() {
    start.onclick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        x = Math.floor((Math.random() * 0.73 + 0.27) * (canvas.width - 25)) + 10; // Ajuste para evitar que el círculo se corte en los bordes
        y = Math.floor(Math.random() * (canvas.height - 25)) + 10; // Ajuste para evitar que el círculo se corte en los bordes
        dibujarProyectil();
        dibujarCirculoAleatorio(x, y);
    }   
}

function shootF() {
    
    t = t + 0.1;

    console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condición de rebote en extremos del canvas
    if (px <= 0 || px >= (canvas.width - 20) ) {
        Vx = -Vx;
    }

  //-- Condición de rebote en extremos horizontales del canvas
    if (py <= 0 || py >= (canvas.height - 20)) {
        Vy = -Vy;
    }

  //-- Actualizar la posición
  px = 5 + Vx*t;
  py = ((canvas.height - 20) - Vy*t - (1/2)*g*(t**2));

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  
    
  ctx.fillStyle = 'green';
  ctx.fillRect(px, py, 15, 15);


  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(shootF);
}



// Main

function main() {

    timer = new Crono(cronoElements.display);
    
    g = -9.8;
    t = 0;
    x = Math.floor((Math.random() * 0.73 + 0.27) * (canvas.width - 25)) + 10; // Ajuste para evitar que el círculo se corte en los bordes
    y = Math.floor(Math.random() * (canvas.height - 25)) + 10; // Ajuste para evitar que el círculo se corte en los bordes

    dibujarProyectil();
    dibujarCirculoAleatorio(x, y);

    actualizarVelRangeDisplay();
    actualizarAnguloRangeDisplay();

    reset(); // Activa la funcionalidad del boton Start New Game
    shoot.onclick = () => {
        calcularVectores(angulo.value, vel.value);
        Vx = vx;
        Vy = vy;
        shootF();
    }

}

// Esperar a que cargue el documento para iniciar
main();
  
