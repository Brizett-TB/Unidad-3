// Mini Proyecto 
// Inicializamos nuestro arreglo 
const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

// Metodos de array
let btnPush = document.getElementById("btn-push");
//Asignamos la función al botón
btnPush.onclick = funcionPush;

function funcionPush() {
    // Actualizamos el array
    cars.push("lexus");
    // Cargamos las imagenes nuevamente
    mostrarImagenes();
}

// Esta función carga las imagenes en el elemento demo
function mostrarImagenes() {
    let text = "";

    for (let car of cars) {
        text += `<img src="./assets/img/${car}.png" alt="${car}" width="100" />`;
    }

    document.getElementById("demo").innerHTML = text;
}

// Mostramos las imagenes al inicio
mostrarImagenes();