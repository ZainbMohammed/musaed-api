
const express = require('express');
const dbConnection = require('./DB/dbConnection');

const app = express();


// connect to db
dbConnection();
app.get('/',(req,res)=>{

    res.send('Hello world');
})
app.listen(process.env.PORT,()=>{
    console.log('app listing on port 3000');
})


