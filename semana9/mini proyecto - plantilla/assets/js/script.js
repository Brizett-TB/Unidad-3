// Mini Proyecto 
// Inicializamos nuestro arreglo 
let cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

// Metodos de array
// Push
let btnPush = document.getElementById("btn-push");
//Asignamos la función al botón
btnPush.onclick = funcionPush;

function funcionPush() {
    // Actualizamos el array
    cars.push("lexus");
    // Cargamos las imagenes nuevamente
    mostrarImagenes();
}

// Pop
let btnPop = document.getElementById("btn-pop");
//Asignamos la función al botón
btnPop.onclick = funcionPop;

function funcionPop() {
    if (cars.length > 0) {
    // Actualizamos el array
    cars.pop();
    // Cargamos las imagenes nuevamente
    mostrarImagenes();
    } else {
        alert ("No se puede eliminar más elementos ya que el arreglo está vacío")
    }
}

// Slice
let btnSlice = document.getElementById("btn-slice");
btnSlice.onclick = funcionSlice;

function funcionSlice () {
    let begin = document.getElementById("begin").value;
    let end = document.getElementById("end").value;

    // Nos preguntamos si no son strings vacías
    if (begin != "" && end != "") {
        // Actualizamos el array
        cars = cars.slice(begin, end);
        // Cargamos las imágenes nuevamente
        mostrarImagenes();
    } else {
        alert ("Los campos no pueden estar vacíos");
    }
}

// Shift
let btnShift = document.getElementById("btn-shift");
btnShift.onclick = funcionShift;

function funcionShift() {
    if (cars.length > 0) {
    // Actualizamos el array
    cars.shift();
    // Cargamos las imagenes nuevamente
    mostrarImagenes();
    } else {
        alert ("No se puede eliminar más elementos ya que el arreglo está vacío")
    }
}
    
// Unshift
let btnUnshift = document.getElementById("btn-unshift");
btnUnshift.onclick = funcionUnshift;

function funcionUnshift() {
     // Actualizamos el array
     cars.unshift("honda");
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