const request = require('supertest')

const server = require('../api/server')

describe('auth-router.js', () => {
  describe('GET /api/jokes', () => {
    it('returns 400 Bad Request', () => {
      return request(server)
        .get('/api/jokes')
        .then(res => expect(res.status).toBe(400))
    })

    it('returns JSON', () => {
      return request(server)
        .get('/api/jokes')
        .then(res => expect(res.type).toMatch(/json/i))
    })
  })
})