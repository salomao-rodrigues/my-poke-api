const pogobuf = require('pogobuf');
const PokemonName = require('../pokemons');

const login = (email, password) => {
  const GoogleLogin = new pogobuf.GoogleLogin();
  return GoogleLogin.login(email, password);
};

const getUserData = (token) => {
  const client = new pogobuf.Client()
  client.setAuthInfo('google', token);
  return client.init()
    .then((response) => {
      return client.getInventory(0);
    });
};

module.exports = {
  login,
  getUserData
}
