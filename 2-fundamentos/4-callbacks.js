// function saludar(nombre){
//   console.log(`Hola ${nombre}`)
// }

// function procesarUsuario(callback){
//   const nombre = 'Jorge'
//   callback(nombre)
// }

// procesarUsuario(saludar);


console.log('Inicio')
setTimeout(()=> {
  console.log('Se ejecutó después de 2 segundos')
}, 2000)
console.log('Final')


funcion1(()=>{
  funcion2(()=>{
    funcion3(()=>{
      // CALLBACK HELL
      //...
      //...
      //...
      //...
      //...
      //...
    })
  })
})