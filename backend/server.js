const express = require("express");
const products = require('./data/products')
const dotenv = require('dotenv')
const connectDb = require('./config/config')

//dotenv config
dotenv.config();

//connecting to mongodb database
connectDb();
const app = express();

app.get("/", (req,res) => {
    res.send("<h1>welcome</h1>");
});

app.get('/products',(req,res) => {
    res.json(products);
});

app.get('/products/:id' , (req,res) =>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})
const PORT = 3600
app.listen(process.env.PORT || PORT, () => {
    console.log (`Server running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);
});

