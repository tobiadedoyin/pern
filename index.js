const express = require('express')
const { client_encoding } = require('pg/lib/defaults')
const cors = require("cors")


const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res)=>{
    res.status(200).json({message: "we are starting here"})
})


app.listen(5040, (req, res)=>{
    console.log('app is running on port: 5040')
})