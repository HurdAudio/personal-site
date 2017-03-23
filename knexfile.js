'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/hurdaudio_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/hurdaudio_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
