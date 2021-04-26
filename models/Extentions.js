const mongoose = require("mongoose");

const extentionSchema = new mongoose.Schema({

    Salads: [
        { name: String, price: String },
        { name: String, price: String },
        { name: String, price: String },
        { name: String, price: String }
    ]
    ,
    Sauces: [
        { name: String, price: String },
        { name: String, price: String },
        { name: String, price: String }]
        ,
    Breads: [
        { name: String, price: String },
        { name: String, price: String }]
        ,
    Drinks: [
        { name: String, price: String },
        { name: String, price: String },
        { name: String, price: String }]
        ,
    Extra: [
        { name: String, price: String },
        { name: String, price: String },
        { name: String, price: String }]



})

module.exports = mongoose.model('Extentions', extentionSchema);
