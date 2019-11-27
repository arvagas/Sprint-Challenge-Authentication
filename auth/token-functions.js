const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets')

module.exports = {
  generateToken,
}

function generateToken(userObj) {
  const payload = {
    user_id: userObj.id
  }
  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}