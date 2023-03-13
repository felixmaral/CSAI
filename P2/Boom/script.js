
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

function compare(keyCompare) {
    if (estado == ESTADO.K1) {
        skey = SKEY.K1;
        if (keyCompare == skey) {
            gameElementes.d1.innerHTML = skey;
            estado = ESTADO.K2
        } else {
            gameElementes.d1.innerHTML = "X"
        }
    } else if (estado == ESTADO.K2) {
        if (keyCompare == skey) {
            gameElementes.d1.innerHTML = skey;
            estado = ESTADO.K2
        } else {
            gameElementes.d2.innerHTML = "X"
        }
    } else if (estado == ESTADO.K3) {
        if (keyCompare == skey) {
            gameElementes.d1.innerHTML = skey;
            estado = ESTADO.K2
        } else {
            gameElementes.d3.innerHTML = "X"
        } 
    } else if (estado == ESTADO.K3) {
        if (keyCompare == skey) {
            gameElementes.d1.innerHTML = skey;
            estado = ESTADO.K2
        } else {
            gameElementes.d4.innerHTML = "X"
        } 
    }
}

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
        gameElementes.d1.innerHTML = "*"
        gameElementes.d2.innerHTML = "*"
        gameElementes.d3.innerHTML = "*"
        gameElementes.d4.innerHTML = "*"
        secretkey = [];
        console.log("")
        console.log("Reiniciando el juego")
        getSecretKey();
        let SKEY = {
            K1: secretkey[0],
            K2: secretkey[1],
            K3: secretkey[2],
            K4: secretkey[3]
        }
        estado = ESTADO.K1;
        console.log("estado 0")
        skey = SKEY.K1
        console.log("El numero secreto para el estado 0 es: " + skey)
    }

    // Inicio del juego

    let estado = ESTADO.K1;

    let SKEY = {
        K1: secretkey[0],
        K2: secretkey[1],
        K3: secretkey[2],
        K4: secretkey[3]
    }

    skey = SKEY.K1;

    console.log("estado 0");

    console.log("El numero secreto para el estado 0 es: " )

    let clicked = false;
    function firstClick(event) {
        if (!clicked) {
            timer.start();
            console.log("Iniciando Cronometro por ejecutar la primera interacción del juego");
            clicked = true;
        }
    }

    // Iniciar crono

    gameElementes.keys[0].addEventListener('click', firstClick);
    gameElementes.keys[1].addEventListener('click', firstClick);
    gameElementes.keys[2].addEventListener('click', firstClick);
    gameElementes.keys[3].addEventListener('click', firstClick);
    gameElementes.keys[4].addEventListener('click', firstClick);
    gameElementes.keys[5].addEventListener('click', firstClick);
    gameElementes.keys[6].addEventListener('click', firstClick);
    gameElementes.keys[7].addEventListener('click', firstClick);
    gameElementes.keys[8].addEventListener('click', firstClick);
    gameElementes.keys[9].addEventListener('click', firstClick);

    function keyValue(id_variable) {
        var value = document.getElementById(id_variable).value;
        return value;
    }

    gameElementes.keys[9].onclick = () => {
        keyCompare = keyValue("k0");
        compare(keyCompare);
    }

        

    






  



  