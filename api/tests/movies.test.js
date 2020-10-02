const request = require('supertest');
const app = require('./../app');

describe('GET /movies', () => {
  it('responds with json', function(done) {
    request(app)
      .get('/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds with list of movies', function(done) {
    request(app)
      .get('/movies')
      .set('Accept', 'application/json')
      .expect(200)
      .then(({body}) => {
        expect(body.movies.length).toBe(5);
        done();
      })
  });
});
