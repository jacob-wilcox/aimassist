
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        user_id: 1, 
        first_name: 'Joe', 
        last_name: 'Admin',
        password: '1234',
        my_super: 0,
        is_super: true
        }
      ]);
    });
};