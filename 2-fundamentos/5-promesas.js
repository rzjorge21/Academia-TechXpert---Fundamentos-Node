const promesa = new Promise((resolve, reject)=>{
  const exito = false;
  //llamando servicio....
  if(exito){
    resolve('Todo está correcto')
  }else{
    reject('Se cayó la api :c')
  }
})


promesa.then((respuesta)=>{
  console.log(respuesta)
}).catch((error)=>{
  console.log(error)
})
.finally(()=>{
  console.log('FINALIZADO')
})