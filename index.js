const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(express.urlencoded());

//app.use(cookieParser());

app.use(express.static('./assets'));
//use express ejs layouts
app.use(expressLayouts);

//extract styles and scripts from sub pages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name: 'codial',
    // TODO change secret
    secret: 'blahsomething',
    cookie :{
        maxAge :( 1000 * 60 * 100)
    },
    saveUninitialized:false,
    resave:false
}));

app.use(passport.initialize());
app.use(passport.session());

//use Express Router
app.use('/',require('./routes/index'));



app.listen(port , function(err){
    if(err){
        
        console.log(`error starting the server ${err}`);
    }

    console.log(`server up and running at port ${port}`);
})

