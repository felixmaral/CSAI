//-- Contador de clics de botón

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
const gui = {
    display: document.getElementById("display"),
    boton: document.getElementById("boton"),
  }

//-- Objeto contador: Contiene el valor y el método para incrementarse
const counter = {
    valor: 0,
    inc : function(value) {
      this.valor += value;
      gui.display.innerHTML = this.valor;
    }
  }

//-- Acciones: Ligar el botón al contador
gui.boton.onclick = () => {
    counter.inc(1)
  }