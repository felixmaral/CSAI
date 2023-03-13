
// Cronometro

    const cronoElements = {
        display: document.getElementById("displayCrono"),
        boton_start: document.getElementById("start-btn"),
        boton_stop: document.getElementById("stop-btn"),
        boton_reset: document.getElementById("reset-btn")
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

// Generar clave secreta

    //-- Array que almacena números secretos
    let secretkey = [];

    //-- Generar números aleatorios con un valor máximo
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //-- Generamos números secretos y los almacenamos en un array
    function getSecretKey() {
        for (let i = 0; i < 4; i++) {
            let rnum = getRandomInt(9);
            secretkey.push(rnum.toString());
        }
        //-- Mostramos el contenido del array de números secretos en la consola
        for (let j = 0; j < secretkey.length; j++) {
            console.log( j + ' Secret Key ' + secretkey[j]);
        }
    }

    getSecretKey();

// Estados del juego

    const ESTADO = {
        K1: 0,
        K2: 1,
        K3: 2,
        K4: 3
    }

// Extrayendo los demás botones del juego

    const gameElementes = {
        d1: document.getElementById("d1"),
        d2: document.getElementById("d1"),
        d3: document.getElementById("d1"),
        d4: document.getElementById("d1"),
        keys: document.getElementsByClassName("key")
    }

// Funcionalidad del juego








// MAIN

    // Creando cronometro y asignando las funciones a los botones HTML

    timer = new Crono(cronoElements.display);

    cronoElements.boton_start.onclick = () => {
        timer.start();
        console.log("Iniciando Crono")
    }

    cronoElements.boton_stop.onclick = () => {
        timer.stop();
        console.log("Parando Crono")
    }
    cronoElements.boton_reset.onclick = () => {
        timer.stop();
        timer.reset();
        secretkey = [];
        getSecretKey();
        console.log("Reseteando crono")
    }

    // Inicio del juego

    let estado = ESTADO.K1;

    if (estado == 0) {
        console.log("estado 1");
    }






  



  