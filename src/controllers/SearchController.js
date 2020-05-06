const Dev = require('../models/Dev');

module.exports = {
  async index(req, res){
    console.log(req.query);
    //busca todos os devs num raio de 10km
    //Filtrar por tecnologias
    return res.json({ devs: []});
  }
}