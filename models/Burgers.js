const mongoose = require("mongoose");

const burgerSchema = new mongoose.Schema({
    Food: {type: String} ,
    Discription:{type:String},
    WitheDiscription : {type:String},
    Pic : {type: String},
    Price : {type:Number},
    Rating : {type:String},


}) 

module.exports = mongoose.model('Burgers' , burgerSchema);