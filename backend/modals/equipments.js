const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide equipment name"],
        maxlength: 50,
    },
    weight:{
        type:Number,
        required:[true,"Please provide equipment weight"],
    },
    price:{
        type:Number,
        required:[true,"Please provide equipment price"],
    }
})

module.exports = mongoose.model("Eq",equipmentSchema);
