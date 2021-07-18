const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-crud-test';

mongoose.connect(URI)
  .then(db => console.log('yee se conecto'))
  .catch(error => console.error(error));

module.exports = mongoose;
