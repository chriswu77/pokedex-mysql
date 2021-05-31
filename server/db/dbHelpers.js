const db = require('./index.js');
const Promise = require('bluebird');
const query = Promise.promisify(db.query);

const dbHelpers = {

  getAll: (callback) => {
    const queryStr = `SELECT * FROM pokemon`;

    query(queryStr)
      .then((results) => {
        callback(null, results);
      })
      .catch((err) => {
        callback(err);
      });
  }

};

module.exports = dbHelpers;