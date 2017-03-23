'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          first_name: 'Devin',
          last_name: 'Hurd',
          company_name: 'HurdAudio',
          email: 'hurdaudio@gmail.com',
          hashed_password: '$2a$06$R08R8hCrwbQlv5m2YnB6a.MyTOMxVMu17rTCKd4LVPfnEZWf6ELP.',
          is_admin: true,
          user_avatar_url: 'https://media.licdn.com/media/AAEAAQAAAAAAAAf8AAAAJGMwZDYyMzc2LTAzOGEtNGYwOS1iMDViLTFlYjAyYjYzODIyMQ.jpg',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2016-03-22 14:55:18 UTC')
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Eephus',
          last_name: 'Chatterbox',
          company_name: 'Society for American Baseball Research',
          email: 'eephus@eephus.com',
          hashed_password: '$2a$06$R08R8hCrwbQlv5m2YnB6a.MyTOMxVMu17rTCKd4LVPfnEZWf6ELP.',
          is_admin: true,
          user_avatar_url: 'http://assets.espn.go.com/photo/2008/0715/pg2_sewell_400.jpg',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2016-03-22 14:55:18 UTC')
        }),
        knex('users').insert({
          id: 3,
          first_name: 'Piston',
          last_name: 'Primate',
          company_name: 'Mountain Park Engineering Corp.',
          email: 'pprimate@yahoo.com',
          hashed_password: '$2a$06$R08R8hCrwbQlv5m2YnB6a.MyTOMxVMu17rTCKd4LVPfnEZWf6ELP.',
          is_admin: false,
          user_avatar_url: 'https://farm4.static.flickr.com/3256/2435783017_3f9729cd4a.jpg?v=0',
          created_at: new Date('2017-03-22 14:55:16 UTC'),
          updated_at: new Date('2016-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
    });
};
