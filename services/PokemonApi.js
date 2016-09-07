const pogobuf = require('pogobuf');
const PokemonName = require('../pokemons');

const getClient = (token) => {
  const client = new pogobuf.Client()
  client.setAuthInfo('google', token);

  return client;
}

const login = (email, password) => {
  const GoogleLogin = new pogobuf.GoogleLogin();
  return GoogleLogin.login(email, password);
};

const getUserData = (token) => {
  const client = getClient(token);

  return client.init()
    .then((response) => {
      return client.getInventory(0);
    });
};

const releasePokemon = (token, pokemonID) => {
  const client = getClient(token);

  return client.init()
  .then(() => {
     return client.releasePokemon(pokemonID)
  });
};

module.exports = {
  getClient,
  login,
  getUserData,
  releasePokemon
}
