const router = require('express').Router();
const pogobuf = require('pogobuf');
const PokemonAPI = require('../services/PokemonAPI');

router.post('/release', (req, res) => {
  const token = req.body.token;
  const pokemonId = req.body.pokemonId;

  PokemonAPI.release(token, pokemonId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log('Got an error', err);
      res.status(401).json({
        'error': err.message
      })
    });
});

router.post('/evolve', (req, res) => {
  const token = req.body.token;
  const pokemonId = req.body.pokemonId;

  PokemonAPI.evolve(token, pokemonId)
    .then((result) => res.status(200).json({ result }))
    .catch((err) => res.status(401).json({'error': err.message}));
});

module.exports = router;
