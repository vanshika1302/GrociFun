const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
    },
});

const Product = mongoose.model('Product',productSchema)
module.exports = Product;