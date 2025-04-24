const express = require('express')
const router = express.Router();

const { getAllCountries, getCountryByCode, createCountry,
  printMessage
 } = require('../controllers/country.controller')


router.get("/", getAllCountries)
router.get("/:code", getCountryByCode)
router.post("/", createCountry)
router.post("/message", printMessage)


module.exports = router;