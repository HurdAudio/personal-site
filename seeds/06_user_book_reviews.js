'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_book_reviews').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_book_reviews').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 1,
          periodicals_id: null,
          rating: 43,
          review_title: 'Nell Zink: Mis-read',
          review_body: "There are a few funny scenes in this novel. A smattering of uncomfortable situations and tragic hijinks. But not nearly enough of them to support a cast of wooden characters. There were glimpses of meditations on sexual orientation and racial identity. But even these smashed hard against the detachment and puzzling motivations of every individual in this story. It reads along but offers precious little fun or reward for reaching the conclusion.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 2,
          periodicals_id: null,
          rating: 87,
          review_title: 'Makana Cracks Another Case',
          review_body: "The books in this series work with an excruciatingly slow buildup. A police procedural carried out by an outsider. Investigations that can only be carried out by someone free of the corruption and politics of the police. The slowness of these investigations works because Makana is such a complex and fascinating character. A Sudanese refugee living in exile in Cairo. Cairo itself forms the other reason why this story is so compelling. The action and violence in CITY OF JACKALS is sparse, and brutally effective as part of the story. The plot works its way through with meticulous precision and the conclusion ties up many loose ends. I had hoped to see more progress on the backstory (when will we learn the fate of Makana's missing daughter?). But there is plenty left to keep me eager for the next case.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 3,
          periodicals_id: null,
          rating: 67,
          review_title: 'Oyeyemi Delivers a Mixed Bag of Keys and Locks',
          review_body: "I've loved the Helen Oyeyemi novels I've read and there was a good buzz surrounding this collection of stories so my expectations may have been too high. The magic realism is vivid and the recurring themes of keys, ghosts, puppets and locks is compelling. The last two stories are good as a re-imagining of Red Riding Hood and a twist on the tale of Pandora's Box. I struggled with the dream-like prose and occasionally lost the thread in a few of these selections even while catching the ways they interlock from one to the next. It's an uneven collection that ran hit and miss for me.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 4,
          periodicals_id: null,
          rating: 84,
          review_title: 'Serial Developments in Lirium-land',
          review_body: "I was concerned at the start of this episode. The dialog and situations were starting to take on a cheesy, made-for-television feel and I began to wonder if Lirium was ever going to make good on his newfound convictions. But with a burst of action, violence and plot development this this got on the thrill-ride track and we'll be back for more.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 5,
          periodicals_id: null,
          rating: 58,
          review_title: 'Monhegan Goes to the Dogs',
          review_body: "This novel was a let down after the brilliance of The Last Summer of the Camperdowns, and Apologize Apologize!. Like those previous stories, this one features a borderline dysfunctional family of sympathetically flawed characters set against a New England backdrop and a coming of age story. These are things that Elizabeth Kelly does well. But this time the whole thing is narrated by the family dog. This was a gutsy move that didn't work. It made for an unconvincing perspective on a compelling story and I couldn't get past the layers of contrivance that made the whole thing feel less credible.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 6,
          periodicals_id: null,
          rating: 92,
          review_title: 'Teach a Zombie to Fish for Brains',
          review_body: "These zombie stories don't show any sign of letting up. They keep coming and coming and this one delivers more than its quota of thrills along the way. It manages to thread a fine line between the unforgiving \"rules\" of zombie lore while working a small patch of humanity into an imaginary being halfway along the spectrum between human and zombie. Throw in a cast of characters with simple, conflicted motivations and you end up with this creepy masterpiece. There is an additional twist on the the survival theme that elevates the overall reading experience. Good luck keeping this one out of your nightmares.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 7,
          periodicals_id: null,
          rating: 95,
          review_title: 'Noir Classic with Twists',
          review_body: "This one started out rough and never shed its rough edges, but it certainly takes a number of outstanding plot twists along its way toward constructing a brilliant set of circumstances. Along the way it paints a picture of 1940s New York City in brilliant black and white shades. Originally published in 1943 this one works with some timeless themes and tensions and still delivers a thrill..",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 8,
          periodicals_id: null,
          rating: 85,
          review_title: 'Short Stories to Give You PTSD',
          review_body: "Short stories that unflinchingly portray the lives of the young men who have served in the Iraq and Afghanistan wars of this century. It's hard to overstate how important it is to tell these stories and how Phil Klay brings a heightened degree of credibility (as a soldier who has been there) while exposing the nuanced greys that fall between the pro and anti sides of this conflict. It's a challenging and rewarding read.\n\n The first stories were short, sharp and brutally sad. Hitting at the trauma of war with such raw verve I was unsure if I could finish reading this collection. Serving in the armed forces is far removed from my own life experiences and this is exactly the value of reading diverse voices. So I soldiered on and the stories got better as they grew longer. The oppressive sadness was persistent and this isn't a book for everyone. But it's an important book and I wish that the people responsible for making the decision to go to war would understand the views and experiences written about so honestly here.\n\n By the end of the book I was struck by how Klay distilled a complex set of emotions into something that rang true. Impressed by his willingness to explore the extremes of such a masculine set of characters. And how none of it collapses into a single dimension. Impressive and emotionally wrenching.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 9,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 9,
          periodicals_id: null,
          rating: 81,
          review_title: 'Living to its "Promise"',
          review_body: "The final third of the first season of DEBT COLLECTOR begins tying up the loose ends of family and obligation once our hero has dramatically escaped from the mob. And our Lirium is on his way toward being a bit of a badass now that he's properly scarred and motivated. I'm looking forward to see how this set of serials winds down from here.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 10,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 1,
          rating: 80,
          review_title: 'Hardly Slight',
          review_body: "If everything was as good as the first story in this collection this would be an easy 5-stars. There are a smattering of memorable stories here and there. And a bit of a dry essay at the end. But this one certainly delivers a fantastic opening. Honestly, that tale of an invented Mexican Edgar Allen Poe come to life is worth the entire issue.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 11,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 10,
          periodicals_id: null,
          rating: 64,
          review_title: 'Cracked Up',
          review_body: "This book starts with a crazy, corporate espionage featured a drugged up protagonist and spins rapidly out of control from there. While I enjoyed the ride a great deal for most of the book, there did come a point where the whole thing cracked. And then kept going. Wildly entertaining, but I was ready to jump off before the ending.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 12,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 2,
          rating: 83,
          review_title: 'Cracked Up',
          review_body: "\"Slightly\" spooky indeed. This collection treads lightly around the supernatural or at least finds justification for indulging in the presence of ghosts. Not every contribution is great, but the great ones make the full set worthwhile. Particularly strong stories included \"The Leaning Lincoln\" by Will Ludwigsen, \"Wretched the Romantic\" by Michael Libling and \"The Forgotten Taste of Honey\" by Alexander Jablokov. I've missed not reading more of Asimov's.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 13,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 11,
          periodicals_id: null,
          rating: 98,
          review_title: 'Blood. It\'s Not Just for Breakfast Anymore',
          review_body: "First we have the unsurprising facts: Dracula is a vampire. He is un-dead and the entire framework for how vampires operated was spawned by this work. It's a gothic horror tale rife with the flowery prose and slow-moving plot one associates with 19th Century literature.\n\n Then there are the surprising facts: this novel endures. I was held in its sway and thrilled by its quiet horror. Dracula's appearances in this story are spare and this is a far creepier tale for it. The restraint and quiet, thoughtful pace and dramatic over-telling heightened the dramatic flair. This was a better read than I had anticipated and proof that reading the classics is a rewarding endeavor. Highly recommended.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 14,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 3,
          rating: 90,
          review_title: 'Love and Heartbreak in Korea',
          review_body: "In reference to the November 2016 issue: \"The Quality of Your Life\" by Min Jin Lee.\n\n An excellent short story exploring the life of a young woman in Korea in 1932 under Japanese occupation. Well researched and filled with moments of both tenderness and hardness. This was an excellent selection.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 15,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 12,
          periodicals_id: null,
          rating: 58,
          review_title: 'The Hour of Pulp',
          review_body: "This is pulp. This is Conan accomplishing improbable feats that would make Hercules blush. This was 1934 and there was a need for unreflective, can-do anything heroes. We could use heroics in this age. Thankfully, there are no dragons in The Hour of the Dragon. But instead a surprising degree of political intrigue in a world more fully realized than Robert E. Howard received credit for. This one delivers its glorious battles and damsels in distress.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 16,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 13,
          periodicals_id: null,
          rating: 97,
          review_title: 'Child Thriller',
          review_body: "Things are very much not what they seem in this creepy book that twists and turns upon its own plot and leaves the reader guessing (often wrong) throughout. The characters are interesting and frequently defy conventions as they navigate unusual circumstances. Yet they remain grounded and believable as McPherson deftly increases the tension of both the murder mystery and the strained relationships between old classmates. This book deserves to be read.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 17,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 14,
          periodicals_id: null,
          rating: 94,
          review_title: 'Runaway Slaves in Modern Days',
          review_body: "I trust Ben H. Winters implicitly when it comes to telling this kind of story. He has a knack for thinking through all the ramifications of his speculative universe and weaving in just enough of the familiar to make the whole thing unsettling. The very notion that slavery would still be an enshrined, legal practice in the United States should be unsettling to any thinking person. Winters casts an unflinching eye at this evil.\n\nVictor, a.k.a. Brother, a.k.a any number of aliases is a tightly wound ball of contradictions of a main character. A former slave. A gifted slave tracker who captures runaways. An invisible anti-hero caught up in the slavery politics of the twenty-first century. A brilliant observer of racism that has been enshrined in the Constitution. He notices everything.\n\nAnd yet he is human and his arc bends toward doing the right thing even as everything devolves toward evil all around him. This is a compelling read and a wildly entertaining ride.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-31 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 18,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 15,
          periodicals_id: null,
          rating: 56,
          review_title: 'Noir in Sepiatones',
          review_body: 'There is a taut thriller lurking underneath the labored stories of coeds and hapless college presidents of Hollymount College circa 1940-something. The drama unfolds with an almost Hitchockian pacing and one could almost hear the Bernard Hermann soundtrack unfolding at each page turn. But like early Hitchcock, so much of the interactions between the sexes ring false. Or at least dated.\n\nAnd then there is the Freudian plot twist telegraphed from several miles away.\n\nThere is a great deal that works as a thriller even if so many of the details have grown grey. This has become more curiosity than escapist plot. Worth reading to understand how far crime fiction has come over the decades and generations.',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-04-17 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 19,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 16,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 20,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 17,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 21,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 18,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 22,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 19,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 23,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 20,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 24,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 21,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 25,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 4,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 26,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 22,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 27,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 5,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 28,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 23,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 29,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 6,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 30,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 24,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 31,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 25,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 32,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 26,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 33,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 27,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 34,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 28,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 35,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 29,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 36,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 30,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 37,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 7,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 38,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 31,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 39,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 32,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 40,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 33,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 41,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 34,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 42,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 8,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 43,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 35,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 44,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 36,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 45,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 37,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 46,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 38,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 47,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 39,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 48,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 40,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 49,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 41,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 50,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 42,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 51,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 43,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 52,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 44,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 53,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 45,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 54,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 46,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 55,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 47,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 56,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 48,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 57,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 49,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 58,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 50,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 59,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 51,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 60,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 52,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 61,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 53,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 62,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 54,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 63,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 55,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 64,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 56,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 65,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 57,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 66,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 58,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 67,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 59,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 68,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 60,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 69,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 61,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 70,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 62,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 71,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 63,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 72,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 64,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 73,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 65,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 74,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 66,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 75,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 67,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 76,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 68,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 77,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 69,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 78,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 70,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 79,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 71,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 80,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 72,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 81,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 73,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 82,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 74,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 83,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 75,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 84,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 76,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 85,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 77,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 86,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 78,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 87,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 79,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 88,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 80,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 89,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 81,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 90,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 82,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 91,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 83,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 92,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 84,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 93,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 85,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 94,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 86,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 95,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 87,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 96,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 88,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 97,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 89,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 98,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 90,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 99,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 91,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 100,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 92,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 101,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 93,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 102,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 94,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 103,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 95,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 104,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 96,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 105,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 97,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 106,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 98,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 107,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 99,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 108,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 100,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 109,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 10,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 110,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 11,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 111,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 101,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 112,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 102,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 113,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 103,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 114,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 104,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 115,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 105,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 116,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 106,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 117,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 107,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 118,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 108,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 119,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 109,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 120,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 110,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 121,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 111,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 122,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 112,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 123,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 113,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 124,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 114,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 125,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 115,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 126,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 116,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 127,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 117,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 128,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 118,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 129,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 119,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 130,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 120,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 131,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 121,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 132,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 122,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 133,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 123,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 134,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 124,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 135,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 125,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 136,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 126,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 137,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 127,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 138,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 128,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 139,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 129,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 140,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 130,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 141,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 131,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 142,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 132,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 143,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 133,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 144,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 134,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 145,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 135,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 146,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 136,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 147,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 137,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 148,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 138,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 149,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 139,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 150,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 140,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 151,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 141,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 152,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 142,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 153,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 143,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 154,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 144,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 155,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 145,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 156,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 146,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 157,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 147,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 158,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 148,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 159,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 149,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 160,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 150,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 161,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 151,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 162,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 152,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 163,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 153,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 164,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 154,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 165,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 155,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 166,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 156,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 167,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 157,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 168,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 158,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 169,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 159,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 170,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 160,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_book_reviews_id_seq', (SELECT MAX(id) FROM user_book_reviews));");
    });
};
