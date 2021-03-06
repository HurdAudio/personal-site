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
          rating: 89,
          review_title: "Rain, Swimming and High School",
          review_body: "This is a remarkably honest and sensitive book. A coming of age story set in Portland, Oregon during the early '90s that rings true. An account of navigating one's emerging sexuality in the midst of rain, swimming and high school. The characters bristle with warmth of authenticity. The waves of details surrounding the music of REM, My Bloody Valentine and Sonic Youth ring particularly true. \n\nThe faltering confidence rendered in the voice of Julie Winter and her standoffish family threading a paper thin presence in her life. The friendships that veer from boy drama to painting nails. The questions surrounding why her brother is living in self-imposed exile in Berlin. All makes for a wonderful tension coursing throughout this novel.",
          created_at: new Date('2017-03-14T14:55:16.000Z'),
          updated_at: new Date('2017-04-25T18:05:48.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 20,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 17,
          periodicals_id: null,
          rating: 76,
          review_title: "Brash and Ruthless",
          review_body: "This episode is the set-up for the final installment of the first season. The characters and conflicts are now in place for the explosive finale. But the setup is not without satisfying bits of character development and violence of its own. Debts promise to be settled ruthlessly going forward.",
          created_at: new Date('2017-04-26T10:40:06.000Z'),
          updated_at: new Date('2017-04-26T10:40:06.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 21,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 18,
          periodicals_id: null,
          rating: 91,
          review_title: "Grey Moral Choices",
          review_body: "Two storylines that barely intersect in a meditation on moral choices and how they can transform a life. A drone pilot and a Wall Street quant with only the thinnest connection binding them together as they come to terms with the evils of their respective roles. There is no singular moment of revelation, no heavy-handed preaching as Childress gives a disciplined account of accounting. Deftly exploring issues with no easy answers by offering no easy answers.\n\nThe ending - and the novel as a whole - steers clear of climactic confrontation. Which gives the whole read a fantastic consistency at the expense of dramatic release. And with even minor characters having realistic motivations and storylines this is not a novel that wraps up all its loose ends. \n\nBut it is a novel with something to say and a remarkably grounded sense of time and place. The characters and situations are compelling and their dilemmas are nuanced. This novel thrives in its subtle moments, plot twists and unspoken tensions. AND WEST IS WEST leaves a considerable wake behind its concluding pages that keep the reader thinking about these characters.",
          created_at: new Date('2017-05-08T07:09:57.000Z'),
          updated_at: new Date('2017-05-08T07:09:57.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 22,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 19,
          periodicals_id: null,
          rating: 93,
          review_title: "The Unravelling of a Killer",
          review_body: "IN A LONELY PLACE is a classic. A sheen of tension and anxiety as we see things exclusively through the eyes of a serial killer. A returned veteran from the second world war with a habit for strangling women. He looks up a colleague from the front lines who happens to be a detective investigating the his murders around Los Angeles. And then our protagonist falls in love with a femme fatale.\n\nOne of the remarkable things about this novel is the complete absence of description of his criminal deeds. There's the intense buildup leading to the victim and then we learn about the rest from the morning paper the next day or a casual conversation with our detective friend. The complete lack of present-tense gore gives the entire book a rich darkness and tension that compels the reader to keep turning pages.\n\nThe other thing that makes this novel stand out is the sense of time and place. The street geography of southern California shimmers with vivid authenticity that matches the interactions between these characters. The tension between the hunter and the hunted is rendered with exquisite restraint. This is great noir writing.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-05-13T08:36:11.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 23,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 20,
          periodicals_id: null,
          rating: 50,
          review_title: "Choose Your Own Bourgeoisie Adventure",
          review_body: "There are some good points in this \"craft of writing a best selling novel.\" And some dated points (this book is from 1994). Publishing has gone few some changes in the now-you-can-google-all-the-things world. \n\nAnd there were disappointments. Such as the maddening (and probably not untrue) truths about who buys best sellers. People with enough disposable income to buy hardcovers are apparently 1% of the population. And they prefer to read about rich people. They don't like the poors. Or at least not books about them. They steer away from period works. And hate coming-of-age-novels. All in all, they sound like the petty bourgeoisie to me. Making sympathetic protagonists out of rich people is how we end up with too much Batman and I can't say I want to cater to that crowd.  It's enough to send my sympathies over to the self-published writers carving out their own space without the trappings o agents and publishers.\n\nSome interesting points to chew on with the process of outlining a novel and then teasing out the best dramatic pacing from it. And several good points on how to sustain momentum in a story. If you're thinking of writing with the ambition of writing a \"best seller,\" this book might be worth a look. But if you're a fan of the pure craft of writing a story this one runs a little light on inspiration.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-05-15T23:23:36.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 24,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 21,
          periodicals_id: null,
          rating: 82,
          review_title: "Urban Fantasy with a Bow on Top",
          review_body: "Thus concludes the first season of the Debt Collector serial. It wraps things up. With haste. Sex. Violence. A whiff of a larger conspiracy. Tragedy. Redemption. Mom's life in the balance. All in under 60,000 words.\n\nWhile the wrap up felt a little tidy and contrived. I was happy enough to go along for the ride nonetheless.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-05-16T21:19:18.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 25,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 4,
          rating: 75,
          review_title: "Colonial Tweakers",
          review_body: "This issue is front loaded with all the best stories appearing at the start. Which is good, since they are also the longest selections in the collection. \n\nWhich means that the novella: \"Where There is Nothing, There is God\" by David Erik Nelson is the premium offering in this set. The premise is a blast: a time travel tale about meth dealers selling to a village in Colonial Massachusetts in exchange for Paul Revere spoons. Humor, intrigue and a good cast of characters. A strong story that makes the whole worth reading.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-05-20T18:45:18.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 26,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 22,
          periodicals_id: null,
          rating: 62,
          review_title: "You'll Never Guess What Happens Next...",
          review_body: "THE STORY GRID offers up the perspective of the editor and how to become one's own editor. And on that front it succeeds in offering a quantifiable method for working out the kinks and plods of writing a novel. But it also delivers a large dose of marketing speak. It even chokes on its click-bait-like promises of \"it took me 22-years to develop this system\" and \"wait until you see the story grid for SILENCE OF THE LAMBS.\" \n\nWhen he does get past fluffing the method, Shawn Coyne does offer plenty of lucid insights into the publishing business in particular and solid ideas about what makes genres and works within those genres catch a reader's attention. His thoughtful reflection on his experience as an editor inside the business makes up the most compelling material in this book. And he is clear that the grid methodology is not a formula. One cannot use it to generate a best seller. But one can use it to identify flaws with pacing and scene construction. \n\nThis is one to read if you want to dispel the illusion of a master novel being spun out whole from a fevered period of inspiration. Editing plays a huge role in the words that reach us from the page and this book opens up how deep and deliberate the role of editing can become.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-05-28T18:39:24.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 27,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 5,
          rating: 99,
          review_title: "Watch for Bears",
          review_body: "Issue #223: \"In the Neighborhood\" by Jess Rafalko. \n\nPitch perfect on multiple levels. Jess Rafalko tunes the inner strains of grief within a marriage in the aftermath of loss and complete transition into a brief polyphonic burst of emotion and convergence. The pain and reverberation are almost too real.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-05-29T06:08:54.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 28,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 23,
          periodicals_id: null,
          rating: 90,
          review_title: "Tropical Vampires",
          review_body: "It's not surprising to find a collection of long listed Hugo nominees would make for a strong collection of science fiction stories. But there honestly isn't a bad - or even mediocre - selection in this bunch. The most striking thing (aside from the polished, often Iowa MFA-fueled prose) is the variety represented in this collection. Taken as a whole, these stories cover a range of diverse characters and experiences along with science fiction that spans from the subtle to the fantastic. Within these tales lurks writing that confronts sexual identity, grief from profound personal loss, zombies dancing the ballet, vampires in Hawaii and cybernetically enhanced hard-boiled detectives. This is several shades of entertaining, challenging and human.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-06T22:24:32.000')
        }),
        knex('user_book_reviews').insert({
          id: 29,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 6,
          rating: 59,
          review_title: "Asimov's Goes Back to the Future",
          review_body: "Asimov's Science Fiction is observing their 40th year of publication and they've started the celebration with new works by authors frequently published in their pages over the years. And the result is uneven. The space opera depicted primarily through endless dialog was difficult to engage with. But the tale of hunting and tagging an endangered and deadly species of bird on the planet Coyote was a blissfully energetic read. At times it was pleasant to read the \"traditional\" story values of Asimov's being represented and sometimes they came off as a bit dated in style and substance. Still more good to balance out the bad. But an unusually high number of duds from a normally consistent publication.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-11T16:44:30.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 30,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 24,
          periodicals_id: null,
          rating: 80,
          review_title: "Gray Scale",
          review_body: "A brief, solar interlude originally published in 1953 under the name of Andrew North. Andre Norton quickly spins up a solar system of hard-drinking pilots and schemers and then shows us how a grey cat named Bat helps score a big haul. Charming and expertly told.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-11T17:25:37.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 31,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 25,
          periodicals_id: null,
          rating: 86,
          review_title: "Fugitive Wake",
          review_body: "Laura Lippman is an expert at shaping scenes around a balance of what is depicted and what is left off stage. It's a sophisticated writing style that gives her characters and Baltimore setting a healthy set of shadows and light. I will definitely be reading more of her novels.\n\nAFTER I'M GONE is a crime story about what happens when the family patriarch evades custody and leaves behind a wife, daughters and a girlfriend. But this is not the crime. We also have a murder and a semi-retired detective who works cold cases. It's a fascinating set of characters and circumstances rendered with incredible style and craft. The economy of scenes and steady development is a subtle thrill. And this novel does not fall short when it comes time to deliver its resolution.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-21 17:20:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 32,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 26,
          periodicals_id: null,
          rating: 89,
          review_title: "Shame Them - Maim Them - Try to Contain Them - She's Gonna Blow!",
          review_body: "Satire served strong. And angry. Take the current state of advertising with images that inspire anorexic behaviors, build a dystopian society around it and populate a planet for non-conformist exiles. Oh, and a heavy dose of intersectional feminist theory.\n\nNot the lightest hearted graphic novel, BITCH PLANET spares nothing as it dismantles the patriarchy. Which is not to say it's devoid of humor. This is uncomfortable, brutal satire. Issue 3's focus on the secret origins of Penny Rolle is an absolute triumph of story-telling and character development. And many of the actions depicted in the background of these frames are hilarious (in a dark, violent way). \"Caged and Enraged\" and well executed scream that threatens to veer well off the track into preachy territory before it lands several well-placed punches.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-22 13:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 33,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 27,
          periodicals_id: null,
          rating: 94,
          review_title: "Golden Plates for the Cosmos",
          review_body: "The thematic elements tie this book together - children without their mothers, mothers without their children, cult leaders without their faith, meteorites, messages sent into space and talking with the dead. Mingling within these themes is a cast of deeply likable, deeply flawed characters struggling to find their way through a life of missing mothers and damaged faith. Then there are the converging story lines separated by time punctuated by a plot twist. MR. SPLITFOOT is an engaging, satisfying read with a strong sense of an upstate New York populated by conmen and cult leaders (almost always one and the same). Highly recommended.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-07-06 18:24:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 34,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 28,
          periodicals_id: null,
          rating: 75,
          review_title: 'Crime On the Homefront',
          review_body: 'Lucia is a devoted mother and wife tending to her extended family while her husband serves over seas in the Pacific theater. A life of victory gardens, letters from the front, rationing and steering her daughter from consorting with the wrong kind of suitors. So when she also needs to get rid of a dead body or two and fend off a blackmailer it\'s all just part of her domestic chores. A somewhat addled and naive protagonist, she is also a sympathetic and reliable narrator. The tension stemming from the lengths she will go to to protect herself and her family\'s good name reads right along. For all the actions she must take to hide the truth, somehow justice gets served.',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-07-21T08:59:20.000Z')
        }),
        knex('user_book_reviews').insert({
          id: 35,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 29,
          periodicals_id: null,
          rating: 84,
          review_title: 'Man: 0, Nature: 1',
          review_body: 'Diane Cook mines a creepy, often Grimm edge in these stories. Normal suburban settings where housewives accept that their first one, two, or more children will be taken away by a persistent stranger. Widows sent to spousal re-assignment clinics. Ten year old children sent to the incinerator if they are deemed "not needed." Children who play games where the loser gets eaten.\n\nWhile Cook has a flair for the mystical and fabulous, it\'s the more realistic stories of failed survivalists trapped on a raft in the Great Lakes or a sexual obsession with the local meteorologist that shine brightest in this collection. The overall mix of stories keeps the reader on edge, never knowing when something completely unexpected will come barreling down the pages.\n\nA polished and deliciously unsettling read.',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-07-25 16:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 36,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 30,
          periodicals_id: null,
          rating: 88,
          review_title: 'Meet Wraith',
          review_body: 'Season two opens up with a new character: Wraith. A rogue debt collector and daughter of a famous and recently murdered anti-debt collector crusader. She specializes in vigilante collections upon the rich who prey upon the life force of the poor. But she is also an addict and struggling to hold together the responsibility of the research empire her father left behind to her. She is a wreck. A conflicted character stepping into a large world she knows little about. That\'s a promising opening episode.',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-07-27 08:19:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 37,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 7,
          rating: 99,
          review_title: 'Awesome Suspense',
          review_body: 'What an amazing mix of suspense and literary voice. "Optimistic People" is a story that works from a premise of "what would happen if we found someone buried alive?" and crosses it with "what would be a terrible first date for high schoolers?" and then blends these flavors with nuanced, sympathetic characters. The use of backstory is just enough to pull the reader into these young lives. At the same time, the restrained use of backstory is just enough to render a fresh, new kind of villain. This was a wonderful read.',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-07-27 22:01:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 38,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 31,
          periodicals_id: null,
          rating: 99,
          review_title: 'Bravo for the Falcon',
          review_body: 'Rarely can a novel be called "operatic" in such a literal sense. The scope of this story is breathtaking in its tragedy and intertwined stories of passion, redemption and narrative excess. While this would be an exceptional read on its merits alone, it manages to soar even higher as it draws toward its conclusion. Beautifully rendered and breathlessly executed. This is a drama that manages to weave many competing themes into a comprehensive whole.',
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-09-02 14:38:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 39,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 32,
          rating: 94,
          review_title: "Brilliant Misdirection",
          review_body: "Tana French makes writing dark police procedurals with plot twists look easy. And yet it's only after the final page that the full structure and blistering character arcs become clear. In the case of THE TRESPASSER we're led to believe - along with our protagonist - that this is a murder case with overtones of corruption and/or organized crime involvement. But the reality is that several pieces are carefully being set up for two fantastic interview sequences at the tail end of this novel. Each of the five stars were earned on the strength and unexpected satisfaction of those two scenes. Few writers would have crossed that finish line with the dark tone still intact. This one was a great thrill ride.",
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-11-05 14:49:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 40,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 33,
          rating: 86,
          review_title: "Steampunk Mormons",
          review_body: "I give D.J. Butler full credit for fearlessly providing much of his own onomatopoeia sound effects. The steam powered contraptions and devices usher in a colorful world of sounds consistently rendered throughout this novel.\n\nThe description of the plot for CITY OF THE SAINTS sounds completely bonkers. You've got Mark Twain as an agent of the United States (under his birth name, Sam Clemens). Edgar Allen Poe is an agent for the soon-to-be seceding Southern States. The prophet and leader of the Kingdom of Deseret Brigham Young and the amazing flying machines of Orson Pratt. And a full cast of historical figures in a truly off-the-wall alternate history where steam powered trucks cross the plains like cruise ships. Or at least cruise ships with the added excitement of Shoshone attacks. Each character takes on their own story arc as competing interests try to enlist the Mormons and their advanced technology in the coming war.\n\nThe reality is that this plot is only crazy on the surface. Underneath we have an ensemble cast of characters that the reader can readily identify with. And there are plenty of complicated action sequences rendered with real skill. A brilliantly entertaining read with a high density of cultural and historical references deliberately mangled.",
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-11-25 21:25:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 41,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 34,
          periodicals_id: null,
          rating: 80,
          review_title: 'Spectre in the Boardroom',
          review_body: "The boardroom scene in this serial is enormously satisfying. A confrontation that establishes our new protagonist as anything other than a push-over. Our overall story arc escalates nicely from there. This grim world continues to grind out some confrontations even as we catch a wisp of super-hero trappings in the wings.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-11-26 12:24:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 42,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 8,
          rating: 61,
          review_title: 'Artificial Intelligence is Confounding',
          review_body: "While I would stop short of saying I was disappointed with this issue, I did find the quality of stories in this particular collection to be uneven. The stories that did grab my imagination are not likely to let go anytime soon while the ones that didn't will roll off like water along a pane of glass. \n\nWill McIntosh's \"Soulmates.com\" was the surprise of this set with a story that thrived upon a premise felt thin at first glance. At the other end of the spectrum was the brilliantly written \"Kitty Hawk\" by Alan Smale. A story that I struggled with despite the exceptional skill and good intentions of its author. Two experiences that lead me to rethink how short stories work.",
          created_at: new Date('2017-12-03 22:00:16 UTC'),
          updated_at: new Date('2017-12-03 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 43,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 35,
          periodicals_id: null,
          rating: 98,
          review_title: 'The Ballad of Gallant Ash',
          review_body: "This novel works on many different levels with barely a hot breath rippling across its quiet, thoughtful pages. The horrors of war and the human stories that unravel from the battlefield are given the steady narrative voice of Gallant Ash - a female soldier fighting for the Union disguised as a man. As a soldier she is tough as nails and every bit as vulnerable as anyone else under fire. Her harrowing journey into and out of the South takes several unexpected turns that reveal more layers of a nation turned in on itself. This is measured prose that delivers scenes of devastating violence in a whisper.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-012-23 19:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 44,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 36,
          rating: 35,
          review_title: 'Filtered, Condensed and Rendered "Exotic"',
          review_body: "This collection of Chinese Fairy Tales - compiled by Richard Wilhelm in 1914 and later translated from German by Frederick H. Martens - is diluted and refracted through a number of cultural prisms (and years). There is an academic rigor to each of these story with brief notes about the origin following each. But they read like a series of summaries of much better stories. Precious little story-telling verve or style survives these translations as the accounts wash over one another in a forgettable mash-up of detail-free stories with morals. The wealth of materials in this book deserves a better telling.",
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2018-05-12 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 45,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 37,
          rating: 85,
          review_title: "Watch Out, They'll Eat You Up",
          review_body: "Imagine an old Western tale with bits of Sharknado and cannibalism mixed in to balance out its humor and incest and you have this wildly amusing thrill-ride that can't contain itself behind the fourth wall. Once our cast of characters is set in place the rains come and deliver a smart dose of motherfucking sharks eating up all the villagers. And by \"smart dose\" I mean you won't come away disappointed. Pack your harpoon and watch for the armless child when you crack this one open.",
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
          rating: 97,
          review_title: "Time After Time",
          review_body: "How does one engage an adversary who is reborn to relive their years with their memory of the years already lived intact? In a heated battle that plays out over repeated lives throughout the 20th Century our protagonist and antagonist fight over the threads that hold this universe together. It is a conflict that is not resolved through death, but through altering the circumstances of birth. \n\nFull credit to Claire North (a.k.a. Catherine Webb) for deeply thinking through the consequences of re-living the same years over and over. And then fashioning this thrill-ride that spans the entire globe over a period of wars and upheavals. For writing in a consistent life origin story that stands up to viewings at multiple angles. For casting time travel that follows a credible logic and underpins an excellent read.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 47,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 39,
          periodicals_id: null,
          rating: 93,
          review_title: "Sex, Violence and Furniture Restoration",
          review_body: "Kem Nunn has a peculiar knack for writing violence that leans heavily on restraint to draw out both the conflict and the resolution. In the case of Chance, he does this through a vivid cast of characters and an unlikely friendship between a middle-aged psychiatrist on a downward spiral and a furniture forger with a mysterious past. What beings as a passable, literary tale of a doctor having an affair with one of his patients then explodes into an excellent thriller with plenty of unexpected detours and plot twists.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 48,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 40,
          periodicals_id: null,
          rating: 77,
          review_title: "Unseemly Events in Room 809",
          review_body: "Gazing back from the fog of decades, this thriller speaks of a darkness spoken with bare outlines. Of unrealized sexual trysts filtered through the mores of dual single beds and a code of not depicting anything more racy than a stolen kiss. And yet this plunges into a darkness that revolves around the skillfully set characters and the fate of a nine year old girl in the next room. Once the overly chatty characters (both internally and externally) are established, this story races toward an ending of white knuckles and intrigue.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 49,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 41,
          periodicals_id: null,
          rating: 96,
          review_title: "Burns Brighter",
          review_body: "A coming of age novel wrapped in a family drama rendered in a vivid, hot summer in 2003 Brooklyn. Bright Lines weaves together the lives and generations of an Islamic, Bangladeshi family holding together secrets that unfold as each exquisite story arc comes crashing against waves of tragedy and triumph. These characters are so vivid. Their very scent and breath linger just past the pages. Their desires and longings are particularly poignant and handled with a matter-of-fact frankness that belies years of polished prose and honest writing.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 50,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 42,
          periodicals_id: null,
          rating: 60,
          review_title: "Slinking Toward Evil",
          review_body: "Coercion is the ongoing theme of this admittedly trashy, written for the small screen, episode. Sexual tension is included in every scene and kissing happens with all the complications they bring as our hero engages in stealing life energy from the poor and paying out to the rich and connected.",
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
          rating: 88,
          review_title: "Keeping It Eloquent",
          review_body: "This book occupies an interesting niche for technical books on javascript. It is written for the programmer with a familiarity with the language who is not yet an expert. So it should prove disappointing for beginners and power users.\n\nAt the same time, it is written in a style that is uncompromising, opinionated and somehow conversational. I liked it.\n\nOne of the early examples involved were-squirrels. As in using data-types to determine the cause and effect of a human transforming into a squirrel. This is the kind of data play I could get used to.\n\nAll in all, ELOQUENT JAVASCRIPT manages to touch upon several important areas without falling too deep into all the potential tangents. It brought just enough understanding about SVG versus Canvas implementation to point toward where to pursue this further. It does the same with setting up a simple server and understanding NodeJS. Introducing new ideas while staying within the scope of this hefty book is what it does well.",
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-05-29 14:55:18 UTC')
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
          rating: 63,
          review_title: 'Not Exactly a Knockout',
          review_body: "This story was a struggle. Both in the oral history format - it reads like a documentary film composed of rapid transitions between speakers - and the subject material. Boxing is a tough sport to connect with for this reader. The story wasn't bad. The cast of characters and the sense of place was solid. But the whole thing had a veneer of unbelievability that was difficult to pierce.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-12-24 15:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 110,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 11,
          rating: 99,
          review_title: "Burn, Baby, Burn",
          review_body: "An excellent, multi-narrator account of a massive fire that takes out an entire mining town in North Dakota. Rendered in lyrical prose as it hops from one perspective to another. What elevated this story for me was the unexpected ending that summarized the humanity of those who lost their fight against overwhelming destruction.",
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
          rating: 93,
          review_title: "Javascript as Poetry",
          review_body: "This is what happens when a love for language in its most literary sense spills over into programming syntax. And the the oddities of Javascript lends itself well to these algorithmic flights of fancy. Angus Croll's passion for reading and Javascript are hard to miss. The illustrations are brilliant and the material providing background on each writer (Ernest Hemingway, David Foster Wallace, Jane Austin, Lewis Carroll, Tupac, etc.) is fantastic. I wanted to understand more about higher order functions and Sylvia Plath. This book targets an admittedly narrow audience, but it sure nails its target.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-22 12:31:18 UTC')
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
        }),
        knex('user_book_reviews').insert({
          id: 171,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 14,
          rating: 84,
          review_title: "Close to the Bulls Eye",
          review_body: "The reliable Asimov's Science Fiction delivers another reliable installment of compelling fiction. Kristine Kathryn Rusch's novella \"The Runabout\" is the most compelling in this collection - and the longest. The shorter stories offering compelling thought experiments and a so-so alternative history of Charles Manson as a disco king.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 172,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 161,
          periodicals_id: null,
          rating: 84,
          review_title: "More Than White Hat Tricks",
          review_body: "HTML5 HACKS pleasantly exceeded my expectations. I hoped to find some interesting quirks and \"tricks\" buried within the HTML5 standard - and those are certainly part of the HTML5 HACKS experience - and was floored by the depth of material here as it progressed into server-based hacks using various Node.js libraries. This delivered much more than it promises and that is rare.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-06-21 14:34:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 173,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 162,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 174,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 163,
          periodicals_id: null,
          rating: 81,
          review_title: "Up Up and Away",
          review_body: "UP & GOING is largely a preface for the five volumes that follow. Which is actually a fine way to dip one's toe into learning all the idiosyncratic parts of the Javascript language. It manages to make the argument both for understanding all the parts of the language and its design patterns as well as convince this reader to read the next installment.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 175,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 164,
          periodicals_id: null,
          rating: 39,
          review_title: 'Standard Operating Hacks',
          review_body: "I'm not sure when doing standard operations became \"hacking.\" But I guess \"SQL Standard Operations\" wasn't as catchy a title.\n\nThe primary value of this book was seeing how to do the same operations in SQL, MySQL, Access, Oracle and PostgreSQL. That drove home some database concepts for me. There were some sections on security that touched gingerly on how SQL databases can be broken into and otherwise abused and I think that material could have been more aggressive.  But for the most part this was pretty dry stuff. Lots of invoice management and other business applications that are probably better explained in the standard documentation.\n\nI had hoped that this volume would have offered more \"hacks\" as I understand them.",
          created_at: new Date('2017-08-06 14:55:16 UTC'),
          updated_at: new Date('2017-08-06 21:47:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 176,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 165,
          periodicals_id: null,
          rating: 87,
          review_title: 'Objectify My Code',
          review_body: "A clear - if not overly descriptive - account of object-oriented principles as they would be realized in javascript. It doesn't dwell on the advantages of encapsulating data, but rather the nuts and bolts of how one goes about doing it. The advantages become clearer with each chapter. It also clarified a number of design patterns that one encounters in web development. \n\nThe next step will be to apply these principles to my next project...",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 177,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 166,
          rating: 89,
          review_title: '',
          review_body: "To be honest, the subversive programmer in me was keenly interested in the \"bad parts\" expanded upon in the appendices. For the most part, the \"good parts\" reaffirmed my own better habits - minimize use of global variables, understand scoping, maintain clarity and awareness of variable type coercion and so forth. Most of the bad practices are blatantly bad. The security risk of employing \"eval\" and how for-in loops can pass in methods from the prototype chain along with the rest of an object's set. As a technical read, it confirms my own conclusions about javascript as a language. But it's a well written confirmation and readable throughout.",
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-12-24 19:23:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 178,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 167,
          rating: 79,
          review_title: 'So Good... I Couldn\'t Clos(ur)e It',
          review_body: "I've puzzled through enough JavaScript to develop an intuitive sense of scope and closure. But the temptation is to never give it much thought in the name of churning out code that works. The reality is that \"What is Closure?\" is an incredibly common interview question for almost any tech screen and it pays to develop a vocabulary for discussing it.\n\nThe additional study of how to leverage an understanding of closure in one's code is invaluable. And clearly about to lead into a long discussion of \"this\" in the next volume.",
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2018-05-13 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 179,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 168,
          rating: 14,
          review_title: 'Dated Look at Baseball Nerding',
          review_body: 'A dated look at how to do basic data analysis and database queries. The tools outlined in this book are largely obsolete and the availability of free statistical datasets and APIs are much broader today than at the time this book was written. Also, much of the "advanced" sabermetric stats is a little basic. My main takeaway was being glad I don\'t interact with Microsoft Access on a daily basis or need it to do my own work.',
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 180,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 169,
          periodicals_id: null,
          rating: 78,
          review_title: "Stylin'",
          review_body: "A bit dated at this point, but still filled with valuable details about CSS that help fill out my understanding. The history of CSS features being adopted between CSS2.1 to CSS3 is an interesting story in and of itself though I recommend skipping all the very dated material about which features are or are not supported by various browsers. Just assume that IE and Safari are useless and move on with your life.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 181,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 170,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 182,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 171,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 183,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 172,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 184,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 173,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 185,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 174,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 186,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 175,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 187,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 176,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 188,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 177,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 189,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 178,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 190,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 179,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 191,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 180,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 192,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 181,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 193,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 182,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 194,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 183,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 195,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 184,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 196,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 15,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 197,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 185,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 198,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 186,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 199,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 187,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 200,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 188,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 201,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 189,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 202,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 16,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 203,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 190,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 204,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 191,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 205,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 192,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 206,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 193,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 207,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 194,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 208,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 195,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 209,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 196,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 210,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 197,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 211,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 17,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 212,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 198,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 213,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 199,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 214,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 200,
          periodicals_id: null,
          rating: 41,
          review_title: "Betrayed",
          review_body: "This novel had so many things going for it. The interlacing of short story fragments written by its namesake worked when they could have easily turned awkward. The middle section that takes a dark turn into the mind of the son and offers a fascinating study of how one wrestles with self-doubt and betrayal. \n\nBut then the whole thing crashed and burned in the third act. Our increasingly self-centered and unlikeable main character sends herself to India to find spiritual harmony and \"resurrection\" with enormous helpings of unnecessary detail. The final hundred pages turn into a slog as redemption plays no role in this spiritual awakening. Nor does meaningful interaction with Indian culture as we Eat Pray Love with other privileged white women making their respective pilgrimages to the base of the Himalayas. The efforts of a wayward son to undo his crimes fall flat as the entire novel collapses under the weight of unrealized potential. A disappointing conclusion to an otherwise deft exploration of themes surrounding betrayal and creativity.",
          created_at: new Date('2017-07-13 14:55:16 UTC'),
          updated_at: new Date('2017-07-14 11:57:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 215,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 18,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 216,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 19,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 217,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 20,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 218,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 21,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 219,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 22,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 220,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 23,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 221,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 24,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 222,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 201,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 223,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 202,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 224,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 203,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 225,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 25,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 226,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 204,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 227,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 205,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 228,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 206,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 229,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 207,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 230,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 208,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 231,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 209,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 232,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 210,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 233,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 211,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 234,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 212,
          periodicals_id: null,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 235,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 26,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 236,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 27,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 237,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 213,
          periodicals_id: null,
          rating: 79,
          review_title: "How High is the Water, Mama?",
          review_body: "A subtle crescendo of scientists and Capital Hill staffers caught up in the details of their personal lives just as the early effects of sudden climate change begin to take shape. While the clear nod to the large forces colliding between nature and power offers a meditation on the near futility of affecting meaningful change it occasionally flirts with an almost soapy account of the mundane aspects of people's lives. But this washes away quickly as things come to a head in the final pages. In the end, the gap between good intentions and what is possible is as startling as the rapidly rising waterline in the nation's capital.",
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 238,
          user_id: 1,
          periodical_or_book: 'periodical',
          books_id: null,
          periodicals_id: 28,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('user_book_reviews').insert({
          id: 239,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 214,
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
