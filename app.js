var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const database = require('./config/db');
const PORT =3000;
const HOST ='192.168.1.19';

var indexRouter = require('./routes/index');
var distributorRouter = require('./routes/routerDis');

var app = express();
app.listen(PORT,HOST,()=>{
  console.log(`Server đang chạy trên đại chỉ http://${HOST}:${PORT}`);
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/',distributorRouter)


database.connect();
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
