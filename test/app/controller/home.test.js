'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggs')
      .expect(200);
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/test')
      .expect('hi, eggs2')
      .expect(200);
  });
});
