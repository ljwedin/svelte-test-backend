var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

MongoClient.connect(
    process.env.MONGODB_URI,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
)
    .then(client => {
    console.log('Connected to database');
    const db = client.db('gin_svelte');
    app.locals.db = db;
});

const gamesRouter = require('./routes/games');
const usersRouter = require('./routes/users');
const testdeckRouter = require('./routes/testdeck');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/games', gamesRouter);
app.use('/testdeck', testdeckRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
