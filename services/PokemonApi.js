const pogobuf = require('pogobuf');
const PokemonName = require('../pokemons');

const GoogleLogin = new pogobuf.GoogleLogin();
const client = new pogobuf.Client();

const login = (email, password) => GoogleLogin.login(email, password);
//   .then(token => {
//     return token
//       client.setAuthInfo('google', token);
//       return client.init();
//   });
// };

const loginWithToken = (email, token) => {
  return GoogleLogin.loginWithToken(email, token);
};

const getInventory = (res) => {
  login()
    .then(() => {
      // Get full inventory
      return client.getInventory(0);
    })
    .then(inventory => {
        if (!inventory.success) {
          throw Error('success=false in inventory response');
        }

        inventory = pogobuf.Utils.splitInventory(inventory);
        console.log('Retrieving inventory');
        res.json(inventory);
    })
    .catch(console.error);
}

module.exports = {
  login,
  loginWithToken,
  getInventory
}
