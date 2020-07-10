const express = require("express")
const router=   express.Router()
const {getSimbolos} =require('../controllers/scraper')

router.get("/obtenerSimbolos",async (req,res)=>{
  let simbolos =await getSimbolos()
  res.json(simbolos)
})



module.exports = router