'use strict';

import request from 'supertest';
import express from 'express';
import path from 'path';
import index from '../../routes/index';

let app = express();

app.set('views', path.join(path.join(__dirname, '../../'), 'views'));
app.set('view engine', 'jade');
app.use('/', index);

describe('GET /', () => {
  it('should provide a welcome HTML page', done => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});

describe('POST /', () => {
  it('should fail with 404', done => {
    request(app)
      .post('/')
    .expect(404, done);
  });
});