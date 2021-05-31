const db = require('./index.js');

const queryAsync = (queryStr, options) => {
  return new Promise((resolve, reject) => {
    db.query(queryStr, options, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const dbHelpers = {

  getAll: (req, res) => {
    const queryStr = `SELECT pokemon.id, pokemon.name, types.type, images.img FROM pokemon LEFT JOIN types ON (pokemon.typeNum = types.id) LEFT JOIN images ON (pokemon.imageNum = images.id)`;

    queryAsync(queryStr)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },

  getTypes: (req, res) => {
    const queryStr = `SELECT DISTINCT type FROM types`;

    queryAsync(queryStr)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },

  filterType: (req, res) => {
    const { type } = req.params;

    const queryStr = `SELECT pokemon.id, pokemon.name, types.type, images.img FROM pokemon LEFT JOIN types ON (pokemon.typeNum = types.id) LEFT JOIN images ON (pokemon.imageNum = images.id) WHERE typeNum = (SELECT id FROM types where type = "${type}")`;

    queryAsync(queryStr)
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },

  updateName: (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;

    const queryStr = `UPDATE pokemon SET name = "${newName}" WHERE id = ${id}`;

    queryAsync(queryStr)
      .then((results) => {
        res.status(200).send(`successfully updated ${newName}`);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  delete: (req, res) => {
    const { id } = req.params;

    const queryStr = `DELETE FROM pokemon WHERE id=${id}`;

    queryAsync(queryStr)
      .then((results) => {
        res.status(200).send('successfully deleted pokemon');
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }

};

module.exports = dbHelpers;