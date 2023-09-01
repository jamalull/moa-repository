const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const flash = require('connect-flash'); // flash
const indexRouter = require('./routes/index');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // directory for views
app.set('view engine', 'ejs'); // ejs

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // static files

app.use(flash());

app.use('/', indexRouter);

app.listen(3000, () => console.log('Server running on port 3000'));