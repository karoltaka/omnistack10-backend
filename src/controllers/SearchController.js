const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res){
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    console.log(techsArray);

    return res.json({ devs: [] });
  }
}