// https://blog.logrocket.com/mern-stack-tutorial/
// bcryptjs is a password hashing function
// body-parser allows us to get the data throughout the request
// express is our main framework
// mongoose is used to connect/interact with MongoDB
// validation (as its name implies) is used for validation

// app.js
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// index
app.get('/', (req, res) => res.send('Hello world!'));

// PORT
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`))
