const router = require('express').Router();
const pogobuf = require('pogobuf');
const PokemonAPI = require('../services/PokemonAPI');

router.post('/release', (req, res) => {
  const token = req.body.token;
  const pokemonId = req.body.pokemonId;

  PokemonAPI.releasePokemon(token, pokemonId)
    .then((result, candy) => {
      res.status(200).json({
        result,
        candy
      });
    })
    .catch((err) => {
      console.log('Got an error', err);
      res.status(401).json({
        'error': err.message
      })
    });
});

module.exports = router;
