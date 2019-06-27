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

  it('returns index page at /index.html', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('hello erin'));
      });
  });
});
