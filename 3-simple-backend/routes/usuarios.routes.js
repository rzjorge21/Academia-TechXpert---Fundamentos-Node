const express = require('express')
const router = express.Router();


router.get("/", (req, res)=>{
  res.send("Este es el listado de todos los usuarios")
})

router.post("/", (req, res)=>{
  const {nombre, apellido} = req.body;

  res.send(`Se ha creado el usuario ${nombre} ${apellido}`)
})

router.put("/:id", (req, res)=>{
  const {id} = req.params;
  const {nombre, apellido} = req.body;

  res.send(`Se ha actualizado el usuario ${nombre} ${apellido} con Id ${id}`)
})

router.delete("/:id", (req, res)=>{
  const {id} = req.params;

  res.send(`Se ha eliminado el usuario con Id ${id}`)
})

module.exports = router;