const mongoose = require('mongoose')
const validator = require('validator')



const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(`Invalid Email ${value}`)
            }
        }

    },
    phone:{
        type:Number,
        min:10,
        unique:true,
        required:true,
    },
    address:{
        type:String,
        required:true
    }

});


// Model 

const Student = new mongoose.model('Student',StudentSchema);


module.exports = Student;