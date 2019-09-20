const jwt = require('jsonwebtoken')

module.exports = {
  generateToken,
}

function generateToken(userObj) {
  const payload = {
    user_id: userObj.id
  }
  const secret = process.env.JWT_SECRET || 'everyone knows though..'
  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret, options)
}