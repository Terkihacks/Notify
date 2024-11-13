//Import packages
const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes')
const cors = require('cors');
app.use(cors());
 
//Middleware to parse JSON Objects

app.use(express.json());

//Use Routes
app.use('/notify',todoRoutes)

app.listen(5000,() =>{
    console.log('The port is running on port 5000');
})
