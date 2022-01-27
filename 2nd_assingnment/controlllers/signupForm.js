const {resolve} = require('path')
const bcrypt = require('bcrypt')

const {sendingMail} = require('../sendEmail.js')
const {UserModel} = require('../model/userModel.js')
 

const signupForm = (req,res) => {
    const path = resolve(__dirname, '../Forms')
    res.sendFile(`${path}/SignupForm.html`)
}

const postUser = async(req,res) => {
   try {
       const {name, email, password} = req.body
    
       const response = await UserModel.find({email:email})
       
       if (response.length !=0){
           res.send("User Already Registered!!!")
           return
       }

       const hashedPassword = await bcrypt.hash(password,10)
       
       await UserModel.create({name:name, email:email, password:hashedPassword, id: new Date().getTime().toString()})
       sendingMail(email,name)
    res.send("Successful!!")
   } catch (error) {
       console.log(error);
       res.send(error)
       
   }
}


module.exports = {signupForm, postUser}