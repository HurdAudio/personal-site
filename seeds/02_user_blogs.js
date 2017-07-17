'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_blogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_blogs').insert({
          id: 1,
          author: 1,
          title: 'Lorem Ipsum is a Friend of Mine',
          body: "Hello. Obviously this is not a real blog post. Real content is on the way.\n\nEuripidis conceptam qui ex, mea no omnesque assentior. Case gubergren necessitatibus eu mel, usu ea libris pericula. Mea cu dolore scripta. Justo quodsi reformidans pri in, te virtute ornatus vix, ut viris zril mei. Mel eu reque facer democritum.\n\nFerri corpora dolores per eu, ad eum accusam intellegam, no his debet nihil. Vidit sententiae ei has. Ea eum veri fastidii, sed latine labores vituperatoribus in, movet aeterno ut pro. Nobis veniam nonumes in his.\n\nHarum labitur forensibus te nec, et stet conceptam qui, enim zril interpretaris qui in. Cibo clita nonumes ei vel. Vim id cibo commodo voluptatibus. His agam salutandi ea, alienum accumsan invenire cu sea. Suscipit interesset reformidans ut vel, vix consul utroque percipit cu, nam in aeque debitis. Vero legimus detracto in pro.\n\nAd pertinacia efficiendi dissentias sit. Vero animal vix ei, reque facilisis patrioque in eum, eos option diceret volumus ut. Id natum partiendo eam, an pertinacia efficiantur disputationi pro. Mel ei debitis hendrerit, agam noster id vis. Dolore verear corrumpit no vel, propriae placerat quo cu.\n\nQuo ad ludus gubergren, aperiam fabellas incorrupte cu eum, eam quis putant at. Vix mazim dicunt ne, oportere tractatos splendide ius ad, cu cum veniam conclusionemque. Pri eu tota verear feugait, an sit putant omnium. Cum ad adipiscing definitionem, blandit partiendo duo id.\n\nEt pri nibh officiis repudiandae, vel eu tota tempor gloriatur, eu omnis epicurei assueverit vel. Pertinax recteque ius id. Scripta volutpat at nec, tota erant essent no his, discere rationibus et cum. Mea no dolor oratio tincidunt, oblique philosophia ne nec. Admodum mediocritatem ex pri, explicari vituperatoribus vel cu, duo consequuntur definitiones ut. In prima consul qui, sea accusam quaestio et. Id nam oblique corpora intellegat, eum eu quis fabulas recteque, vim ea ferri nominavi.\n\nEx recusabo vituperatoribus qui, dicat iisque persius sea te. Pro lobortis laboramus ex. Choro noster conceptam et pro. Ne quo idque accusata, eius adipisci accusata per ut.\n\nNe sea suavitate deseruisse, pri in veniam eirmod commune, possit possim commodo mea ne. Iisque maluisset scriptorem nam ei. Pri id idque partem feugiat, dico virtute dissentias ius at, illud regione facilis eos in. Vel dicat causae percipit ei, te nostrum probatus complectitur eam. Pro pericula percipitur id, ex duo homero animal integre. Est at quas choro eloquentiam, vix in stet debitis, per dicam fabulas an.\n\nAgam tation ancillae duo cu, duo quis malis ad. Pri adhuc delenit molestiae ea. Usu illud facer quando ne, atqui assentior disputationi eam ad, nam ut tempor inimicus laboramus. Quo an impedit atomorum, nihil everti utroque nec ex.\n\nUt solum quando eos, sit eripuit labores laoreet in. Dico probatus mandamus pro an. Animal ceteros in duo. At per facer accusata sensibus.\n",
          published: true,
          tags: { "0": "lorem ipsum", "1": "dque partem", "2": "gubergren" },
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2016-03-22 14:55:18 UTC')
        }),
        knex('user_blogs').insert({
          id: 2,
          author: 1,
          title: 'Hello World',
          body: "World, hello!\n\nWelcome to the HurdAudio blog now hosted at DevinHurd.com. \n\nMany of the features are in progress and now that a bare-bones blogging platform is enabled I will use this space to keep visitors up to date on feature plans and rollouts. At present we have a solid landing page with links to a resume page, projects page, HurdAudio page (which this blog is a subset of), HurdReads page and a contact page. Not all the subsets are wired in. But we have a blog!\n\nRecently completed feature: full Create/Read/Update/Delete functionality for the blog on both the user and admin side. Blogging may begin in earnest. Filtering by tags and comments are not yet enabled. But I've left the display components for those in place for the time being as they help with spacing on screen.\n\nNow working on: Media queries for the Projects page. Right now it displays poorly on phones and tablets. That will be changed shortly.\n\nOn deck: Mock-up page for the Technical Reading List subpage of HurdReads. The plan is to link to an example of what this section will look like.\n\nComments aren't enabled below just yet. But do feel free to shoot me a message on the Contact page. \n",
          published: true,
          tags: { "0": "admin", "1": "feature rollout", "2": "introduction" },
          created_at: new Date('2017-04-04T16:58:42.068Z'),
          updated_at: new Date('2017-04-04T16:58:42.068Z')
        }),
        knex('user_blogs').insert({
          id: 3,
          author: 1,
          title: 'Projecting',
          body: "Recently completed feature: Projects page now resizes for small screens. We try to be friendly to phones and tablets here at devinhurd.com.\n\nNow working on: Mock-up page for the Technical Reading List subpage of HurdReads. I'm looking at a number of creative directions to go with this.\n\nOn deck: Writing the introduction material for the Harmonic Theory subpage of HurdAudio. Content. Content. Content.\n",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-04-05T01:39:42.068Z'),
          updated_at: new Date('2017-04-05T01:39:42.068Z')
        }),
        knex('user_blogs').insert({
          id: 4,
          author: 1,
          title: 'Tech Reads Mock-up is Go',
          body: "Recently completed feature: Tech Reading List mock-up is in place and served up via Angular off of the HurdReads page. Stay tuned as functionality gets added to this side.\n\nNow working on: Writing the Introduction section for the Harmonic Theory portion of the HurdAudio page. I'm going to incorporate the Web Audio API and make this an interactive explanation of my intonation theory. So it's time to pour a little love into it.\n\nOn deck: Bringing the Reading List page from mock-up to dynamically functioning CRUD (Create, Read, Update, Delete). This will bring a significant portion of the HurdReads feature set online.\n",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-04-05T16:28:57.847Z'),
          updated_at: new Date('2017-04-05T16:28:57.847Z')
        }),
        knex('user_blogs').insert({
          id: 5,
          author: 1,
          title: "Now Vibrating Harmonic Theory",
          body: "Recently completed feature: The \"Introduction\" section of the Harmonic Theory (found in the HurdAudio section of this site) now has content. This content includes audio examples rendered via Web Audio API and examples in rendered musical notation via Vexflow. This is the first time I've managed to explain the underpinnings of my harmonic theory with such interactive examples. This section will be a joy to build out.\n\nNow working on: I'm adding a simple-text .pdf version of my resume for downloading. Also, full CRUD capability for the Reading List section of HurdReads. This is a huge section and I expect it to present well.\n\nOn deck: enabling comments in this here blog space.\n",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-04-08T22:13:54.221Z'),
          updated_at: new Date('2017-04-08T22:13:54.221Z')
        }),
        knex('user_blogs').insert({
          id: 6,
          author: 1,
          title: "Reading Gets the Full CRUD",
          body: "Merging in a feature branch at long last. This one took a while. But now I can manage the reading reviews and reading lists from the back end of my own site. \n\nRecently completed feature: HurdAudio reading list now has full CRUD (Create, Read, Update, Delete) functionality. I have an elaborate, rules-based method for selecting my readings and writing that into code was a learning experience. On the front end there are cool, rotating cubes for each book. And a bookshelf display in my own reading sequence. \n\nNow working on: Enabling comments in the blog. I'm going to be a hardcore administrator and only display comments that have been explicitly approved. So no spammers or trolls are getting a forum here.\n\nOn deck: The HurdAudio page needs a little work to make it more small-screen friendly. Look for vertical columns of resizing cassette tapes to improve the experience on phones and tablets.",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-04-21T23:22:30.087Z'),
          updated_at: new Date('2017-04-21T23:22:30.087Z')
        }),
        knex('user_blogs').insert({
          id: 7,
          author: 1,
          title: "The Blog Comments are Now Open",
          body: "Recently completed feature: Comments. Right here. In this space. You won't see them right away if you have something to say. And you won't see them at all if they're off-topic or you're trying to sell me generic-brand sexual enhancement vitamins. But the forms are all there and I can exercise my yeah/nay hammer over on the admin side. (No vitamins required).\n\nNow working on: HurdAudio responsiveness for small screens. Right now the cassettes are pretty ugly and overlapping on phones and tablets. That is going to change.\n\nOn deck: Mock-up for the HurdAudio Rotation page. Layout and design for a space to discuss my listening habits.",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-04-23T22:12:47.656Z'),
          updated_at: new Date('2017-04-23T22:12:47.656Z')
        }),
        knex('user_blogs').insert({
          id: 8,
          author: 1,
          title: "Analog Tapes on Digital Screens",
          body: "Recently completed feature: HurdAudio subpage is now responsive. No more overlapping tapes on smaller screens. Various cosmetic improvements have also been implemented. Those of you who have waged battle with CSS understand that some of the hardest things to do with styling are often the easiest to describe. Things like: \"put that thing in the center of the screen\" or \"just move that square over to the right side of the screen.\" \n\nNow working on: HurdAudio Rotation mock-up. Time to get creative and work up a layout for a listening diary.\n\nOn deck: Back-end support for the Technical Reading List. The database of books needs a couple of tweaks to make this portion of the page functional.",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-04-24T01:53:29.401Z'),
          updated_at: new Date('2017-04-24T01:53:29.401Z')
        }),
        knex('user_blogs').insert({
          id: 9,
          author: 1,
          title: "Rebirth of the HurdAudio Rotation",
          body: "There used to be this blog where I chronicled my listening habits diligently. And then I started moving all over the place and getting too busy to document the travails of my ears. I was also increasingly dissatisfied with the limited range of design choices for having a blog on one of the big blog servers.\n\nRecently completed feature: HurdAudio Rotation page now links to a mock-up. I think it's a particularly attractive design. The Bandcamp iframe functions and features some fine musical selections. A HurdAudio Rotation that includes a full stream of the music being reviewed has been a long time coming. A few more passes on this section will solidify things.\n\nNow working on: Back-end work on the Technical Reading List. Getting everything in order for when I apply the full CRUD to this feature set.\n\nOn deck: Chapter 1 of the Harmonic Theory section. This will be a rebirth of the \"Scale of the Day\" I used to post elsewhere.",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-04-24T15:30:24.099Z'),
          updated_at: new Date('2017-04-24T15:30:24.099Z')
        }),
        knex('user_blogs').insert({
          id: 10,
          author: 1,
          title: "Back-end Shenanigans",
          body: "Recently completed feature: It's not especially visible on the front end. But the database for the Tech Reading List got a massage. And I added a few seeds for good measure.\n\nNow working on: Chapter 1 of the Harmonic Theory content. It's time to roll out the E-flat Lydian Scale and talk harmony.\n\nOn deck: Enabling comments on the Reading List reviews. See your words appear on the book cube (once your friendly admin has approved them).",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-04-25T00:07:40.595Z'),
          updated_at: new Date('2017-04-25T00:07:40.595Z')
        }),
        knex('user_blogs').insert({
          id: 11,
          author: 1,
          title: "Long Time No Post",
          body: "So writing the content for Chapter 1 of the harmonic theory section is taking a bit longer than expected as I wrestle with learning the Vexflow library. It's still in progress. But this site is still live and under development. There have also been several book reviews added in the reading list page. So this is a good time for a branch merge. More work on this - and other sites - as I work out all the ins and outs of other frontend frameworks and node libraries.",
          published: true,
          tags: { "0": "admin", "1": "feature rollout" },
          created_at: new Date('2017-07-17T03:23:53.608Z'),
          updated_at: new Date('2017-07-17T03:23:53.608Z')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_blogs_id_seq', (SELECT MAX(id) FROM user_blogs));");
    });
};
