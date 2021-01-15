
const express = require('express')
const bodyParser = require('body-parser')
const exchange = require('./routes/exchange.routes')
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use( "/api/rates", exchange)
// "/api/rates" ,


app.listen( process.env.PORT || 3000 , ()=>{
    console.log(`server running at port 3000`)
})