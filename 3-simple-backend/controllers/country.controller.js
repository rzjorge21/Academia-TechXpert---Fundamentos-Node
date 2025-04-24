const db = require('../db/connection');

const getAllCountries = (req, res) => {
  const query = 'SELECT * FROM country;';
  db.query(query, (err, results) => {
    if(err){
      console.error('ERROR AL OBTENER RESULTADOS', err.message);
      return res.status(500).json({error: 'error del servidor'})
    }
    res.json(results)
  })
}

const getCountryByCode = (req, res) => {
  const {code} = req.params;
  const query = 'SELECT * FROM country WHERE Code = ?;';
  db.query(query, [code], (err, results) => {
    if(err){
      console.error('ERROR AL OBTENER RESULTADOS', err.message);
      return res.status(500).json({error: 'error del servidor'})
    }
    res.json(results)
  })
}

const createCountry = (req, res) => {
  const {Code, Name, Continent, Region, SurfaceArea, Population, LocalName, GovernmentForm, Code2} = req.body;
  const query = `INSERT INTO country 
  (Code, Name, Continent, Region, SurfaceArea, Population, LocalName, GovernmentForm, Code2)
  VALUES 
  (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(query, [Code, Name, Continent, Region, SurfaceArea, Population, LocalName, GovernmentForm, Code2], (err, results) => {
    if(err){
      console.error('ERROR AL OBTENER RESULTADOS', err.message);
      return res.status(500).json({error: 'error del servidor'})
    }
    res.json(results)
  })
}

const printMessage = (req, res) => {
  const {message} = req.body;
  console.log(message);
  res.json({message: 'Mensaje recibido'})
}


module.exports = {
  getAllCountries,
  getCountryByCode,
  createCountry,
  printMessage
}