const mongoose = require('mongoose');
const { TouchableWithoutFeedbackComponent } = require('react-native');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,   
    },
    verified:{
        type:Boolean,
        default:false
    },
    verificationToken:String,
    addresses:[
        {
            name:String,
            mobileNo:String,
            country:String,
            town:String,
            quater:String,
        } 

    ],
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ],
    createAt:{
        type:Date,
        default:Date.now
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User

