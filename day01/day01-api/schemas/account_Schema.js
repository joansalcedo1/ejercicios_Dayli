const mongoose= require("mongoose");


const AccountSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, ref: "User" 
    },
    userName:{
        type:String, 
        required: true
    },
    accountNumber:{
        type:String, 
        unique: true,
        required: true
    },
    balance:{
        type:Number,
        required:true,
        default:0
    },
    createdAt:{
        type:Date,
        default: Date.now

    }
});

module.exports = mongoose.model("Account",AccountSchema);