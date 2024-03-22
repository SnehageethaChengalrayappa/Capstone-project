const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/users');
const events = require('./routes/events');

const app = express();

mongoose.connect('mongodb://localhost/eventmanagement', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/events', events);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});