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
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_blogs_id_seq', (SELECT MAX(id) FROM user_blogs));");
    });
};
