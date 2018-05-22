'use strict';

import request from 'supertest';
import express from 'express';
import path from 'path';
import users from '../../routes/users';

let app = express();

app.set('views', path.join(path.join(__dirname, '../../'), 'views'));
app.set('view engine', 'jade');
app.use('/users', users);

describe('GET /users', () => {
  it('should provide a text body', done => {
    request(app)
      .get('/users')
      .expect('respond with a resource')
      .expect(200, done);
  });
});

describe('POST /users', () => {
  it('should fail with 404', done => {
    request(app)
      .post('/users')
    .expect(404, done);
  });
});