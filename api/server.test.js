// even if you are only testing a route
// even if you are testing only a single endpoint
// IMPORT THE WHOLE SERVER.JS!!!!!!

const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

test("sanity", () => {
    expect(true).toBe(true);
  });

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe('GET /hobbits', () => {
    test('returns a status 200 OK', async ()=>{
        const res = await request(server).get('/hobbits')
        expect(res.status).toBe(200)
    })
})

describe('POST /hobbits', () => {
    test('returns a status 201 Created', async () => {
      const res = await request(server)
        .post('/hobbits')
        .send({ name: 'bilbo' })
      expect(res.status).toBe(201)
    })
})
describe('POST /hobbits', () => {
    test('returns a status 201 Created', async () => {
        const res = await request(server)
          .post('/hobbits')
          .send({ name: 'bilbo' })
        expect(res.status).toBe(201)
})
})

test('returns the new hobbit', async () => {
    const res = await request(server)
      .post('/hobbits')
      .send({ name: 'bilbo' })
    expect(res.body.name).toBe('bilbo')
    expect(res.body.id).toBe(5)
  })