const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/pokemons', controllers.getAll);

module.exports = router;