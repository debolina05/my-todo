const express = require('express');
const app = express();
const route = require('./routes/todo');
const database = require('./database/config')
app.use(express.urlencoded());
app.use(express.json());

//views
app.use(express.static('public'));
app.set('view engine','ejs');

//middlewares
app.use('/',route);

database.sync()
.then(result => {
    console.log("database printed");
})
.catch(err => {
    console.log(err);
});

//port connection
app.listen(3003,()=>{
    console.log('Connection Initiated...');
});