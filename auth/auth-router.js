const router = require('express').Router()
const bcrypt = require('bcryptjs')

const Users = require('../users/users-model')
const tokenFn = require('./token-functions')

router.post('/register', (req, res) => {
  const newUser = req.body
  const hash = bcrypt.hashSync(newUser.password, 12)

  newUser.password = hash

  Users.add(newUser)
    .then(user => {
      const token = tokenFn.generateToken(user)

      res.status(201).json({ message: `successfully registered as ${user.username}`, token })
    })
    .catch(err => res.status(500).json({ message: 'error registering new user' }))
})

router.post('/login', (req, res) => {
  const { username, password } = req.body

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenFn.generateToken(user)

        res.json({ message: `successfully logged in! welcome ${user.username}!`, token })
      } else res.status(401).json({ messsage: 'you shall not pass!' })
    })
    .catch(err => res.status(500).json({ message: 'error logging in' }))
})

module.exports = router
