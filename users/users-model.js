const db = require('../database/dbConfig')

module.exports = {
  findBy,
  findById,
  add,
}

function findBy(filter) {
  return db('users')
    .where(filter)
}

function findById(id) {
  return db('users')
    .where({ id })
}

function add(newObj) {
  return db('users')
    .insert(newObj, 'id')
    .then(idArr => findById(idArr[0]))
}