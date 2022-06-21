const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyparser = require('body-parser');
const path = require('path');
const routes = require('./routes/index')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());
app.use('/',routes);

server.listen(8000,()=>{
    console.log('Todo list App is running at http://localhost:8000/');
})