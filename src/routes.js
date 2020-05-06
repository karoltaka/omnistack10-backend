const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req, res) => {
  const { github_username } = req.body;

  const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);

  const { name, avatar_url, bio } = apiRes.data;

  return res.json({ message: 'Hello Omnistack'});
});

module.exports = routes;