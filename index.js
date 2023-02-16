const express = require('express');
const app = express();
const morgan = require('morgan');

const todosRoutes = require('./api/routes/todos');
const tasksRoutes = require('./api/routes/tasks');

app.use(morgan('dev'));

app.use('/todos', todosRoutes);
app.use('/tasks', tasksRoutes);

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
