const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const port = 1337;

require('dotenv').config();
require('./DBConnect');

const authRoute = require('./Routes/authRoute');
const taskRoute = require('./Routes/taskRoute');

const app = express();

app.use(express.json());
// Pass options
app.use(helmet());
app.use(cors());

app.use('/auth', authRoute);
app.use('/task', taskRoute);

// Custom error handler for routes
// res.status =
// res.message =
app.use((error, req, res, next) => {
  console.error(error);
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  res.json({
    message: error.message,
  });
});

app.listen(port, () => console.log('Application is listening on port ' + port));
