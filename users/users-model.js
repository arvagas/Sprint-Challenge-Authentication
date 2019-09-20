const db = require('../database/dbConfig')

module.exports = {
  findBy,
  findById,
  add,
}

function findBy(filter) {
  db('users')
    .where(filter)
}

function findById(id) {
  db('users')
    .where({ id })
}

function add(newObj) {
  db('users')
    .insert(newObj, 'id')
    .then(idArr => findById(idArr[0]))
}