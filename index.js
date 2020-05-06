const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://admin:admin123@ds045252.mlab.com:45252/devradar',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: request.query (Filtros, ordenação, paginação,...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Omnistack'});
});

app.listen(3333);