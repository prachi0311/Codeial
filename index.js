const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());

app.use(cookieParser());


app.use(express.static('./assets'));
//use express ejs layouts
app.use(expressLayouts);

//extract styles and scripts from sub pages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use Express Router
app.use('/',require('./routes/index'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port , function(err){
    if(err){
        
        console.log(`error starting the server ${err}`);
    }

    console.log(`server up and running at port ${port}`);
})

