const request = require('supertest')

const server = require('../api/server')
const db = require('../database/dbConfig')

describe('auth-router.js', () => {
  beforeEach(async () => {
    await db('users').truncate()
  })

  describe('POST /api/auth/register', () => {
    it('returns status 500', () => {
      return request(server)
        .post('/api/auth/register')
        .then(res => expect(res.status).toBe(500))
    })

    it('returns status 201', () => {
      const newUser = { username: 'bruce', password: 'notbatman' }

      return request(server)
        .post('/api/auth/register')
        .send(newUser)
        .then(res => expect(res.status).toBe(201))
    })
  })

  describe('POST /api/auth/login', () => {
    it('returns status 500', () => {
      return request(server)
        .post('/api/auth/login')
        .then(res => expect(res.status).toBe(500))
    })

    it('returns JSON', () => {
      const newUser = { username: 'bruce', password: 'notbatman' }

      return request(server)
        .post('/api/auth/login')
        .send(newUser)
        .then(res => expect(res.type).toMatch(/json/i))
    })
  })
})