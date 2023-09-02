// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

// Create an Express application
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true })); // Configure session
app.use(passport.initialize()); // Initialize Passport
app.use(passport.session());

// Import and configure Passport for user authentication
// Replace with your own Passport configuration
const passportConfig = require('./config/passport');
passportConfig(passport);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Example routes
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Stack App');
});

// Example API routes
app.use('/api/users', require('./routes/users')); // Replace with your user routes
app.use('/api/products', require('./routes/products')); // Replace with your product routes
app.use('/api/messages', require('./routes/messages')); // Replace with your messaging routes

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
