const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    },
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = {UserModel}