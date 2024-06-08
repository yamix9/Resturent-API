const mongoose = require('mongoose')

const resturentSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please Enter Resturent Name"]
        },
        Detail:{
            type:String,
            required:[true,"Please Enter Resturent Detail"]
        },
        Location:{
            type:String,
            required:[true,"Please Enter Resturent Location"]
        },
        Price:{
            type:Number,
            required:true,
            default:0
        },
        image:{
            type:String,
            required:false,
        }

    },
    {
        timestamps:true
    }
)


const Resturent = mongoose.model('Resturent',resturentSchema);

module.exports = Resturent;