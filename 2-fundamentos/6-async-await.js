const llamadoAPI = () => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      console.log('Llamando api')
      resolve('Se ejecutó la API luego de 2 segundos')
    }, 2000)
  })
}

const main = async () => {
  console.log('Inicio')
  const respuesta = await llamadoAPI()
  console.log(respuesta)
  console.log('Final')
  
}

main();