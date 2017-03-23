'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blogs').insert({
          id: 1,
          blog_name: 'A geek with a hat',
          blog_author: 'Swizec Teller',
          blog_url: 'https://swizec.com/blog/',
          blog_img_url: 'https://d3nulzlctd9uky.cloudfront.net/blog/wp-content/themes/wp-bootstrap-customized/images/me.png?ec5187',
          blog_rss_url: 'https://swizec.com/blog/feed',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 2,
          blog_name: 'bit-player',
          blog_author: 'Brian Hayes',
          blog_url: 'http://bit-player.org/',
          blog_img_url: 'http://bit-player.org/wp-content/uploads/2017/03/capsules-right.png',
          blog_rss_url: 'http://bit-player.org/feed',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 3,
          blog_name: 'Clarke Rolls Rocks',
          blog_author: 'Clarke Ching',
          blog_url: 'http://www.rolls.rocks/ccblog/',
          blog_img_url: 'https://static1.squarespace.com/static/53552de9e4b03c887de2f844/t/5586cd1de4b010cd4052d798/1434897719727/A+business+novel?format=300w',
          blog_rss_url: 'http://www.rolls.rocks/ccblog/?format=rss',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 4,
          blog_name: 'Coding Horror',
          blog_author: 'Jeff Atwood',
          blog_url: 'https://blog.codinghorror.com/',
          blog_img_url: 'https://blog.codinghorror.com/assets/images/codinghorror-app-icon.png?v=8a9fd6fc0a',
          blog_rss_url: 'https://feeds.feedburner.com/codinghorror',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 5,
          blog_name: 'David Walsh Blog',
          blog_author: 'David Walsh',
          blog_url: 'https://davidwalsh.name/',
          blog_img_url: 'https://davidwalsh.name/wp-content/themes/punky/images/logo.png',
          blog_rss_url: 'https://davidwalsh.name/feed',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 6,
          blog_name: 'good coders code, great reuse',
          blog_author: 'Peter Krumins',
          blog_url: 'http://www.catonmat.net/',
          blog_img_url: 'http://www.catonmat.net/static/img/peteris-krumins-small.jpg',
          blog_rss_url: 'http://feeds2.feedburner.com/catonmat',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 7,
          blog_name: 'Herding Cats',
          blog_author: 'Glen B. Alleman',
          blog_url: 'http://herdingcats.typepad.com/my_weblog/',
          blog_img_url: 'http://up1.typepad.com/6a00d8341ca4d953ef01b7c875481c970b-250si',
          blog_rss_url: 'http://herdingcats.typepad.com/my_weblog/atom.xml',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 8,
          blog_name: 'Martin Fowler',
          blog_author: 'Martin Fowler',
          blog_url: 'https://martinfowler.com/',
          blog_img_url: 'https://martinfowler.com/img/mf-cologne.jpg',
          blog_rss_url: 'https://martinfowler.com/feed.atom',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 9,
          blog_name: 'Mike Cohn\'s Blog',
          blog_author: 'Mike Cohn',
          blog_url: 'http://www.mountaingoatsoftware.com/blog',
          blog_img_url: 'http://www.mountaingoatsoftware.com/mgs_assets/images/v4/logo.svg',
          blog_rss_url: 'http://www.mountaingoatsoftware.com/blog/rss',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 10,
          blog_name: 'Otaku, Cedric\'s Blog',
          blog_author: 'Cédric Beust',
          blog_url: 'http://beust.com/weblog/',
          blog_img_url: '',
          blog_rss_url: 'http://beust.com/weblog/feed/',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 11,
          blog_name: 'Programmable Web',
          blog_author: 'multiple authors',
          blog_url: 'https://www.programmableweb.com/',
          blog_img_url: 'https://www.programmableweb.com/sites/default/files/pw-logo.png',
          blog_rss_url: 'https://www.programmableweb.com/rss_blog',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 12,
          blog_name: 'Scott Berkun',
          blog_author: 'Scott Berkun',
          blog_url: 'http://scottberkun.com/',
          blog_img_url: 'http://scottberkun.com/wp-content/uploads/2014/10/headshot-beard-2012-300px.jpg',
          blog_rss_url: 'http://www.scottberkun.com/feed/',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 13,
          blog_name: 'Scott Hanselman Blog',
          blog_author: 'Scott Hanselman',
          blog_url: 'https://www.hanselman.com/blog/',
          blog_img_url: '',
          blog_rss_url: 'http://feeds.hanselman.com/ScottHanselman',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 14,
          blog_name: 'SecretGeek.net',
          blog_author: 'Leon Bambrick',
          blog_url: 'http://secretgeek.net/',
          blog_img_url: 'http://secretgeek.net/image/logo_64_43.png',
          blog_rss_url: 'http://secretgeek.net/Rss',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 15,
          blog_name: 'The Daily WTF',
          blog_author: 'Alex Papadimoulis',
          blog_url: 'http://thedailywtf.com/',
          blog_img_url: 'http://thedailywtf.com/Content/Images/wtf-logo.png',
          blog_rss_url: 'http://syndication.thedailywtf.com/TheDailyWtf',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 16,
          blog_name: 'UIE Brain Sparks',
          blog_author: 'Jared Spool',
          blog_url: 'https://www.uie.com/brainsparks/',
          blog_img_url: 'https://www.uie.com/images/jared_headshot_color_70.jpg',
          blog_rss_url: 'https://www.uie.com/brainsparks/feed/',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 17,
          blog_name: 'WebAppers',
          blog_author: 'multiple',
          blog_url: 'http://www.webappers.com/',
          blog_img_url: 'http://maxcdn.webappers.com/wp-content/themes/webappers4/images/logo.png',
          blog_rss_url: 'http://feeds2.feedburner.com/Webappers',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 18,
          blog_name: 'Word Aligned',
          blog_author: 'Thomas Guest',
          blog_url: 'http://wordaligned.org/',
          blog_img_url: '',
          blog_rss_url: 'http://feeds.wordaligned.org/wordaligned',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('blogs').insert({
          id: 19,
          blog_name: 'Baseball Musings',
          blog_author: 'David Pinto',
          blog_url: 'http://www.baseballmusings.com/',
          blog_img_url: 'http://baseballmusings.com/wp/wp-content/themes/baseballmusings/images/blank.gif',
          blog_rss_url: 'http://feeds2.feedburner.com/Baseballmusingscom',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('blogs_id_seq', (SELECT MAX(id) FROM blogs));");
    });
};
