const request = require('supertest');
const server = require('../server');

describe('GET /', function() {
    it('responds with status 200', function(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
});

describe('GET /functions', function() {
    it('responds with status 200', function(done) {
        request(server)
            .get('/functions')
            .expect(200, done);
    });
});

describe('GET /variables', function() {
    it('responds with status 200', function(done) {
        request(server)
            .get('/variables')
            .expect(200, done);
    });
});






