
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bullets').del()
    .then(function () {
      // Inserts seed entries
      return knex('bullets').insert([
        {
          bullet_id: 1,
          user_id: 1,
          date:'2021-08-17',
          action:'I did something',
          impact: 'It had an impact',
          result:'with a result',
          feedback:'This sucks'
        },
        {
          bullet_id: 2,
          user_id: 1,
          date:'2021-08-17',
          action:'I did something again',
          impact: 'It had an impact again',
          result:'with another result',
          feedback:'This still sucks'
        }
      ]);
    });
};
