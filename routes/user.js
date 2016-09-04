const router = require('express').Router();
const pogobuf = require('pogobuf');
const PokemonAPI = require('../services/PokemonAPI');

router.post('/get-data', (req, res) => {
  const token = req.body.token;

  PokemonAPI.getUserData(token)
    .then((inventory) => {
      res.status(200).json(
        pogobuf.Utils.splitInventory(inventory)
      );
    })
    .catch((err) => {
      res.status(401).json({
        'error': err.message
      })
    });
});

module.exports = router;
