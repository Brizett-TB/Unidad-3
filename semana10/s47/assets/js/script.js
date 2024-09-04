// Objetos literales 
// Declaramos nuestro objeto 
const persona = {
    nombre: "André",
    apellido: "Mantilla",
    edad: 16,
    dni_cedula: "06032419", // snake_case
};

// Mostramos el objeto
console.log(persona);

// ACCEDER O MODIFICAR UN OBJETO
// objeto.clave = valor; Notación de punto
// objeto["clave"] = valor; Notación de corchetes

// Accedemos a una propiedad
// console.log(persona[0]); // Esto da undefined
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

// Agregar propiedades 
persona.correo = "correoxd@correo.com";
// Mostramos el objeto 
console.log(persona);

// Modificar propiedades 
persona.correo = "andrestefano@correo.com";
// Mostramos el objeto 
console.log(persona);