const express = require('express');
const consolidate = require('consolidate');

var app = new express();







// router
app.use('/',require('./router/loginRouter.js')());
app.use('/main',require('./router/mainRouter.js')());
app.use('/admin',require('./router/adminRouter.js')());









app.set('view engine','html');
app.set('views','./views');
app.engine('html',consolidate.ejs);

app.use(express.static('./public'));


app.listen(8080);

