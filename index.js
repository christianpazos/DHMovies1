const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');


const indexRoutes = require('./routes/indexRoutes');
const detalleRoutes = require('./routes/detalleRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registroRoutes = require('./routes/registroRoutes');

app.listen(3000, (req, res) => {console.log("Servidor en Puerto 3000")});


app.use(express.static('./public'));

app.use(session({secret: 'Buen dia!!!',
resave: true,
saveUninitialized: true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

//Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views')

app.use('/', indexRoutes);
app.use('/detalle', detalleRoutes);
app.use('/registrar', registroRoutes);
app.use('/login',loginRoutes);
app.get('/logout', (req, res)=> {
    req.session.destroy()
    res.redirect('/')

})