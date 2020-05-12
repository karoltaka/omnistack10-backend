const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Banco de dados
mongoose.connect('mongodb://admin:admin123@ds045252.mlab.com:45252/devradar',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);