let express = require('express')
    , createError = require('http-errors')
    , cookieParser = require('cookie-parser')
    , logger = require('morgan')
    , bodyParser = require('body-parser');
// App Here

let app = express();
// include Routes Here
let index = require('./routes/index');
let auth = require('./routes/auth/');
// end Routes

app.use(express.static('node_modules'));

app.use(logger('dev'));

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser());

app.use('/', index);
app.use('/auth', auth);

// to return not found 
app.use(function (req, res, next) {
    next(createError(404));
});


app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        error: err.message,
        statuscode: err.status || 500
    });
});

module.exports = app;
