const express = require('express');

const app = express();

//Middleware
app.use(express.json()) //Parsea las peticiones a JSON

const PORT = 3000;

const usuariosRoutes = require('./routes/usuarios.routes');
app.use('/api/usuarios', usuariosRoutes)

app.listen(PORT, ()=> {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})