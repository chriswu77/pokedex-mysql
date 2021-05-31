const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/pokemons', controllers.getAll);

router.get('/pokemons/types', controllers.getTypes);

router.get('/pokemons/types/:type', controllers.filterType);

module.exports = router;