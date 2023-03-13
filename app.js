const express = require('express');
const mysql = require('mysql');
const app = express();
const session = require('express-session');
const morgan = require('morgan');
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const todosRoutes = require('./api/routes/todos');
const tasksRoutes = require('./api/routes/tasks');
const usersRoutes = require('./api/routes/users');
const authRoutes = require('./api/routes/auth');
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration



app.use(morgan('dev'));

app.use('/todos', todosRoutes);
app.use('/tasks', tasksRoutes);
app.use('/users', usersRoutes);
app.use('/auth', authRoutes);


app.use((req, res, next) => {
     const error = new Error('Error(404) Page Not Found');
     error.status = 404;
     next(error);
});

app.use((error, req, res, next) => {
     res.status(error.status || 500);
     res.json({
      message: error.message
     })
});

module.exports = app;
