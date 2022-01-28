const Hobbit = require('./hobbits-model')


test('sanity', ()=>{
    expect(true).toBe(true)
})

test('NODE_ENV is correct', ()=>{
    expect(process.env.NODE_ENV).toBe('testing')
})