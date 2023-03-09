console.log("Ejecutando JS");


//-- Leer el párrafo identificado como test y guardarlo en la constante test
const test = document.getElementById('ptest');

const test2 = document.getElementById('ptest2');

//-- Evento de click en ´test´: lanzamos la funcion

test2.onclick = function () {
    console.log("Clic sobre el párrafo")
    test.innerHTML =  "Texto cambiado"
}



