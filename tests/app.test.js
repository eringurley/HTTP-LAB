const request = require('supertest');
const app = require('../lib/app');

describe('checking http routes', () => {
  it('has a home route', done => {
    request(app)
      .get('/')
      .then(res => {
        expect(res.text).toContain('hello erin');
        done();
      });
  });
})