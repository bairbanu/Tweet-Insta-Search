import request from 'supertest'

describe('Backend -->', () => {
    let server
    
    beforeEach(() => {
        delete require.cache[require.resolve("../server/server")];
        server = require('../server/server')
    })

    afterEach(done => {
        server.close(done)
    })

    it('exposes a /tweets endpoint', done => {
        request(server)
            .get('/tweets')
            .expect(200, done)
    })

    it('shows a 404 for all other endpoints', done => {
        request(server)
            .get('/anyotherroute')
            .expect(404, done)
    })
})