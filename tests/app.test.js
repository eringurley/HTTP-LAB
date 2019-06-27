const request = require('supertest');
const app = require('../lib/app');

describe('checking http routes', () => {

  it('returns index page at /index.html', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('whack'));
      });
  });
});
