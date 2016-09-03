const router = require('express').Router();
const PokemonAPI = require('../services/PokemonAPI');

router.post('/', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  PokemonAPI.login(login, password)
    .then(token => {
      res.status(200).json({
        token: token
      });
    })
    .catch((err) => {
      res.status(401).json({
        'error': err.message
      })
    });
});

module.exports = router;
