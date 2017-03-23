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
          body: "<p>Hello. Obviously this is not a real blog post. Real content is on the way.</p><p>Euripidis conceptam qui ex, mea no omnesque assentior. Case gubergren necessitatibus eu mel, usu ea libris pericula. Mea cu dolore scripta. Justo quodsi reformidans pri in, te virtute ornatus vix, ut viris zril mei. Mel eu reque facer democritum.</p><p>Ferri corpora dolores per eu, ad eum accusam intellegam, no his debet nihil. Vidit sententiae ei has. Ea eum veri fastidii, sed latine labores vituperatoribus in, movet aeterno ut pro. Nobis veniam nonumes in his.</p><p>Harum labitur forensibus te nec, et stet conceptam qui, enim zril interpretaris qui in. Cibo clita nonumes ei vel. Vim id cibo commodo voluptatibus. His agam salutandi ea, alienum accumsan invenire cu sea. Suscipit interesset reformidans ut vel, vix consul utroque percipit cu, nam in aeque debitis. Vero legimus detracto in pro.</p><p>Ad pertinacia efficiendi dissentias sit. Vero animal vix ei, reque facilisis patrioque in eum, eos option diceret volumus ut. Id natum partiendo eam, an pertinacia efficiantur disputationi pro. Mel ei debitis hendrerit, agam noster id vis. Dolore verear corrumpit no vel, propriae placerat quo cu.</p><p>Quo ad ludus gubergren, aperiam fabellas incorrupte cu eum, eam quis putant at. Vix mazim dicunt ne, oportere tractatos splendide ius ad, cu cum veniam conclusionemque. Pri eu tota verear feugait, an sit putant omnium. Cum ad adipiscing definitionem, blandit partiendo duo id.</p><p>Et pri nibh officiis repudiandae, vel eu tota tempor gloriatur, eu omnis epicurei assueverit vel. Pertinax recteque ius id. Scripta volutpat at nec, tota erant essent no his, discere rationibus et cum. Mea no dolor oratio tincidunt, oblique philosophia ne nec. Admodum mediocritatem ex pri, explicari vituperatoribus vel cu, duo consequuntur definitiones ut. In prima consul qui, sea accusam quaestio et. Id nam oblique corpora intellegat, eum eu quis fabulas recteque, vim ea ferri nominavi.</p><p>Ex recusabo vituperatoribus qui, dicat iisque persius sea te. Pro lobortis laboramus ex. Choro noster conceptam et pro. Ne quo idque accusata, eius adipisci accusata per ut.</p><p>Ne sea suavitate deseruisse, pri in veniam eirmod commune, possit possim commodo mea ne. Iisque maluisset scriptorem nam ei. Pri id idque partem feugiat, dico virtute dissentias ius at, illud regione facilis eos in. Vel dicat causae percipit ei, te nostrum probatus complectitur eam. Pro pericula percipitur id, ex duo homero animal integre. Est at quas choro eloquentiam, vix in stet debitis, per dicam fabulas an.</p><p>Agam tation ancillae duo cu, duo quis malis ad. Pri adhuc delenit molestiae ea. Usu illud facer quando ne, atqui assentior disputationi eam ad, nam ut tempor inimicus laboramus. Quo an impedit atomorum, nihil everti utroque nec ex.</p><p>Ut solum quando eos, sit eripuit labores laoreet in. Dico probatus mandamus pro an. Animal ceteros in duo. At per facer accusata sensibus.</p>",
          published: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2016-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_blogs_id_seq', (SELECT MAX(id) FROM user_blogs));");
    });
};
