//require express
const express = require('express');
const app = express();


//Local imports
const usersRouter = require('./routes/users');

//Routes
app.use('/api/v1/users', usersRouter);

app.listen(3500,()=>{
    console.log("Servidor corriendo");
});
