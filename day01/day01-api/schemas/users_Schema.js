const mongoose= require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxLength:100
    },
    mail:{
        type:String, 
        unique: true,
        required: true,
        maxLength:100

    },
    password:{
        type:String,
        required:true,
        maxLength:100
    },
    role:{
        type:String,
        requirede:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User",UserSchema);