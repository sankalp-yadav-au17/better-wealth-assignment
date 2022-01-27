const express = require('express')

const {signupForm, postUser} = require('../controlllers/signupForm.js')

const routes = express.Router()

routes.get("/",signupForm)
routes.post("/",postUser)



module.exports = routes