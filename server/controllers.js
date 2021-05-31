const dbHelpers = require('./db/dbHelpers.js');

const controllers = {

  getAll: (req, res) => {
    dbHelpers.getAll((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  }

};

module.exports = controllers;