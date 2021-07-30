// https://blog.logrocket.com/mern-stack-tutorial/
// bcryptjs is a password hashing function
// body-parser allows us to get the data throughout the request
// express is our main framework
// mongoose is used to connect/interact with MongoDB
// validation (as its name implies) is used for validation

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
