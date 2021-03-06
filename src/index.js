const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const { mongoose } = require('./database');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tasks', require('./routes/task.routes'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log(`El servidor esta en el puerto ${app.get('port')}`);
});
