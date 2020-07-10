const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const apiRouter = require("./routes/api.routes")






const app = new express
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public')) // relative path of client-side code



app.use("/api",apiRouter)





const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`Server listening at port: ${port}`))
