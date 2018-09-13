const tableName = 'gadgets';

exports.up = (knex, Promise) =>
  knex.schema.createTable(
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

exports.down = (knex, Promise) =>
  knex.schema.dropTableIfExists(tableName);
