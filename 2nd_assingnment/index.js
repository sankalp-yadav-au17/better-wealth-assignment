require("dotenv").config()
const express = require('express')
const {dbConnect} = require('./db/db.js')

const userRoutes = require('./routes/userRoutes.js')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use("/",userRoutes)
dbConnect()

const PORT = 5000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
})