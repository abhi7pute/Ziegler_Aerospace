// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');


const app = express();


app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true })); 
app.use(passport.initialize());
app.use(passport.session());

const passportConfig = require('./config/passport');
passportConfig(passport);


mongoose.connect('mongodb://localhost:27017/Ziegler_Aerospace', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  console.log();('Welcome to the MERN Stack App');
});


app.use('/api/users', require('./routes/users')); 
app.use('/api/products', require('./routes/products')); 
app.use('/api/messages', require('./routes/messages'));


const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
