'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_reading_lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_reading_lists').insert({
          id: 1,
          user_id: 1,
          interrupt_enabled: true,
          current_position: 'backlog_physical_book_1',
          interrupt: null,
          female_author_selection_1: 79,
          crime_series_1: null,
          backlog_ebook_1: 83,
          science_fiction_series_1: null,
          free_selection_1: 90,
          crime_series_2: null,
          insert_1: 100,
          science_fiction_series_2: null,
          literary_journal_1: null,
          bizarro_fiction_1: 95,
          genre_journal_1: null,
          classic_1: 97,
          literary_journal_2: null,
          compendium_1: 99,
          prize_1: 123,
          male_author_selection_1: 170,
          crime_series_3: null,
          backlog_physical_book_1: 19,
          science_fiction_series_3: 20,
          free_selection_2: 21,
          crime_series_4: 22,
          insert_2: 23,
          science_fiction_series_4: 24,
          genre_journal_2: 25,
          non_fiction_1: 26,
          literary_journal_3: 27,
          anthology_1: 28,
          genre_journal_3: 29,
          roulette_1: 30,
          prize_2: 31,
          graphic_novel_1: 32,
          female_author_selection_2: 33,
          crime_series_5: 34,
          backlog_ebook_2: 35,
          science_fiction_series_5: 36,
          literary_journal_4: 37,
          free_selection_3: 38,
          crime_series_6: 39,
          insert_3: 40,
          science_fiction_series_6: 41,
          genre_journal_4: 42,
          roulette_2: 43,
          literary_journal_5: 109,
          occult_reading_1: 44,
          genre_journal_5: 171,
          bizarro_fiction_2: 45,
          prize_3: 46,
          male_author_selection_2: 47,
          crime_series_7: 48,
          backlog_physical_book_2: 49,
          science_fiction_series_7: 50,
          literary_journal_6: 110,
          free_selection_4: 51,
          crime_series_8: 52,
          insert_4: 53,
          science_fiction_series_8: 54,
          genre_journal_6: null,
          classic_2: 55,
          literary_journal_7: null,
          compendium_2: 56,
          genre_journal_7: null,
          non_fiction_2: 57,
          prize_4: 58,
          graphic_novel_2: 59,
          contemporary_pulp_1: 60,
          vintage_pulp_1: 61,
          contemporary_pulp_2: 62,
          vintage_pulp_2: 63,
          prize_5: 64,
          female_author_selection_3: 65,
          crime_series_9: 66,
          backlog_ebook_3: 67,
          science_fiction_series_9: 68,
          free_selection_5: 69,
          crime_series_10: 70,
          insert_5: 71,
          science_fiction_series_10: 72,
          literary_journal_8: null,
          anthology_2: 73,
          genre_journal_8: null,
          roulette_3: 74,
          literary_journal_9: null,
          roulette_4: 75,
          prize_6: 76,
          male_author_selection_3: 101,
          crime_series_11: 80,
          backlog_physical_book_3: 103,
          science_fiction_series_11: 84,
          free_selection_6: 87,
          crime_series_12: 81,
          insert_6: 91,
          science_fiction_series_12: 85,
          genre_journal_9: null,
          occult_reading_2: 113,
          literary_journal_10: null,
          bizarro_fiction_3: 94,
          genre_journal_10: null,
          classic_3: 96,
          prize_7: 119,
          graphic_novel_3: 111,
          female_author_selection_4: 78,
          crime_series_13: null,
          backlog_ebook_4: 82,
          science_fiction_series_13: 86,
          literary_journal_11: null,
          free_selection_7: 88,
          crime_series_14: null,
          insert_7: 92,
          science_fiction_series_14: null,
          genre_journal_11: null,
          compendium_3: 98,
          literary_journal_12: null,
          non_fiction_3: 105,
          genre_journal_12: null,
          anthology_3: 106,
          prize_8: 120,
          male_author_selection_4: 102,
          crime_series_15: null,
          backlog_physical_book_4: 104,
          science_fiction_series_15: null,
          literary_journal_13: null,
          free_selection_8: 89,
          crime_series_16: null,
          insert_8: 93,
          science_fiction_series_16: null,
          genre_journal_13: null,
          roulette_5: 107,
          literary_journal_14: null,
          roulette_6: 108,
          genre_journal_14: null,
          occult_reading_3: 114,
          prize_9: 121,
          graphic_novel_4: 112,
          contemporary_pulp_3: 115,
          vintage_pulp_3: 117,
          contemporary_pulp_4: 116,
          vintage_pulp_4: 118,
          prize_10: 122,
          completed_readings: { "0": 1, "1": 2, "2": 3, "3": 4, "4": 5, "5": 6, "6": 7, "7": 8, "8": 9, "9": 10, "10": 11, "11": 12, "12": 13, "13": 14, "14": 15, "15": 16, "16": 17, "17": 18 },
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_reading_lists_id_seq', (SELECT MAX(id) FROM user_reading_lists));");
    });
};
