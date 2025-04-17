// Funcion tradicional
// function suma(a, b) {
//   return a + b
// }

// Arrow function () => {}
const suma = (a, b) => {
  return a + b
}

// const suma = (a, b) => a + b;

// Sin parámetros
const saludar = () => {
  console.log('hola')
}

// Un parámetro
const saludoFormal = nombre => {
  console.log(`Buenas tardes ${nombre}`)
}



console.log(suma(2,4))
saludar()
saludoFormal('Jorge')