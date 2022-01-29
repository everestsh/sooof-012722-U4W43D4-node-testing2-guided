const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('hobbits')
}

function getById(id) {
  const result = db('hobbits').where('id', id).first()
  console.log(result)
  return result
}

async function insert(hobbit) {
  const [id] = await db('hobbits').insert(hobbit)
  return getById(id)
}

async function update(id, changes) {
  return null
}

function remove(id) {
  return null
}
