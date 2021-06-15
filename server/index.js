const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to mongo');
  }
);

app.get('/', (req, res) => {
  res.send('Welcome to homepage');
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.listen(5000, () => {
  console.log('backend server is running');
});
