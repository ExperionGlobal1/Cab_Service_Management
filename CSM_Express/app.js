const express =require('express');
const parser = require('body-parser');
const signupRoute = require('./routes/signup');
const bookRoute = require('./routes/book');


const app = express();
app.use(parser.urlencoded({extended:true}));

app.use(express.static("public"));

app.use("/api", signupRoute);
app.use("/api1", bookRoute);

app.listen(80);