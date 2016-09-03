const assert = require('assert');
const PokemonAPI = require('../../services/PokemonAPI');

const email = process.env.TEST_EMAIL;
const pass = process.env.TEST_PASS;

describe('PokemonAPI Service', () => {
  it('logs in and gets token', (done) => {
    PokemonAPI.login(email, pass)
    .then(token => {
      done();
    })
    .catch(done);
  });
});
