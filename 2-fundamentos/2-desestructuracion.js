/*
numérico: 1, 5.2, 99999999999, -1 etc etc
strings: 'tesfdas', "asdads", `asdasd`
boolean: true, false
undefined
null
*/


// objeto
const persona = {
  nombre: 'Jorge',
  edad: 26,
  ciudad: 'Lima',
}

// const nombre = persona.nombre;
// const edad = persona.edad;
// const ciudad = persona.ciudad;

// console.log(nombre, edad, ciudad)

const edad = 30;

const { nombre, edad: edadPersona, apodo = 'Coco' } = persona;
// console.log('Sin alias:', nombre, edad)
// console.log('Con alias:', nombre, edadPersona)
console.log(apodo)



// ARREGLO
const array = ['rojo', 'verde', 'azul', 'amarillo'];

// const [,,,primero, segundo = 0] = array;
// console.log(primero, segundo)
