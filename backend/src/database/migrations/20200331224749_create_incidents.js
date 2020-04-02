
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    table.increments('id');
    table.string('ong_id').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.int('value').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
