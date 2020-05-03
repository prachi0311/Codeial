const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

//use Express Router
app.use('/',require('./routes/index'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.listen(port , function(err){
    if(err){
        
        console.log(`error starting the server ${err}`);
    }

    console.log(`server up and running at port ${port}`);
})

