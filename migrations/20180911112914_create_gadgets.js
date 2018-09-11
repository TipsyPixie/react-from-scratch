const tableName = 'gadgets';

exports.up = function(knex, Promise) {
  return knex.schema.createTable(
    tableName,
    (table) => {
      table.increments();
      table.timestamps();
      table.string('name', 64).notNull();
      table.string('webpage').nullable();
      table.text('community').nullable();
      table.text('description').nullable();
      table.string('image_url').nullable();
    }
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(tableName);
};
