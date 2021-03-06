'use strict';

const express = require('express');
const knex = require('../../knex');
const Cookies = require('cookies');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('user_reading_lists')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('user_reading_lists')
    .select()
    .where('id', req.params.id)
    .first()
    .then((review) => {
      if (!review) {
        return next();
      }

      res.send(review);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  knex('user_reading_lists')
  .insert({
    user_id: req.body.user_id,
    interrupt_enabled: req.body.interrupt_enabled,
    current_position: req.body.current_position,
    interrupt: req.body.interrupt,
    female_author_selection_1: req.body.female_author_selection_1,
    crime_series_1: req.body.crime_series_1,
    backlog_ebook_1: req.body.backlog_ebook_1,
    science_fiction_series_1: req.body.science_fiction_series_1,
    free_selection_1: req.body.free_selection_1,
    crime_series_2: req.body.crime_series_2,
    insert_1: req.body.insert_1,
    science_fiction_series_2: req.body.science_fiction_series_2,
    literary_journal_1: req.body.literary_journal_1,
    bizarro_fiction_1: req.body.bizarro_fiction_1,
    genre_journal_1: req.body.genre_journal_1,
    classic_1: req.body.classic_1,
    literary_journal_2: req.body.literary_journal_2,
    compendium_1: req.body.compendium_1,
    prize_1: req.body.prize_1,
    male_author_selection_1: req.body.male_author_selection_1,
    crime_series_3: req.body.crime_series_3,
    backlog_physical_book_1: req.body.backlog_physical_book_1,
    science_fiction_series_3: req.body.science_fiction_series_3,
    free_selection_2: req.body.free_selection_2,
    crime_series_4: req.body.crime_series_4,
    insert_2: req.body.insert_2,
    science_fiction_series_4: req.body.science_fiction_series_4,
    genre_journal_2: req.body.genre_journal_2,
    non_fiction_1: req.body.non_fiction_1,
    literary_journal_3: req.body.literary_journal_3,
    anthology_1: req.body.anthology_1,
    genre_journal_3: req.body.genre_journal_3,
    roulette_1: req.body.roulette_1,
    prize_2: req.body.prize_2,
    graphic_novel_1: req.body.graphic_novel_1,
    female_author_selection_2: req.body.female_author_selection_2,
    crime_series_5: req.body.crime_series_5,
    backlog_ebook_2: req.body.backlog_ebook_2,
    science_fiction_series_5: req.body.science_fiction_series_5,
    literary_journal_4: req.body.literary_journal_4,
    free_selection_3: req.body.free_selection_3,
    crime_series_6: req.body.crime_series_6,
    insert_3: req.body.insert_3,
    science_fiction_series_6: req.body.science_fiction_series_6,
    genre_journal_4: req.body.genre_journal_4,
    roulette_2: req.body.roulette_2,
    literary_journal_5: req.body.literary_journal_5,
    occult_reading_1: req.body.occult_reading_1,
    genre_journal_5: req.body.genre_journal_5,
    bizarro_fiction_2: req.body.bizarro_fiction_2,
    prize_3: req.body.prize_3,
    male_author_selection_2: req.body.male_author_selection_2,
    crime_series_7: req.body.crime_series_7,
    backlog_physical_book_2: req.body.backlog_physical_book_2,
    science_fiction_series_7: req.body.science_fiction_series_7,
    literary_journal_6: req.body.literary_journal_6,
    free_selection_4: req.body.free_selection_4,
    crime_series_8: req.body.crime_series_8,
    insert_4: req.body.insert_4,
    science_fiction_series_8: req.body.science_fiction_series_8,
    genre_journal_6: req.body.genre_journal_6,
    classic_2: req.body.classic_2,
    literary_journal_7: req.body.literary_journal_7,
    compendium_2: req.body.compendium_2,
    genre_journal_7: req.body.genre_journal_7,
    non_fiction_2: req.body.non_fiction_2,
    prize_4: req.body.prize_4,
    graphic_novel_2: req.body.graphic_novel_2,
    contemporary_pulp_1: req.body.contemporary_pulp_1,
    vintage_pulp_1: req.body.vintage_pulp_1,
    contemporary_pulp_2: req.body.contemporary_pulp_2,
    vintage_pulp_2: req.body.vintage_pulp_2,
    prize_5: req.body.prize_5,
    female_author_selection_3: req.body.female_author_selection_3,
    crime_series_9: req.body.crime_series_9,
    backlog_ebook_3: req.body.backlog_ebook_3,
    science_fiction_series_9: req.body.science_fiction_series_9,
    free_selection_5: req.body.free_selection_5,
    crime_series_10: req.body.crime_series_10,
    insert_5: req.body.insert_5,
    science_fiction_series_10: req.body.science_fiction_series_10,
    literary_journal_8: req.body.literary_journal_8,
    anthology_2: req.body.anthology_2,
    genre_journal_8: req.body.genre_journal_8,
    roulette_3: req.body.roulette_3,
    literary_journal_9: req.body.literary_journal_9,
    roulette_4: req.body.roulette_4,
    prize_6: req.body.prize_6,
    male_author_selection_3: req.body.male_author_selection_3,
    crime_series_11: req.body.crime_series_11,
    backlog_physical_book_3: req.body.backlog_physical_book_3,
    science_fiction_series_11: req.body.science_fiction_series_11,
    free_selection_6: req.body.free_selection_6,
    crime_series_12: req.body.crime_series_12,
    insert_6: req.body.insert_6,
    science_fiction_series_12: req.body.science_fiction_series_12,
    genre_journal_9: req.body.genre_journal_9,
    occult_reading_2: req.body.occult_reading_2,
    literary_journal_10: req.body.literary_journal_10,
    bizarro_fiction_3: req.body.bizarro_fiction_3,
    genre_journal_10: req.body.genre_journal_10,
    classic_3: req.body.classic_3,
    prize_7: req.body.prize_7,
    graphic_novel_3: req.body.graphic_novel_3,
    female_author_selection_4: req.body.female_author_selection_4,
    crime_series_13: req.body.crime_series_13,
    backlog_ebook_4: req.body.backlog_ebook_4,
    science_fiction_series_13: req.body.science_fiction_series_13,
    literary_journal_11: req.body.literary_journal_11,
    free_selection_7: req.body.free_selection_7,
    crime_series_14: req.body.crime_series_14,
    insert_7: req.body.insert_7,
    science_fiction_series_14: req.body.science_fiction_series_14,
    genre_journal_11: req.body.genre_journal_11,
    compendium_3: req.body.compendium_3,
    literary_journal_12: req.body.literary_journal_12,
    non_fiction_3: req.body.non_fiction_3,
    genre_journal_12: req.body.genre_journal_12,
    anthology_3: req.body.anthology_3,
    prize_8: req.body.prize_8,
    male_author_selection_4: req.body.male_author_selection_4,
    crime_series_15: req.body.crime_series_15,
    backlog_physical_book_4: req.body.backlog_physical_book_4,
    science_fiction_series_15: req.body.science_fiction_series_15,
    literary_journal_13: req.body.literary_journal_13,
    free_selection_8: req.body.free_selection_8,
    crime_series_16: req.body.crime_series_16,
    insert_8: req.body.insert_8,
    science_fiction_series_16: req.body.science_fiction_series_16,
    genre_journal_13: req.body.genre_journal_13,
    roulette_5: req.body.roulette_5,
    literary_journal_14: req.body.literary_journal_14,
    roulette_6: req.body.roulette_6,
    genre_journal_14: req.body.genre_journal_14,
    occult_reading_3: req.body.occult_reading_3,
    prize_9: req.body.prize_9,
    graphic_novel_4: req.body.graphic_novel_4,
    contemporary_pulp_3: req.body.contemporary_pulp_3,
    vintage_pulp_3: req.body.vintage_pulp_3,
    contemporary_pulp_4: req.body.contemporary_pulp_4,
    vintage_pulp_4: req.body.vintage_pulp_4,
    prize_10: req.body.prize_10,
    completed_readings: req.body.completed_readings,
    updated_at: req.body.updated_at
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('user_reading_lists')
  .where('id', req.params.id)
  .update({
    user_id: req.body.user_id,
    interrupt_enabled: req.body.interrupt_enabled,
    current_position: req.body.current_position,
    interrupt: req.body.interrupt,
    female_author_selection_1: req.body.female_author_selection_1,
    crime_series_1: req.body.crime_series_1,
    backlog_ebook_1: req.body.backlog_ebook_1,
    science_fiction_series_1: req.body.science_fiction_series_1,
    free_selection_1: req.body.free_selection_1,
    crime_series_2: req.body.crime_series_2,
    insert_1: req.body.insert_1,
    science_fiction_series_2: req.body.science_fiction_series_2,
    literary_journal_1: req.body.literary_journal_1,
    bizarro_fiction_1: req.body.bizarro_fiction_1,
    genre_journal_1: req.body.genre_journal_1,
    classic_1: req.body.classic_1,
    literary_journal_2: req.body.literary_journal_2,
    compendium_1: req.body.compendium_1,
    prize_1: req.body.prize_1,
    male_author_selection_1: req.body.male_author_selection_1,
    crime_series_3: req.body.crime_series_3,
    backlog_physical_book_1: req.body.backlog_physical_book_1,
    science_fiction_series_3: req.body.science_fiction_series_3,
    free_selection_2: req.body.free_selection_2,
    crime_series_4: req.body.crime_series_4,
    insert_2: req.body.insert_2,
    science_fiction_series_4: req.body.science_fiction_series_4,
    genre_journal_2: req.body.genre_journal_2,
    non_fiction_1: req.body.non_fiction_1,
    literary_journal_3: req.body.literary_journal_3,
    anthology_1: req.body.anthology_1,
    genre_journal_3: req.body.genre_journal_3,
    roulette_1: req.body.roulette_1,
    prize_2: req.body.prize_2,
    graphic_novel_1: req.body.graphic_novel_1,
    female_author_selection_2: req.body.female_author_selection_2,
    crime_series_5: req.body.crime_series_5,
    backlog_ebook_2: req.body.backlog_ebook_2,
    science_fiction_series_5: req.body.science_fiction_series_5,
    literary_journal_4: req.body.literary_journal_4,
    free_selection_3: req.body.free_selection_3,
    crime_series_6: req.body.crime_series_6,
    insert_3: req.body.insert_3,
    science_fiction_series_6: req.body.science_fiction_series_6,
    genre_journal_4: req.body.genre_journal_4,
    roulette_2: req.body.roulette_2,
    literary_journal_5: req.body.literary_journal_5,
    occult_reading_1: req.body.occult_reading_1,
    genre_journal_5: req.body.genre_journal_5,
    bizarro_fiction_2: req.body.bizarro_fiction_2,
    prize_3: req.body.prize_3,
    male_author_selection_2: req.body.male_author_selection_2,
    crime_series_7: req.body.crime_series_7,
    backlog_physical_book_2: req.body.backlog_physical_book_2,
    science_fiction_series_7: req.body.science_fiction_series_7,
    literary_journal_6: req.body.literary_journal_6,
    free_selection_4: req.body.free_selection_4,
    crime_series_8: req.body.crime_series_8,
    insert_4: req.body.insert_4,
    science_fiction_series_8: req.body.science_fiction_series_8,
    genre_journal_6: req.body.genre_journal_6,
    classic_2: req.body.classic_2,
    literary_journal_7: req.body.literary_journal_7,
    compendium_2: req.body.compendium_2,
    genre_journal_7: req.body.genre_journal_7,
    non_fiction_2: req.body.non_fiction_2,
    prize_4: req.body.prize_4,
    graphic_novel_2: req.body.graphic_novel_2,
    contemporary_pulp_1: req.body.contemporary_pulp_1,
    vintage_pulp_1: req.body.vintage_pulp_1,
    contemporary_pulp_2: req.body.contemporary_pulp_2,
    vintage_pulp_2: req.body.vintage_pulp_2,
    prize_5: req.body.prize_5,
    female_author_selection_3: req.body.female_author_selection_3,
    crime_series_9: req.body.crime_series_9,
    backlog_ebook_3: req.body.backlog_ebook_3,
    science_fiction_series_9: req.body.science_fiction_series_9,
    free_selection_5: req.body.free_selection_5,
    crime_series_10: req.body.crime_series_10,
    insert_5: req.body.insert_5,
    science_fiction_series_10: req.body.science_fiction_series_10,
    literary_journal_8: req.body.literary_journal_8,
    anthology_2: req.body.anthology_2,
    genre_journal_8: req.body.genre_journal_8,
    roulette_3: req.body.roulette_3,
    literary_journal_9: req.body.literary_journal_9,
    roulette_4: req.body.roulette_4,
    prize_6: req.body.prize_6,
    male_author_selection_3: req.body.male_author_selection_3,
    crime_series_11: req.body.crime_series_11,
    backlog_physical_book_3: req.body.backlog_physical_book_3,
    science_fiction_series_11: req.body.science_fiction_series_11,
    free_selection_6: req.body.free_selection_6,
    crime_series_12: req.body.crime_series_12,
    insert_6: req.body.insert_6,
    science_fiction_series_12: req.body.science_fiction_series_12,
    genre_journal_9: req.body.genre_journal_9,
    occult_reading_2: req.body.occult_reading_2,
    literary_journal_10: req.body.literary_journal_10,
    bizarro_fiction_3: req.body.bizarro_fiction_3,
    genre_journal_10: req.body.genre_journal_10,
    classic_3: req.body.classic_3,
    prize_7: req.body.prize_7,
    graphic_novel_3: req.body.graphic_novel_3,
    female_author_selection_4: req.body.female_author_selection_4,
    crime_series_13: req.body.crime_series_13,
    backlog_ebook_4: req.body.backlog_ebook_4,
    science_fiction_series_13: req.body.science_fiction_series_13,
    literary_journal_11: req.body.literary_journal_11,
    free_selection_7: req.body.free_selection_7,
    crime_series_14: req.body.crime_series_14,
    insert_7: req.body.insert_7,
    science_fiction_series_14: req.body.science_fiction_series_14,
    genre_journal_11: req.body.genre_journal_11,
    compendium_3: req.body.compendium_3,
    literary_journal_12: req.body.literary_journal_12,
    non_fiction_3: req.body.non_fiction_3,
    genre_journal_12: req.body.genre_journal_12,
    anthology_3: req.body.anthology_3,
    prize_8: req.body.prize_8,
    male_author_selection_4: req.body.male_author_selection_4,
    crime_series_15: req.body.crime_series_15,
    backlog_physical_book_4: req.body.backlog_physical_book_4,
    science_fiction_series_15: req.body.science_fiction_series_15,
    literary_journal_13: req.body.literary_journal_13,
    free_selection_8: req.body.free_selection_8,
    crime_series_16: req.body.crime_series_16,
    insert_8: req.body.insert_8,
    science_fiction_series_16: req.body.science_fiction_series_16,
    genre_journal_13: req.body.genre_journal_13,
    roulette_5: req.body.roulette_5,
    literary_journal_14: req.body.literary_journal_14,
    roulette_6: req.body.roulette_6,
    genre_journal_14: req.body.genre_journal_14,
    occult_reading_3: req.body.occult_reading_3,
    prize_9: req.body.prize_9,
    graphic_novel_4: req.body.graphic_novel_4,
    contemporary_pulp_3: req.body.contemporary_pulp_3,
    vintage_pulp_3: req.body.vintage_pulp_3,
    contemporary_pulp_4: req.body.contemporary_pulp_4,
    vintage_pulp_4: req.body.vintage_pulp_4,
    prize_10: req.body.prize_10,
    completed_readings: req.body.completed_readings,
    updated_at: req.body.updated_at
  }, '*')
    .then((results)=>{
       res.status(200).send(results[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
    let record;

      knex('user_reading_lists')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('user_reading_lists')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            user_id: record.user_id,
            interrupt_enabled: record.interrupt_enabled,
            current_position: record.current_position,
            interrupt: record.interrupt,
            female_author_selection_1: record.female_author_selection_1,
            crime_series_1: record.crime_series_1,
            backlog_ebook_1: record.backlog_ebook_1,
            science_fiction_series_1: record.science_fiction_series_1,
            free_selection_1: record.free_selection_1,
            crime_series_2: record.crime_series_2,
            insert_1: record.insert_1,
            science_fiction_series_2: record.science_fiction_series_2,
            literary_journal_1: record.literary_journal_1,
            bizarro_fiction_1: record.bizarro_fiction_1,
            genre_journal_1: record.genre_journal_1,
            classic_1: record.classic_1,
            literary_journal_2: record.literary_journal_2,
            compendium_1: record.compendium_1,
            prize_1: record.prize_1,
            male_author_selection_1: record.male_author_selection_1,
            crime_series_3: record.crime_series_3,
            backlog_physical_book_1: record.backlog_physical_book_1,
            science_fiction_series_3: record.science_fiction_series_3,
            free_selection_2: record.free_selection_2,
            crime_series_4: record.crime_series_4,
            insert_2: record.insert_2,
            science_fiction_series_4: record.science_fiction_series_4,
            genre_journal_2: record.genre_journal_2,
            non_fiction_1: record.non_fiction_1,
            literary_journal_3: record.literary_journal_3,
            anthology_1: record.anthology_1,
            genre_journal_3: record.genre_journal_3,
            roulette_1: record.roulette_1,
            prize_2: record.prize_2,
            graphic_novel_1: record.graphic_novel_1,
            female_author_selection_2: record.female_author_selection_2,
            crime_series_5: record.crime_series_5,
            backlog_ebook_2: record.backlog_ebook_2,
            science_fiction_series_5: record.science_fiction_series_5,
            literary_journal_4: record.literary_journal_4,
            free_selection_3: record.free_selection_3,
            crime_series_6: record.crime_series_6,
            insert_3: record.insert_3,
            science_fiction_series_6: record.science_fiction_series_6,
            genre_journal_4: record.genre_journal_4,
            roulette_2: record.roulette_2,
            literary_journal_5: record.literary_journal_5,
            occult_reading_1: record.occult_reading_1,
            genre_journal_5: record.genre_journal_5,
            bizarro_fiction_2: record.bizarro_fiction_2,
            prize_3: record.prize_3,
            male_author_selection_2: record.male_author_selection_2,
            crime_series_7: record.crime_series_7,
            backlog_physical_book_2: record.backlog_physical_book_2,
            science_fiction_series_7: record.science_fiction_series_7,
            literary_journal_6: record.literary_journal_6,
            free_selection_4: record.free_selection_4,
            crime_series_8: record.crime_series_8,
            insert_4: record.insert_4,
            science_fiction_series_8: record.science_fiction_series_8,
            genre_journal_6: record.genre_journal_6,
            classic_2: record.classic_2,
            literary_journal_7: record.literary_journal_7,
            compendium_2: record.compendium_2,
            genre_journal_7: record.genre_journal_7,
            non_fiction_2: record.non_fiction_2,
            prize_4: record.prize_4,
            graphic_novel_2: record.graphic_novel_2,
            contemporary_pulp_1: record.contemporary_pulp_1,
            vintage_pulp_1: record.vintage_pulp_1,
            contemporary_pulp_2: record.contemporary_pulp_2,
            vintage_pulp_2: record.vintage_pulp_2,
            prize_5: record.prize_5,
            female_author_selection_3: record.female_author_selection_3,
            crime_series_9: record.crime_series_9,
            backlog_ebook_3: record.backlog_ebook_3,
            science_fiction_series_9: record.science_fiction_series_9,
            free_selection_5: record.free_selection_5,
            crime_series_10: record.crime_series_10,
            insert_5: record.insert_5,
            science_fiction_series_10: record.science_fiction_series_10,
            literary_journal_8: record.literary_journal_8,
            anthology_2: record.anthology_2,
            genre_journal_8: record.genre_journal_8,
            roulette_3: record.roulette_3,
            literary_journal_9: record.literary_journal_9,
            roulette_4: record.roulette_4,
            prize_6: record.prize_6,
            male_author_selection_3: record.male_author_selection_3,
            crime_series_11: record.crime_series_11,
            backlog_physical_book_3: record.backlog_physical_book_3,
            science_fiction_series_11: record.science_fiction_series_11,
            free_selection_6: record.free_selection_6,
            crime_series_12: record.crime_series_12,
            insert_6: record.insert_6,
            science_fiction_series_12: record.science_fiction_series_12,
            genre_journal_9: record.genre_journal_9,
            occult_reading_2: record.occult_reading_2,
            literary_journal_10: record.literary_journal_10,
            bizarro_fiction_3: record.bizarro_fiction_3,
            genre_journal_10: record.genre_journal_10,
            classic_3: record.classic_3,
            prize_7: record.prize_7,
            graphic_novel_3: record.graphic_novel_3,
            female_author_selection_4: record.female_author_selection_4,
            crime_series_13: record.crime_series_13,
            backlog_ebook_4: record.backlog_ebook_4,
            science_fiction_series_13: record.science_fiction_series_13,
            literary_journal_11: record.literary_journal_11,
            free_selection_7: record.free_selection_7,
            crime_series_14: record.crime_series_14,
            insert_7: record.insert_7,
            science_fiction_series_14: record.science_fiction_series_14,
            genre_journal_11: record.genre_journal_11,
            compendium_3: record.compendium_3,
            literary_journal_12: record.literary_journal_12,
            non_fiction_3: record.non_fiction_3,
            genre_journal_12: record.genre_journal_12,
            anthology_3: record.anthology_3,
            prize_8: record.prize_8,
            male_author_selection_4: record.male_author_selection_4,
            crime_series_15: record.crime_series_15,
            backlog_physical_book_4: record.backlog_physical_book_4,
            science_fiction_series_15: record.science_fiction_series_15,
            literary_journal_13: record.literary_journal_13,
            free_selection_8: record.free_selection_8,
            crime_series_16: record.crime_series_16,
            insert_8: record.insert_8,
            science_fiction_series_16: record.science_fiction_series_16,
            genre_journal_13: record.genre_journal_13,
            roulette_5: record.roulette_5,
            literary_journal_14: record.literary_journal_14,
            roulette_6: record.roulette_6,
            genre_journal_14: record.genre_journal_14,
            occult_reading_3: record.occult_reading_3,
            prize_9: record.prize_9,
            graphic_novel_4: record.graphic_novel_4,
            contemporary_pulp_3: record.contemporary_pulp_3,
            vintage_pulp_3: record.vintage_pulp_3,
            contemporary_pulp_4: record.contemporary_pulp_4,
            vintage_pulp_4: record.vintage_pulp_4,
            prize_10: record.prize_10,
            completed_readings: record.completed_readings,
            created_at: record.created_at,
            updated_at: record.updated_at
          };

          res.send(obj);
        })
        .catch((err) => {
          next(err);
        });
    });




module.exports = router;
