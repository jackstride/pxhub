const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const port = 1337;

require('dotenv').config();
require('./DBConnect');
const authRoute = require('./Routes/authRoute');

const app = express();

app.use(express.json());
// Pass options
app.use(helmet());
app.use(cors());

app.use('/auth', authRoute);

app.listen(port, () => console.log('Application is listening on port ' + port));
