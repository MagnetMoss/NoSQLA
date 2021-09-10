const express = require('express');
const logger = require('morgan')
const mongoose = require ('mongoose')
//const css = require ('./public/style.css')

const PORT = process.env.PORT || 3001;
//const routes = require('./routes');

const app = express();

app.use(logger('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
})

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));


app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
