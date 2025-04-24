const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();


//Middleware
app.use(cors()) //Permite el acceso a la API desde cualquier origen
app.use(express.json()) //Parsea las peticiones a JSON

const PORT = process.env.PORT || 3000;

const countryRoutes = require('./routes/country.routes');
app.use('/api/country', countryRoutes)

app.listen(PORT, ()=> {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})