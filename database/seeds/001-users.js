const bcrypt = (require('bcryptjs'))

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: `${bcrypt.hashSync('password', 12)}`},
        {username: 'lambda', password: `${bcrypt.hashSync('school', 12)}`},
        {username: 'hello', password: `${bcrypt.hashSync('world', 12)}`},
      ]);
    });
};
