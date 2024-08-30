/*
let letras = ["a", "b", "c", "a", "d", "e", "f", "a", "g", "h"];
console.log(letras);

console.log("indexOf");

let indice = letras.indexOf("a");
console.log(indice);
console.log(letras.indexOf("d"));

console.log(letras.indexOf("a",4));

console.log(letras.indexOf("x"));

console.log("lastIndexOf");

console.log(letras.lastIndexOf("a"));

console.log(letras.lastIndexOf("a",1));

// includes
// Determina si un arreglo incluye un determinado elemento, devolviendo true o false según corresponda
console.log("includes");
console.log(letras.includes("c"));
console.log(letras.includes("c",3));
*/

let nums = [34, 65, 23, 45, 96, 143, 4, 56];
console.log(nums);

// .find()
// Devuelve el primer elemento que cumple con una condición
let coincidencia = nums.find((num) => num > 60);

// findIndex ()
// Devuelve el indice del primer elemento que cumple con una condición
let coincidenciaIndex = nums.findIndex((num) => num > 60);

// .filter()
// Devuelve un arreglo con todos los elementos que cumplan con una condición
let filtrado = nums.filter((num) => num > 60);

console.log(coincidencia);
console.log(coincidenciaIndex);
console.log(filtrado);