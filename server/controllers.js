const dbHelpers = require('./db/dbHelpers.js');

const controllers = {

  getAll: (req, res) => {
    dbHelpers.getAll(req, res);
  },

  getTypes: (req, res) => {
    dbHelpers.getTypes(req, res);
  },

  filterType: (req, res) => {
    dbHelpers.filterType(req, res);
  }

};

module.exports = controllers;