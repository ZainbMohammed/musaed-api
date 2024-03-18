
const express = require('express');
var cors = require('cors')
const dbConnection = require('./conficDB/dbConnection');
const usersRouter = require('./src/routers/users.routers');
const httpStatusText = require('./src/utils/httpStatusText');

const app = express();

app.use(cors()); // to solve cors policy 'Cross Origin Resourse Sharing'
app.use(express.json());
app.use('/musaed/users',usersRouter);

// connect to db
dbConnection();

// gloable middleware for not found router 
app.all('*',(req,res,next)=>{
    return res.json({status:httpStatusText.ERROR,Message:'This resourse is not available'});
  })
app.listen(process.env.PORT,()=>{
    console.log('app listing on port 3000');
})


