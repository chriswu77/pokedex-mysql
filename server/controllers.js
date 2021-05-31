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
  },

  updateName: (req, res) => {
    dbHelpers.updateName(req, res);
  },

  delete: (req, res) => {
    dbHelpers.delete(req, res);
  }

};

module.exports = controllers;